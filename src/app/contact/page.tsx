"use client";

import { BsWhatsapp } from "react-icons/bs";

export default function page() {
  return (
    <div className="flex flex-col space-y-8 justify-center items-center h-[60vh]">
      <div className="flex justify-center my-6">
        <h1 className="text-4xl font-semibold font-mono text-gray-700">
          Contact Here!
        </h1>
      </div>
      <div
        onClick={() =>
          window.open(`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`)
        }
        className="text-green-500 cursor-pointer border-2 border-green-500 p-3 rounded-full hover:border-4 duration-300 shadow-xl"
      >
        <BsWhatsapp size={35} />
      </div>{" "}
    </div>
  );
}
