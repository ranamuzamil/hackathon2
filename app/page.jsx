'use client'
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HomePage from "./homePage/page";
import { BallTriangle } from  'react-loader-spinner'

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main className="h-screen bg-slate-700">

   <HomePage />
        {/* <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle=""
          visible={true}
        />
      ) : (
        <HomePage /> */}

    </main>
  );
}
