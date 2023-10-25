"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
// import router from "next/router"
import { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [detailsNotMatch, setDetailsNotMatch] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    const response = await axios.post("/api/authentication/login", {
      userName,
      password,
    });
    console.log(response.data.success);
    if (response.data.success) {
      router.push("/");
    } else {
      setDetailsNotMatch(true);
    }
  };

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
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Username
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  type="text"
                  id="email"
                  placeholder="abc123"
                  onChange={(e) => setUserName(e.currentTarget.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-2.5"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  onClick={() => setDetailsNotMatch(false)}
                />
              </div>
              {detailsNotMatch && (
                <span className="flex items-center font-bold tracking-wide text-red-600 text-sm ml-1">
                  Incorrect Username or password
                </span>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="button"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleLogin}
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  href="/sign-up"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
