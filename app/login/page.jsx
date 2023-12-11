import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <>
      <Navbar />
      {/* <Suspense fallback={<p>Loading feed...</p>}> */}
        <LoginForm />
      {/* </Suspense> */}
    </>
  );
}
