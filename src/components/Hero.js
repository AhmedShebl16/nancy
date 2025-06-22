import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/IMG_7314.JPG')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
          fall in love
        </h1>
        <button className="bg-white text-[#8b5e3c] px-4 py-2 text-sm rounded-md shadow-md hover:bg-[#f9f2ed]">
          November 12th
        </button>
      </div>
    </section>
  );
}
