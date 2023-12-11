import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Suspense>
        <div className="flex m-20 justify-center flex-col items-center">
          {/* <Image alt="this" src="/i1.png" className="w-96 h-96" /> */}
          <h1 className="font-mono text-4xl">
            <span className="text-6xl text-blue-400">VistaCare </span>Passionate
            About <br /> Helping Take Care of Your Eyes
          </h1>
          <div className="bg-blue-700 w-72 my-10 h-1 "></div>
          <h3
            className="text-lg font-serif
        "
          >
            Al-Shifa Eye Clinic is providing state-of-the-art eye services{" "}
            <br /> with latest diagnostics & highly qualified eye specialists.
          </h3>
          <Link
            href="/apointment"
            className="h-10 w-52 text-sm rounded-md text-center bg-green-600 hover:bg-green-700 m-5 p-3 text-white"
          >
            BOOK AN APOINTMENT
          </Link>
        </div>
      </Suspense>
    </>
  );
}
