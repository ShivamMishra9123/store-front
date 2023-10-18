import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const { name, price, image } = await request.json();
    const modalData = {
        name: name,
        published: "published",
        data: {
            name: name,
            price: price,
            image: 'https://your-storage-service.com/your-image.jpg'
        }
    }

    try {
        const response = await fetch(`https://builder.io/api/v1/write/shiv`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
                'Content-Type': 'application/json',
                Accept: "*/*"
            },
            body: JSON.stringify(modalData),
        });
        console.log("Shivam", response)
        return NextResponse.json("successfully hit the api", response)
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}


export async function PUT(request: Request) {

    const { price, name } = await request.json();
    const modalData = {
        published: "published",
        data: {
            name: name,
            price: price
        }
    }

    try {
        const response = await fetch(`https://builder.io/api/v1/write/shiv/e9b20fc6e04f4a0d95a45e2cb1249589`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
                'Content-Type': 'application/json',
                Accept: "*/*"
            },
            body: JSON.stringify(modalData),
        });
        console.log("Shivam", response)
        return NextResponse.json("successfully hit the api", response)
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}


export async function PATCH(request: Request) {

    const { price } = await request.json();
    const modalData = {
        published: "published",
        data: {
            price: price
        }
    }

    try {
        const response = await fetch(`https://builder.io/api/v1/write/shiv/e9b20fc6e04f4a0d95a45e2cb1249589`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
                'Content-Type': 'application/json',
                Accept: "*/*"
            },
            body: JSON.stringify(modalData),
        });
        console.log("Shivam", response)
        return NextResponse.json("successfully hit the api", response)
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}


export async function DELETE(request: Request) {

    try {
        const response = await fetch(`https://builder.io/api/v1/write/shiv/2323a62cf4814f9db4db79730f20c895`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
                // Accept: "*/*"
            },
        });
        console.log("Shivam", response)
        return NextResponse.json("successfully hit the api", response)
    } catch (e) {
        console.log("error occured")
        return NextResponse.json(e)
    }
}

