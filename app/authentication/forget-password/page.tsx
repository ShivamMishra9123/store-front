"use client"

import axios from "axios";
// import { useRouter } from 'next/navigation'
// import { getServerSession } from "next-auth";
import { useState } from "react"
// import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Password() {

    const [email, setEmail] = useState('');
    const [detailsNotMatch, setDetailsNotMatch] = useState(false)
    const [successMailSent, setSuccessMailSent] = useState(false)
    // const router = useRouter()

    // const session = await getServerSession(authOptions);
    // console.log('session ', session)

    const handlePasswordReset = async () => {
        try {
            const response = await axios.post('/api/authentication/forget-password', {
                email: email,
            });
            if (response.data.success) {
                setSuccessMailSent(true)
            }
            else {
                setDetailsNotMatch(true)
            }

        }
        catch (error) {
            console.error('Error during Builder.io entry:', error);
        }
    }

    const handleCloseAlert = () => {
        setDetailsNotMatch(false)
        setSuccessMailSent(false)
    }

    return (

        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold  text-gray-900 md:text-2xl ">
                            Forget Password
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input
                                    type="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                    onClick={handleCloseAlert}
                                />
                            </div>
                            {(detailsNotMatch) &&
                                <span className="flex items-center font-bold tracking-wide text-red-600 text-sm ml-1">
                                    Something wrong
                                </span>
                            }
                            {(successMailSent) &&
                                <span className="flex items-center font-bold tracking-wide text-green-600 text-sm ml-1">
                                    link sent to you mail for password reset
                                </span>
                            }
                            <button
                                onClick={handlePasswordReset}
                                type="button"
                                className="mt-4 w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                Reset Password
                            </button>
                            <p className="text-sm font-light text-gray-500 ">
                                Remember the account? <a href="/authentication/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}