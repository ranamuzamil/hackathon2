import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserInfo from "@/components/UserInfo";
import AddApointment from "@/components/AddApointment";
import TopicsList from "@/components/TopicsList";

async function Apontmentpage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <>
      <UserInfo />
      <h1 className="w-full my-5 m-auto text-center text-2xl text-bold">
        Your Apointments
      </h1>
      <hr />
      <AddApointment />
      <br />

      <TopicsList />
    </>
  );
}

export default Apontmentpage;
