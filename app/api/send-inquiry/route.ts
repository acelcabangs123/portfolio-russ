// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, company, message } = await request.json();

//     // Validate inputs
//     if (!name || !email || !message) {
//       return Response.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Send email to you
//     const result = await resend.emails.send({
//       from: 'noreply@resend.dev',
//       to: 'russellcabang3@gmail.com',
//       subject: `New Inquiry from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #7c3aed;">New Inquiry Received</h2>
//           <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
//             ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
//             <p><strong>Message:</strong></p>
//             <p style="white-space: pre-wrap;">${message}</p>
//           </div>
//           <p style="color: #6b7280; font-size: 14px;">
//             You can reply to this inquiry by emailing ${email}
//           </p>
//         </div>
//       `,
//     });

//     if (result.error) {
//       console.error('Resend error:', result.error);
//       return Response.json(
//         { error: 'Failed to send email' },
//         { status: 500 }
//       );
//     }

//     return Response.json(
//       { success: true, message: 'Inquiry sent successfully!' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return Response.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }
