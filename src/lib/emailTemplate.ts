export function generateConfirmationEmail(participantName: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmed</title>
        <!--[if mso]>
        <noscript>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        </style>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; color: #e2e8f0; -webkit-font-smoothing: antialiased;">
        
        <!-- Main Wrapper -->
        <div style="background-color: #0f172a; padding: 40px 0; min-height: 100vh;">
            
            <!-- Container -->
            <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); border: 1px solid #334155;">
                
                <!-- Header -->
                <!-- Changed background to dark to make the logo pop and look more premium -->
                <div style="background-color: #0f172a; background-image: radial-gradient(circle at top center, #1e293b 0%, #0f172a 100%); padding: 40px 20px; text-align: center; position: relative; border-bottom: 1px solid #334155;">
                    
                    <!-- Logo -->
                    <img src="https://www.triolympiad.ca/logo.png" alt="WOSS TriOlympiad Logo" style="width: 80px; height: auto; margin-bottom: 24px; display: inline-block;">
                    
                    <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: -0.025em; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">You’re In! 🚀</h1>
                    <p style="margin: 12px 0 0; color: #94a3b8; font-size: 18px; font-weight: 500;">Registration Confirmed</p>
                </div>

                <!-- Content -->
                <div style="padding: 40px;">
                    <p style="margin: 0 0 24px; font-size: 18px; color: #f1f5f9; font-weight: 600;">Hi ${participantName},</p>
                    
                    <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                        Thanks for signing up! We are absolutely thrilled to have you join us for the <strong>WOSS TriOlympiad 2025</strong>. Get ready for an unforgettable experience of problem-solving and innovation.
                    </p>
                    
                    <!-- Details Card -->
                    <div style="background-color: #0f172a; border-radius: 16px; padding: 24px; border: 1px solid #334155; margin-bottom: 32px;">
                        <h3 style="margin: 0 0 20px; color: #10b981; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;">Event Details</h3>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 14px; width: 100px; vertical-align: top;">Event</td>
                                <td style="padding: 12px 0 12px 16px; border-bottom: 1px solid #334155; color: #f8fafc; font-size: 15px; font-weight: 500;">WOSS TriOlympiad<br><span style="font-size: 13px; color: #64748b;">(Physics, Math & CS Competition)</span></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 14px; vertical-align: top;">Dates</td>
                                <td style="padding: 12px 0 12px 16px; border-bottom: 1px solid #334155; color: #f8fafc; font-size: 15px; font-weight: 500;">December 15–17, 2025</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #334155; color: #94a3b8; font-size: 14px; vertical-align: top;">Location</td>
                                <td style="padding: 12px 0 12px 16px; border-bottom: 1px solid #334155; color: #f8fafc; font-size: 15px; font-weight: 500;">White Oaks Secondary School<br><span style="font-size: 13px; color: #64748b;">1330 Montclair Dr, Oakville</span></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; color: #94a3b8; font-size: 14px; vertical-align: top;">Check-in</td>
                                <td style="padding: 12px 0 0 16px; color: #f8fafc; font-size: 15px; font-weight: 500;">South Main Cafeteria</td>
                            </tr>
                        </table>
                    </div>

                    <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                        Please head directly to the <strong>South Main Cafeteria</strong> upon arrival to check in and get your badge. We have three days of exciting activities planned for you!
                    </p>

                    <!-- CTA Button -->
                    <div style="text-align: center; margin: 32px 0;">
                        <a href="https://www.triolympiad.ca" target="_blank" style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3); transition: background-color 0.2s;">
                            Visit Website
                        </a>
                    </div>

                    <div style="border-top: 1px solid #334155; padding-top: 24px; margin-top: 32px;">
                        <p style="margin: 0 0 8px; font-size: 14px; color: #94a3b8;">
                            Questions? Reply to this email or contact us at <a href="mailto:wosstriolympiad@gmail.com" style="color: #10b981; text-decoration: none;">wosstriolympiad@gmail.com</a>.
                        </p>
                        <p style="margin: 0; font-size: 16px; color: #f8fafc; font-weight: 600;">
                            See you there! 👋
                        </p>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #0f172a; padding: 24px; text-align: center; border-top: 1px solid #334155;">
                    <p style="margin: 0 0 8px; font-size: 14px; color: #f8fafc; font-weight: 600;">WOSS TriOlympiad Team</p>
                    <p style="margin: 0; font-size: 12px; color: #64748b;">
                        &copy; 2025 WOSS TriOlympiad. All rights reserved.<br>
                        <a href="https://www.triolympiad.ca" style="color: #64748b; text-decoration: underline;">www.triolympiad.ca</a>
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}
