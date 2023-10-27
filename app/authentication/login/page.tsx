
import Login from "./login";
import { getProviders } from "next-auth/react";

export default async function BroadcastHome() {

  // const session = await getServerSession(authOptions);

  const provider = await getProviders() || [''];


  return (
    <>
      <Login provider={provider} />
    </>
  )
}