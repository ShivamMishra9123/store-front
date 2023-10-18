"use client"
import { RenderBuilderContent } from '@/components/builder';
import { builder } from '@builder.io/react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Card } from 'flowbite-react';


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: {
        page: string[];
    };
}

export default async function Home(props: PageProps) {
    const content = await builder.get("page", {
        userAttributes: {
            // Use the page path specified in the URL to fetch the content
            urlPath: "/store" + (props?.params?.page?.join("/") || ""),
        },
    })
        // Convert the result to a promise
        .toPromise();

    const allData = (await builder.getAll('shiv')).map((value) => {
        return value
    })

    return (
        <>
            <div className="bg-lime-100 w-5/6  mx-auto space-y-8 grid gap-4 grid-cols-2 py-4 md:grid-cols-5">
                {allData
                    .map((value, i) => (
                        // <div key={i} className=" mt-8 bg-white flex items-center  p-4 rounded-lg shadow-md space-x-4">

                        //     <div className=" w-3/5 ml-4">
                        //         <div>
                        //             Men's clothes are articles of clothing designed for and worn by men.
                        //             Typical men's clothes include trousers, shirts, jeans, suits, sweaters, gloves, jackets, and hats.
                        //             However, the majority of those clothing items are also items of women's clothing.
                        //         </div>
                        //         <h1 className='flex text-4xl bg-slate-300 mb-2'>{value.name} </h1>
                        //         <p className='bg-yellow-300'>$ {value.data.price}</p>
                        //     </div>
                        //     <div className="bg-slate-100 w-2/5">
                        //         {/* <Image className=" rounded-lg" src={value.data.image} alt={'shivam'} width={250} height={250} /> */}
                        //         <img src={value.data.image} alt='shivam' className='h-48 w-96' />
                        //     </div>
                        // </div>
                        <Card
                            key={i}
                            imgAlt={value.name}
                            imgSrc={value.data.image}
                            className='w-full '
                        >
                            <div className=' w-fu flex flex-col h-full'>
                                <div className='mt-auto'>
                                    <h5 className="text-xl items-center justify-center font-bold tracking-tight text-gray-900">
                                        {value.data.name}
                                    </h5>
                                    <p className='flex w-full'> <AiFillStar className='text-green-600 mt-1' />
                                        <AiFillStar className='text-green-600 mt-1' />
                                        <AiFillStar className='text-green-600 mt-1' />
                                        <AiFillStar className='text-green-600 mt-1' />
                                        <BsStarHalf className='text-green-600 mt-1' />
                                        4.55 out of 5
                                    </p>
                                    <p className="font-normal text-gray-700 bg-yellow-300">
                                        ${value.data.price}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
            </div>
            {/* <div className='text-4xl font-bold text-center items-center mt-4'>Header</div> */}
            <RenderBuilderContent content={content} />

        </>
    );
}