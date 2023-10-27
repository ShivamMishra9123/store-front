import { NextResponse } from "next/server";
import { createHash } from 'crypto';
import { builder } from '@builder.io/sdk'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function POST(request: Request) {

    const { name, email, password, date } = await request.json()
    console.log("API is ", email)

    const user = await builder.getAll('authentication', {
        query: {
            "data.email": email,
        },
    })

    const passwordHash = createHash('sha256').update(password).digest('hex');

    const userData = {
        name: name,
        published: "published",
        data: {
            name: name,
            email: email,
            password: passwordHash,
            date: date
        }
    }

    try {
        if (user.length >= 1) {
            return NextResponse.json({ success: false })
        } else {
            const response = await fetch(`https://builder.io/api/v1/write/authentication`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
                    'Content-Type': 'application/json',
                    Accept: "*/*"
                },
                body: JSON.stringify(userData),
            });
            console.log("Shivam API ", response.body)
            return NextResponse.json({ success: true })
        }
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}
