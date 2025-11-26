import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';
import { generateConfirmationEmail } from '@/lib/emailTemplate';

export async function POST(request: Request) {
    try {
        // Check if request has content
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            console.error('Invalid content type:', contentType);
            return NextResponse.json(
                { error: 'Content-Type must be application/json' },
                { status: 400 }
            );
        }

        let body;
        try {
            body = await request.json();
        } catch (parseError: any) {
            console.error('JSON parse error:', parseError);
            return NextResponse.json(
                { error: 'Invalid JSON in request body', details: parseError.message },
                { status: 400 }
            );
        }

        const { fullName, email, grade, sections, allergies, questions } = body;

        // Validate required fields
        if (!fullName || !email || !grade || !sections || sections.length === 0) {
            console.error('Missing required fields:', { fullName, email, grade, sections });
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
            console.error('Missing environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Check for duplicates
        try {
            const getResponse = await sheets.spreadsheets.values.get({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'Sheet1!C:C', // Email is the 3rd column (index 2, but 1-based A:G -> C is 3rd)
            });

            const existingEmails = getResponse.data.values?.flat() || [];
            // Case insensitive check
            if (existingEmails.some(e => e.toLowerCase() === email.toLowerCase())) {
                console.log(`Email ${email} already registered. Skipping log and email.`);
                return NextResponse.json({ success: true, message: 'Already registered' });
            }
        } catch (checkError) {
            console.error('Error checking for duplicates:', checkError);
            // Proceed with caution, or fail? 
            // If we can't check, we might risk duplicates, but better to fail safe?
            // Let's log and proceed, or maybe fail to avoid duplicates?
            // User said "If it is, then it shouldn't log it again."
            // If we can't read, we probably can't write either.
        }

        // Append to Sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:G',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        new Date().toISOString(), // Timestamp
                        fullName,
                        email,
                        grade,
                        sections.join(', '),
                        allergies || '',
                        questions || '',
                    ],
                ],
            },
        });

        console.log('Successfully submitted to Google Sheets');

        // Send Confirmation Email
        if (process.env.MAILJET_API_KEY && process.env.MAILJET_SECRET_KEY) {
            try {
                const mailjet = Mailjet.apiConnect(
                    process.env.MAILJET_API_KEY,
                    process.env.MAILJET_SECRET_KEY
                );

                await mailjet
                    .post("send", { 'version': 'v3.1' })
                    .request({
                        "Messages": [
                            {
                                "From": {
                                    "Email": "info@triolympiad.ca",
                                    "Name": "WOSS TriOlympiad Team"
                                },
                                "To": [
                                    {
                                        "Email": email,
                                        "Name": fullName
                                    }
                                ],
                                "Subject": "You’re In! Registration Confirmed for WOSS TriOlympiad 2025",
                                "HTMLPart": generateConfirmationEmail(fullName),
                                "TextPart": `Hi ${fullName},\n\nThanks for signing up! We are thrilled to have you join us for the WOSS TriOlympiad.\n\nEvent: WOSS TriOlympiad\nDates: December 15–17, 2025\nLocation: White Oaks Secondary School\n\nSee you there!\n\nWOSS TriOlympiad Team`
                            }
                        ]
                    });
                console.log('Confirmation email sent to', email);
            } catch (emailError) {
                console.error('Failed to send confirmation email:', emailError);
                // We don't fail the request if email fails, as registration was successful
            }
        } else {
            console.warn('Mailjet credentials not found. Skipping email.');
        }

        return NextResponse.json({ success: true, data: response.data });
    } catch (error: any) {
        console.error('Error submitting to Google Sheets:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 }
        );
    }
}
