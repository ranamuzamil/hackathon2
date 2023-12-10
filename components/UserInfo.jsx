"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black nav">
      <div className="flex w-full shadow-lg p-8 bg-zince-300/10 justify-between items-center gap-2 my-6">
        <div>
          :<span className="font-bold text-2xl">{session?.user?.name.toUpperCase()}</span>
        </div>
        <button
          onClick={() => signOut()}
          className=" bg-green-600 transition duration-500 hover:bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
