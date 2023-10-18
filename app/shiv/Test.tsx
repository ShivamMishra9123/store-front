import Link from "next/link"

export default function Test() {
    const name = "Shivam kumar"

    return (
        <Link href={'/shivam'}>
            <h1 className="items-center">Created by:-  <p className="font-bold text-red-600 ">{name}</p></h1>
        </Link>
    )
}