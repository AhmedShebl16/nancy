import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 z-50">
      <div className="text-2xl font-bold tracking-widest text-[#4a2c1f]">
        N<span className="text-[#8b5e3c]">&</span>S
      </div>

      <ul className="hidden md:flex gap-6 text-[#4a2c1f] font-semibold text-sm uppercase">
        <li>
          <a href="#book" className="hover:text-[#8b5e3c]">our book</a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-[#8b5e3c]">our memories</a>
        </li>
        <li>
          <a href="#love-letter" className="hover:text-[#8b5e3c]">massage 💌</a>
        </li>
      </ul>
    </nav>
  );
}
