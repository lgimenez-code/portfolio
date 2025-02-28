import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'


export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_FROM_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASS_APP_EMAIL
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_FROM_EMAIL,
      subject: subject,
      html: `
        <div>
          <i style="color:gray;">
            mail sended from
              <a href="#" target="_blank" style="text-decoration:none; color:gray;">
                ${email}:
              </a>
            </i>
          <div style="margin: 20px 0 0 20px; font-size:14px;">
            ${message}
          </div>
        </div>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log("Email sent: " + info.response);
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}