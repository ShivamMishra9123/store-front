import { NextResponse } from "next/server";
import { createHash } from 'crypto';

export async function POST(request: Request) {

    const { userName, password, date } = await request.json()
    console.log("API is ", userName)

    const passwordHash = createHash('sha256').update(password).digest('hex');

    const userData = {
        name: userName,
        published: "published",
        data: {
            username: userName,
            password: passwordHash,
            date: date
        }
    }

    try {
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
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}
