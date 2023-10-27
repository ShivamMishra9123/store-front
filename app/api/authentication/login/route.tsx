import { NextResponse } from "next/server";
import { builder } from '@builder.io/sdk'
import { createHash } from 'crypto';
import { serialize } from 'cookie';
import { cookies } from 'next/headers'


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


export async function POST(request: Request) {

    const { email, password } = await request.json();
    console.log(email, "     ", password)


    try {
        const passwordHash = createHash('sha256').update(password).digest('hex');
        const user = await builder.getAll('authentication', {
            query: {
                "data.email": email,
            },
        })
        const cookieStore = cookies()
        const userDataCookie = cookieStore.get('user')

        if (userDataCookie) {
            console.log("cookie data --->", userDataCookie)
            return NextResponse.json(userDataCookie)
        } else if (user.length == 0) {
            return NextResponse.json({ success: false });
        }


        if (user[0].data?.password === passwordHash) {
            console.log("successfully matched")
            const userCookie = serialize('user', JSON.stringify({ user: user }), {
                httpOnly: true,
                maxAge: 60 * 60 * 24, // 24 hours in seconds
                sameSite: 'lax',
                path: '/',
            });
            const response = NextResponse.json({ success: true });
            response.headers.append('Set-Cookie', userCookie);

            return response;
        }
        else {
            return NextResponse.json({ success: false })
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json(e)
    }
}
