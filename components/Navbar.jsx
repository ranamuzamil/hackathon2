"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = async () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black nav">
      <div className="flex flex-col p-5 items-center justify-center">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1>
          <a
            className="link-underline link-underline-black text-4xl font-signature"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            VistaCare
          </a>
        </h1>
        <h6 className="text-orange-300 text-sm ">Your Sight, Our Priority</h6>
      </div>

      <ul className="hidden md:flex gap-1">
        <li className="nav-links px-4 cursor-pointer capitalize py-2 font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize py-2 font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/">About</Link>
        </li>

            <li className="nav-links px-4 cursor-pointer bg-orange-500 py-2 capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
              <Link href="/register">SignUp</Link>
            </li>
            <li className="nav-links px-4 cursor-pointer bg-gray-500 capitalize py-2 font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
              <Link href="/login">LogIn</Link>
            </li>

        
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
