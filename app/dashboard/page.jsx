import Navbar from "@/components/Navbar";
import TopicsList from "@/components/TopicsList";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";
import AddTopic from "../addTopic/page";
import AddApointment from "@/components/AddApointment";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

        if (!session) redirect("/login");
  return (
    <>

      <UserInfo />
      <h1 className="w-full my-5 m-auto text-center text-2xl text-bold">Your Apointments</h1>
      <hr/>
      <AddApointment/>
      <br/>

      <TopicsList />
          
    </>
  );
}
