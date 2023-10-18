"use client"
import Link from "next/link";

export default function PopularSearch() {
    return (
        <div className=" h-28">
            <div className="flex justify-center items-center font-bold text-black text-2xl">POPULAR SEARCHES</div>
            <div className="grid grid-cols-4 mt-6 w-5/6 mx-auto">
                <div >
                    <Link href={''}><u>ANGEL & CHERUB STATUES</u></Link>
                </div>
                <div >
                    <Link href={''}><u>ANGEL & CHERUB STATUES</u></Link>
                </div>
                <div >
                    <Link href={''}><u>ANGEL & CHERUB STATUES</u></Link>
                </div>
                <div >
                    <Link href={''}><u>ANGEL & CHERUB STATUES</u></Link>
                </div>
            </div>
        </div>
    )
}