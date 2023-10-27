import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function GET(request: Request) {

    try {
        const cookieStore = cookies()
        const userDataCookie = cookieStore.get('user')
        console.log("Get api work --> ", userDataCookie)

        return NextResponse.json(userDataCookie)
    } catch (e) {
        return NextResponse.json(e)
    }
}

export async function DELETE(request: Request) {
    try {
        cookies().delete('user')
        return NextResponse.json({ delete: true })
    } catch (e) {
        return NextResponse.json(e)
    }
}