import React from "react";
import HTMLFlipBook from "react-pageflip";

const pages = [
  {
    image: "/images/WhatsApp Image 2025-06-22 at 21.10.01_0373165c.jpg",
    text: "أول مرة نتكلم فيها ، كان شكلنا صغير اوي  😂❤️",
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
       <div
  className="bg-[#7b4b32] flex items-center justify-center"
  style={{ height: "500px", width: "300px" }}
>
  <p className="text-white text-2xl font-bold text-center">Our Love Story ❤️</p>
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
