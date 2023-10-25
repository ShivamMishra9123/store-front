import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";
import { createHash } from "crypto";
import { getJwtSecretKey } from "../../libs/auth";
import { cookies } from "next/headers";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function POST(request: Request) {
  const cookieStore = cookies();
  const { userName, password } = await request.json();

  try {
    const passwordHash = createHash("sha256").update(password).digest("hex");
    const user = await builder.getAll("authentication", {
      query: {
        "data.username": userName,
      },
    });
    if (user.length == 0) {
      return NextResponse.json({ success: false });
    }

    if (user[0].data.password === passwordHash) {
      console.log("token", password);
      const token = await new SignJWT({
        username: userName,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("30s")
        .sign(getJwtSecretKey());
      const response = NextResponse.json(
        { success: true },
        { status: 200, headers: { "content-type": "application/json" } }
      );
      console.log("token", token);
      cookieStore.set({
        name: "token",
        value: token,
        path: "/",
      });
      console.log("successfully matched");
      return response;
      // return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
