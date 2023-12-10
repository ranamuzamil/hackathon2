import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  let topics;
  if (!topics || topics.length === 0) {
    return <p>No topics available.</p>; // Return a message if topics are undefined or empty
  }
  try {
    const result = await getTopics();
    if (result && result.topics) {
      topics = result.topics;
    } else {
      // Handle the case when 'topics' is undefined in the result
    }
  } catch (error) {
    // Handle errors from getTopics() function
    console.error('Error fetching topics:', error);
  }
  // const { topics } = await getTopics();

  return (
    <>
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <h1 className="text-white font-bold" href={"/"}>
        Pending Apointment
      </h1>
      <h2 className="p-2" href={"/"}>
        .
      </h2>
    </nav>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
