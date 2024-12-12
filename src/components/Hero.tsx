"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative  w-full h-[80vh] bg-gradient-to-r from-blue-100 to-indigo-600">
      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div className="text-center text-white px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Web Design & Development
          </h1>
          <p className="text-base sm:text-lg mb-6">
            We create stunning websites, professional posters, and eye-catching
            banners to help your business grow online and offline.
          </p>
          <Link
            href={"/services"}
            className="inline-block px-6 py-3 text-lg font-semibold bg-blue-300 hover:bg-blue-600 text-blue-950 rounded-full shadow-lg transition duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
