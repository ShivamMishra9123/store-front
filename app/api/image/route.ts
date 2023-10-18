import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const { image } = await request.json();
    const modalData = {
        published: "published",
        data: {
            image: '@/home/ds/Downloads/CatalogRequest.png'
        }
    }

    try {
        const response = await fetch(`https://builder.io/api/v1/upload?name=CatalogRequest.png`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
                'Content-Type': 'image/png',
                Accept: "*/*"
            },
            body: JSON.stringify(modalData),
        });
        console.log("Shivam API ", response)
        return NextResponse.json("successfully hit the api", response)
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}
