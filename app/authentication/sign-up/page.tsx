"use client"

import axios from "axios";
import { useRouter } from 'next/navigation'
// import { getServerSession } from "next-auth";
import { useState } from "react"
// import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Signup() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordNotMatch, setPasswordNotMatch] = useState(false)
    const [detailsNotMatch, setDetailsNotMatch] = useState(false)
    const router = useRouter()

    // const session = await getServerSession(authOptions);
    // console.log('session ', session)

    const handleSignUp = async () => {
        try {
            if (password === confirmPassword) {
                const response = await axios.post('/api/authentication/signup', {
                    email: email,
                    name: name,
                    password: password,
                    date: new Date
                });
                if (response.data.success) {
                    router.push('/login')
                }
                else {
                    setDetailsNotMatch(true)
                }

            }
            else {
                setPasswordNotMatch(true)
            }
        } catch (error) {
            console.error('Error during Builder.io entry:', error);
        }
    }

    return (

        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold  text-gray-900 md:text-2xl ">
                            Create and account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input
                                    type="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                    onClick={() => setDetailsNotMatch(false)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                                    placeholder="your name"
                                    onChange={(e) => setName(e.currentTarget.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                    onClick={() => setPasswordNotMatch(false)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 "
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                <input
                                    type="confirm-password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                                    onClick={() => setPasswordNotMatch(false)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 "
                                />
                            </div>
                            {/* <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 " />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-light text-gray-500 ">I accept the <a className="font-medium text-primary-600 hover:underline " href="#">Terms and Conditions</a></label>
                                </div>
                            </div> */}
                            {(passwordNotMatch) &&
                                <span className="flex items-center font-bold tracking-wide text-red-600 text-sm ml-1">
                                    Password not match
                                </span>
                            }
                            {(detailsNotMatch) &&
                                <span className="flex items-center font-bold tracking-wide text-red-600 text-sm ml-1">
                                    Email is already registered
                                </span>
                            }
                            <button
                                onClick={handleSignUp}
                                type="button"
                                className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 ">
                                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}