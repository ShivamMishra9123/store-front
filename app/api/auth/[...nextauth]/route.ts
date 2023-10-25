// import { NextAuthOptions } from "next-auth";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID!,
      clientSecret: process.env.GOOGLE_CLIENTSECRET!
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn(user) {

      if (user.account?.provider === "google") {

        const userData = {
          name: user.user.name,
          published: "published",
          data: {
            username: user.user.name,
            image: user.user.image,
            email: user.user.email,
            date: new Date
          }
        }

        await fetch(`https://builder.io/api/v1/write/authentication`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer bpk-2942e8740933403f82f4877d86b79a5f`,
            'Content-Type': 'application/json',
            Accept: "*/*"
          },
          body: JSON.stringify(userData),
        });
      }

      return true;
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

