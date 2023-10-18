import { NextResponse } from "next/server";
import { builder } from '@builder.io/sdk'
import { createHash } from 'crypto';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


export async function POST(request: Request) {

    const { userName, password } = await request.json();
    console.log(userName, "     ", password)


    try {
        const passwordHash = createHash('sha256').update(password).digest('hex');
        const user = await builder.getAll('authentication', {
            query: {
                "data.username": userName,
            },
        })
        if (user.length == 0) {
            return NextResponse.json({ success: false });
        }
        // console.log(user[0].data.password)
        // console.log("passwordHash ", passwordHash)

        if (user[0].data.password === passwordHash) {
            console.log("successfully matched")
            return NextResponse.json({ success: true });
        }
        else {
            return NextResponse.json({ success: false })
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json(e)
    }
}
