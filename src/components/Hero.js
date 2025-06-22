import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh]">
      {/* الصورة الخلفية */}
      <img
        src="/images/IMG_7314.JPG"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* تغطية سوداء خفيفة */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* المحتوى في النص */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">
          fall in love
        </h1>
        <button className="bg-white text-[#8b5e3c] px-4 py-2 text-sm rounded-md shadow-md hover:bg-[#f9f2ed]">
          November 12th
        </button>
      </div>
    </section>
  );
}
