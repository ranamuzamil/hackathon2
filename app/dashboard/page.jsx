import Navbar from "@/components/Navbar";
import TopicsList from "@/components/TopicsList";
import UserInfo from "@/components/UserInfo";
import Link from "next/link";
import AddTopic from "../addTopic/page";
import AddApointment from "@/components/AddApointment";


export default function Dashboard() {
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
