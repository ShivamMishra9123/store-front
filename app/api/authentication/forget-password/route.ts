import { NextResponse } from "next/server";
import { builder } from '@builder.io/sdk'
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function POST(request: Request) {
    const pass = process.env.NEXTAUTH_PASS;

    const { email } = await request.json();
    console.log("email     ", email)

    try {
        const user = await builder.getAll('authentication', {
            query: {
                "data.email": email,
            },
        })
        console.log("forget password API hitting, ", user)

        if (user.length == 0) {
            return NextResponse.json({ success: false });
        }
        const token = jwt.sign({ email: user[0].data?.email }, "jwtSecret", { expiresIn: '1h' });
        console.log('jwt token', token)

        const resetLink = `http://localhost:3000/authentication/password-reset/${token}`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shivam.k@trikatechnologies.com',
                pass: pass,
            },
        });


        const mailOptions = {
            from: 'shivam.k@trikatechnologies.com',
            to: user[0].data?.email,
            subject: 'Password Reset',
            text: `Click the link to reset your password: ${resetLink}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });

    } catch (e) {
        console.log(e)
        return NextResponse.json(e)
    }
}
