import Link from "next/link";

export default function AddApointment() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Add New Apointment
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Add Apointment
      </Link>
    </nav>
  );
}