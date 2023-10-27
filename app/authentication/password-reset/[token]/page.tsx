"use client"

import axios from "axios";
import { useRouter } from 'next/navigation'
// import { getServerSession } from "next-auth";
import { useState } from "react"
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
// import { authOptions } from "../api/auth/[...nextauth]/route";

export default function ResetPassword({ params }: { params: { token: string } }) {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordNotMatch, setPasswordNotMatch] = useState(false)
    const [tokenEmail, setTokenEmail] = useState('')
    const router = useRouter()

    const token = params.token

    try {
        const decodedToken = jwt.verify(token, "jwtSecret") as JwtPayload
        setTokenEmail(decodedToken?.email)
        // console.log("jwt email 1", userEmails)
        // if (decodedToken && typeof decodedToken === 'object') {
        //     const userEmail = decodedToken.email;
        //     console.log("jwt email 2", userEmail)
        // } else {
        //     console.log("error in jwt")
        // }
    } catch (error) {
        console.error('JWT verification error:', error);
    }

    console.log('jwt token ', tokenEmail)
    // if (!tokenEmail) {
    //     return (
    //         <>Sorry , you do not have permission for this page </>
    //     )
    // }

    const handleSignUp = async () => {
        try {
            if (password === confirmPassword) {
                const response = await axios.put('/api/authentication/reset-password', {
                    email: tokenEmail,
                    password: password
                });
                if (response.data.success) {
                    router.push('/authentication/login')
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
                            Reset your password
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
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
                            {(passwordNotMatch) &&
                                <span className="flex items-center font-bold tracking-wide text-red-600 text-sm ml-1">
                                    Password not match
                                </span>
                            }
                            {/* {(detailsNotMatch) &&
                                <span className="flex items-center font-bold tracking-wide text-red-600 text-sm ml-1">
                                    Email is already registered
                                </span>
                            } */}
                            <button
                                onClick={handleSignUp}
                                type="button"
                                className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                save password
                            </button>
                            {/* <p className="text-sm font-light text-gray-500 ">
                                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}