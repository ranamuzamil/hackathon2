import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HomePage from "./homePage/page";


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main className="h-screen bg-slate-700">

   <HomePage />
    </main>
  );
}
