"use client";
import Link from "next/link";
import { useAuth } from "./api/hooks/useAuth";

export default function Home() {
  const auth = useAuth();
  console.log("auth", auth);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <nav>
          {auth ? (
            <p>logged in</p>
          ) : (
            <Link href="/login">Please -- -- Login</Link>
          )}
        </nav>
      </main>
    </>
  );
}
