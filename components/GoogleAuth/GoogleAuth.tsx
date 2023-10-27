import { Button } from "flowbite-react";
import { ClientSafeProvider, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleAuth({ provider }: { provider: ClientSafeProvider }) {

    // console.log('prov ', providers)

    return (
        <>
            {Object.values(provider).map((provider, i) =>
                <Button key={i}
                    color="light"
                    className="bg-blue-500 hover:bg-blue-600 w-full h-auto text-white font-medium rounded-lg text-sm  text-center"
                    onClick={() => signIn(provider.id)}
                >
                    {provider.name === "Google" ?
                        <FcGoogle className="mx-2 h-6 w-6 bg-white rounded-xl" size={15} />
                        : null}
                    Sign in with Google
                    {provider.name}
                </Button>
            )}
        </>
    )
}

