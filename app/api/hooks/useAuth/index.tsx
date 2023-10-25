"use client";
import { JWTPayload } from "jose";
import React from "react";
import { getCookie } from "cookies-next";
import { verifyJwtToken } from "../../libs/auth";

export function useAuth() {
  const [auth, setAuth] = React.useState<JWTPayload | null>();

  const getVerifiedtoken = async () => {
    const token = getCookie("token") ?? null;
    const verifiedToken = await verifyJwtToken(token!);
    setAuth(verifiedToken);
  };
  React.useEffect(() => {
    getVerifiedtoken()
  }, []);
  return auth;
}
