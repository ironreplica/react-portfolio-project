import EmailTemplate from "@/app/emails/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// import moment from 'moment';

const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;
// const devEmail = process.env.DEV_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const date = new Date();
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log(resend);

  try {
    // * Confirmation email
    const thankYou = await resend.emails.send({
      from: fromEmail, // format for production : `Trevor <${fromEmail}>`
      to: [email], // Email from the form
      subject: subject,
      react: EmailTemplate({
        subject: subject,
        message: message,
        email: email,
      }),
    });
    // * Email containing the information from the form
    const data = await resend.emails.send({
      from: "form@trevor-childs.com",
      to: [toEmail], // My pesonal email for recieving messages
      subject: subject,
      react: EmailTemplate({
        subject: subject,
        message: message,
        email: email,
      }),
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
