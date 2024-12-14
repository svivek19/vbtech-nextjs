import { DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";

export default function page() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-center my-8">
        <h1 className="text-4xl font-semibold font-mono text-gray-700">
          Our Services
        </h1>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Web Development Service */}
        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Web Development
          </h2>
          <p className="text-gray-600 mb-6">
            We build responsive, fast, and user-friendly websites tailored to
            meet your business goals. From design to deployment, we ensure the
            highest quality.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-3xl text-gray-600">
            <DiMongodb title="MongoDB" className="text-green-600" />
            <DiNodejs title="Node.js" className="text-green-500" />
            <SiExpress title="Express.js" className="text-gray-800" />
            <DiReact title="React.js" className="text-blue-500" />
            <FaJs title="JavaScript" className="text-yellow-500" />
            <FaHtml5 title="HTML5" className="text-orange-600" />
            <FaCss3Alt title="CSS3" className="text-blue-600" />
            <SiTailwindcss title="Tailwind CSS" className="text-blue-400" />
            <FaBootstrap title="Bootstrap" className="text-purple-600" />
            <FaPython title="Python" className="text-blue-700" />
            <SiNextdotjs title="Next.js" className="text-black" />
            <SiTypescript title="TypeScript" className="text-blue-500" />
          </div>
        </div>

        {/* Posters Design Service */}
        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Posters Design
          </h2>
          <p className="text-gray-600 mb-6">
            Our team crafts eye-catching posters that effectively communicate
            your brands message, ensuring high-quality design and impactful
            visuals.
          </p>
          <div className="flex items-center gap-4 text-3xl text-gray-600">
            <SiCanva title="Canva" className="text-blue-500" />
            <SiAdobephotoshop title="Photoshop" className="text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
