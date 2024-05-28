import EmailTemplate from "@/app/emails/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// import moment from 'moment';

const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;
const devEmail = process.env.DEV_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const date = new Date();
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log(resend);

  try {
    // * Confirmation email
    const thankYou = await resend.emails.send({
      from: "form@resend.dev", // format for production : `Trevor <${fromEmail}>`
      to: [email], // Email from the form
      subject: subject,
      react: EmailTemplate({
        subject: subject,
        message: message,
        email: email,
      }),
      // react: (
      //   <>
      //     <h1 className="text-decoration-line: none; text-[black]">
      //       Hello {email}!
      //     </h1>
      //     <h1>Subject "{subject}"</h1>
      //     <p className="font-semibold">Message</p>
      //     <p>"{message}"</p>
      //     <p>Thank you for contacting me, I will respond as soon as I can. </p>
      //     <p>
      //       Message Sent {date.getHours()}:
      //       {(date.getMinutes() < 10) |
      //         ("0" + date.getMinutes().toString()) |
      //         date.getMinutes()}
      //       <br />
      //       {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
      //     </p>
      //   </>
      // ),
    });
    // * Email containing the information from the form
    const data = await resend.emails.send({
      from: "form@resend.dev",
      to: [toEmail], // My pesonal email for recieving messages
      subject: subject,
      react: EmailTemplate({
        subject: subject,
        message: message,
        email: email,
      }),
      // react: (
      //   <>
      //     <h1 className="text-decoration-line: none; text-[black]">
      //       Message from {email}!
      //     </h1>
      //     <h1>Subject "{subject}"</h1>
      //     <p className="font-semibold">Message</p>
      //     <p>"{message}"</p>
      //     <p>
      //       Message Sent {date.getHours()}:{date.getMinutes < 10 && 0}
      //       {date.getMinutes()}
      //       <br />
      //       {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
      //     </p>
      //   </>
      // ),
    });
    return NextResponse.json({ data, thankYou });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
// Only accepts emails from resend . dev
//   resend.emails.send({
//     from: "anyemail@resend.dev",
//     to: "trevorchilds04@gmail.com",
//     subject: subject,
//     react: (
//       <>
//         <h1>{subject}</h1>
//         <p>Text</p>
//         <p>Message:</p>
//         <p>{message}</p>
//       </>
//     ),
//   });
//   return NextResponse.json({
//     status: "ok",
//   });
// }
