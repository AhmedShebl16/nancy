import React from "react";

const memories = [
  { image: "/images/first-date.jpg", caption: "أول خروجة سوا 🌹" },
  { image: "/images/birthday.jpg", caption: "عيد ميلادك 🎂" },
  { image: "/images/beach.jpg", caption: "أجمل يوم على البحر 🐚" },
  { image: "/images/cafe.jpg", caption: "قهوتنا سوا ☕" },
];

export default function GallerySection() {
  return (
    <section className="bg-[#fffaf5] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#4a2c1f] mb-4">ذكرياتنا</h2>
        <p className="text-[#8b5e3c]">لحظات محفورة في القلب ❤️</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {memories.map((item, index) => (
          <div key={index} className="bg-white border border-[#f0e0d6] rounded-md overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105">
            <img
              src={item.image}
              alt="memory"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-105"
            />
            <p className="text-center p-3 text-[#4a2c1f] font-medium text-sm">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
