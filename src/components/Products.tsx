"use client";
import { useState } from "react";
import Image from "next/image";
import { v4 } from "uuid";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: v4(),
      name: "Physiotherapist  Website",
      category: "Websites",
      img: "/websites/physio.png",
    },
    {
      id: v4(),
      name: "Food Delivery Website",
      category: "Websites",
      img: "/websites/food.png",
    },
    {
      id: v4(),
      name: "CCTV Intruption Monitoring Website",
      category: "Websites",
      img: "/websites/visionx.png",
    },
    {
      id: v4(),
      name: "Blog",
      category: "Websites",
      img: "/websites/blog.png",
    },
    {
      id: v4(),
      name: "Birthday Invitation",
      category: "Designs",
      img: "/designs/birthday.png",
    },
    {
      id: v4(),
      name: "Course Promotion",
      category: "Designs",
      img: "/designs/course.png",
    },
    {
      id: v4(),
      name: "Hiring Advertisement",
      category: "Designs",
      img: "/designs/hiring.png",
    },
    {
      id: v4(),
      name: "Tourist Advertisement",
      category: "Designs",
      img: "/designs/travel.png",
    },
    {
      id: v4(),
      name: "Product Advertisement",
      category: "Designs",
      img: "/designs/products.png",
    },
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <h1 className="text-2xl font-semibold font-mono text-gray-600">
          Projects
        </h1>
      </div>{" "}
      <div className="mb-8 flex justify-center">
        <button
          className={`px-3 py-1 mr-2 rounded-md transform transition-all duration-300 ease-in-out hover:scale-105 ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 mr-2 rounded-md transform transition-all duration-300 ease-in-out hover:scale-105 ${
            selectedCategory === "Websites"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          }`}
          onClick={() => setSelectedCategory("Websites")}
        >
          Websites
        </button>
        <button
          className={`px-3 py-1 mr-2 rounded-md transform transition-all duration-300 ease-in-out hover:scale-105 ${
            selectedCategory === "Designs"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          }`}
          onClick={() => setSelectedCategory("Designs")}
        >
          Designs
        </button>
      </div>{" "}
      {/* Display filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="relative w-full h-full mb-4 flex flex-col">
              <div className="relative flex-grow h-[250px] w-full">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="rounded-md object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </section>
  );
}
