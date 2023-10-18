"use client"
import { RenderBuilderContent } from '@/components/builder';
import { builder } from '@builder.io/react';
import Link from 'next/link';

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
            urlPath: "/shiv" + (props?.params?.page?.join("/") || ""),
        },
    })
        // Convert the result to a promise
        .toPromise();
    return (
        <>

            <div className='text-4xl font-bold text-center items-center mt-4'><Link href={'/login'} className='bg-yellow-400'>Shop Now</Link></div>
            <RenderBuilderContent content={content} />

        </>
    );
}