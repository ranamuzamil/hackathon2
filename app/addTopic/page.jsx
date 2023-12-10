"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !selectedDate ||
      !selectedTime 

    ) {
      alert("Please filled all requirements.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          selectedDate,
          selectedTime,

        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full mt-20 flex-col gap-3"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Apointment For"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Apointment description"
      />
      <input
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        type="date"
      />
      <input
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="border border-slate-500 px-8 py-2"
        type="time"
      />

     
     

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
