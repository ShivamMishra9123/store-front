"use client"
import axios from "axios"
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from "react"
import GoogleAuth from "@/components/GoogleAuth/GoogleAuth"
import { ClientSafeProvider } from "next-auth/react"
// import { getProviders, signIn } from "next-auth/react"
// import { Button } from "flowbite-react"
// import { FcGoogle } from "react-icons/fc"
// import { getServerSession } from "next-auth"
// import { authOptions } from "../api/auth/[...nextauth]/route"

export default function Login({ provider }: { provider: ClientSafeProvider }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [detailsNotMatch, setDetailsNotMatch] = useState(false)
    const [session, setSession] = useState<any>();
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        axios.get(`/api/authentication/check-login`).then((response) => {
            const userData = JSON.parse(JSON.stringify(response.data));
            setSession(userData.name);
        });
    }, [loading]);


    if (session) {
        redirect('/store')
    }

    // const sessions = await getServerSession(authOptions).then((v) => { return v })
    // console.log(sessions)
    // if (sessions) {
    //     redirect('/store')
    // }

    const handleLogin = async () => {
        const response = await axios.post('/api/authentication/login', {
            email,
            password
        });
        console.log(response.data.name)
        if (response.data.success) {
            router.push('/store')
        }
        else {
            setDetailsNotMatch(true)
        }

    }

    // const providers = await getProviders() || [];
    // console.log('google auth ', providers)

    return (
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                                    type="email"
                                    id="email"
                                    placeholder="abc123@gmail.com"
                                    onChange={(e) => setEmail(e.currentTarget.value)} />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-2.5"
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                    onClick={() => setDetailsNotMatch(false)} />
                            </div>
                            {(detailsNotMatch) &&
                                <span className="flex items-center font-bold tracking-wide text-red-600 text-sm ml-1">
                                    Incorrect Username or password
                                </span>
                            }
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 " />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="/authentication/forget-password" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                            </div>
                            <button
                                type="button"
                                className="w-full text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={handleLogin}
                            >
                                Sign in
                            </button>
                            <div className="flex">
                                <hr className="w-1/2 mt-3"></hr>
                                <p className="text-slate-500">or</p>
                                <hr className="w-1/2 mt-3"></hr>
                            </div>
                            <GoogleAuth provider={provider} />
                            {/* <Button color="light" className="bg-blue-500 hover:bg-blue-600 w-full h-auto text-white font-medium rounded-lg text-sm  text-center">
                                {provider.name === "Google" ?
                                <FcGoogle className="mx-2 h-6 w-6 bg-white rounded-xl" size={15} />
                               : null}
                                Sign in with Google
                                 {provider.name}
                            </Button> */}
                            {/* {Object.values(providers).map((provider, i) =>
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
                            )} */}
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <a href="/sign-up" className="font-medium text-primary-600 hover:underline ">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}