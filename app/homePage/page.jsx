'use client'
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Suspense } from "react";



function HomePage() {

  return (<>
  <Navbar/>
  <Suspense fallback={<p>Loading feed...</p>}>


    <div>
  
      <div
        className="flex justify-center"
        style={{
          backgroundImage: `url('/fd.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "800px", // Adjust height as needed
          // Other styles
        }}
      >
        <div className="flex md:mt-10 text-8xl text-gray-200 gap-10 font-serif items-center flex-col ">
          <h1>Your Eye Sight</h1>
          <h2 className="text-orange-600">is our Vision</h2>
          <div className="bg-black w-full h-1 "></div>
          <h2 className="text-orange-500 text-2xl">
            VistaCare truly believe that patients deserve the <br /> highest
            standard of eye care.
          </h2>
          <Link
            href="/about"
            className="h-10 w-32 text-sm rounded-md text-center bg-green-700 hover:text-base p-2 text-white"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
      <div className="flex m-20 justify-center flex-col items-center">
        {/* <Image alt="this" src="/i1.png" className="w-96 h-96" /> */}
        <h1 className="font-mono text-4xl">
          <span className="text-6xl text-blue-400">VistaCare </span>Passionate
          About <br /> Helping Take Care of Your Eyes
        </h1>
        <div className="bg-blue-700 w-72 my-10 h-1 "></div>
        <h3 className="text-lg font-serif
        ">
          Al-Shifa Eye Clinic is providing state-of-the-art eye services <br /> with
          latest diagnostics & highly qualified eye specialists.
        </h3>
        <Link
          href="/apointment"
          className="h-10 w-52 text-sm rounded-md text-center bg-green-600 hover:bg-green-700 m-5 p-3 text-white"
        >
          BOOK AN APOINTMENT
        </Link>
      </div>
    </div>
    </Suspense>
    </>
  );
}

export default HomePage;
