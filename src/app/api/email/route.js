import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // use your API key from resend and make sure it is in a string
const fromEmail = process.env.FROM_EMAIL; // use a string email for this -> "test@example.com"

export async function POST(req, res) {
  console.log("Reached route!");
  const { email, subject, message } = await req.json();
  console.log(fromEmail, email, subject, message);
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["trevorchilds04@gmail.com"],
    subject: "hello",
    react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
    ),
  });
  return NextResponse.json({
    status: "ok",
  });
}
