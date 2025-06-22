import React from "react";
import HTMLFlipBook from "react-pageflip";

const pages = [
  {
    image: "/images/first-date.jpg",
    text: "أول مرة خرجنا فيها سوا، كانت من أجمل الأيام ❤️",
  },
  {
    image: "/images/birthday.jpg",
    text: "عيد ميلادك السنة اللي فاتت 🎂🎈",
  },
  {
    image: "/images/beach.jpg",
    text: "أجمل يوم على البحر 🐚",
  },
];

export default function Book() {
  return (
    <div className="flex justify-center items-center py-16 bg-[#f4e9e1]">
      <HTMLFlipBook width={300} height={500} className="shadow-xl">
        <div className="flex flex-col justify-center items-center bg-[#7b4b32] text-white text-2xl font-bold">
          <p>Our Love Story ❤️</p>
        </div>
        {pages.map((p, i) => (
          <div key={i} className="bg-[#fffaf5] text-[#4a2c1f] p-4">
            <img src={p.image} className="w-full h-2/3 object-cover rounded-md" alt="" />
            <p className="text-center mt-2 text-lg">{p.text}</p>
          </div>
        ))}
        <div className="bg-[#fffaf5] text-[#8b5e3c] flex justify-center items-center p-6 text-xl italic">
          <p>بحبك جدًا، أحمد 💌</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
