"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-500">{session.user.name}</p>
        <button className="btn text-red-700" onClick={() => signOut()}>
          sign out
        </button>
      </div>
    );
  }

  return (
    <button className="btn text-green-600 ml-auto" onClick={() => signIn()}>
      SignInButton
    </button>
  );
};

export default SignInButton;
