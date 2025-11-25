import { google } from 'googleapis';
import { NextResponse } from 'next/server';

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

        const { fullName, grade, sections, allergies, questions } = body;

        // Validate required fields
        if (!fullName || !grade || !sections || sections.length === 0) {
            console.error('Missing required fields:', { fullName, grade, sections });
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

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:F', // Assumes Sheet1 exists
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        new Date().toISOString(), // Timestamp
                        fullName,
                        grade,
                        sections.join(', '),
                        allergies || '',
                        questions || '',
                    ],
                ],
            },
        });

        console.log('Successfully submitted to Google Sheets');
        return NextResponse.json({ success: true, data: response.data });
    } catch (error: any) {
        console.error('Error submitting to Google Sheets:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 }
        );
    }
}
