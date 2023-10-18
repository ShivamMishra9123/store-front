import { builder } from '@builder.io/sdk'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Api() {

    const shiva = await builder.getAll('shiv', {
        query: {
            // "data.name": "Shivam Kuamar Mishra",
        },
    })
    // .then((s) => {
    //     return s
    // })

    // const sh = JSON.stringify(shiv.map((data) => {
    //     return data.data
    // }))
    const shiv = shiva.map((value) => {
        return value
    })
    // console.log(shiv)


    return (
        <>
            {JSON.stringify(shiv, null, 2)}
        </>
    )
}