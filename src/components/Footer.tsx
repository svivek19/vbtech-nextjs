import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-2">
      <p className="text-blue-950 text-center text-sm">
        © {new Date().getFullYear()} V & B Solutions. All rights reserved.
      </p>
    </footer>
  );
}
