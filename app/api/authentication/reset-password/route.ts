import { builder } from "@builder.io/sdk";
import { createHash } from "crypto";
import { NextResponse } from "next/server";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function PUT(request: Request) {

    const { email, password } = await request.json();
    console.log("api", email)

    const passwordHash = createHash('sha256').update(password).digest('hex');
    const user = await builder.getAll('authentication', {
        query: {
            "data.email": email,
        },
    })

    const modalData = {
        name: email,
        published: "published",
        data: {
            password: passwordHash
        }
    }

    try {
        const response = await fetch(`https://builder.io/api/v1/write/authentications/${user[0].id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
                'Content-Type': 'application/json',
                Accept: "*/*"
            },
            body: JSON.stringify(modalData),
        });
        console.log("Shivam", response)
        return NextResponse.json({ success: true })
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}
