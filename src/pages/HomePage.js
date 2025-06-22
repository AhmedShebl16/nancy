import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; // ✅ أضفنا الـ Hero هنا
import Book from "./Book";
import GallerySection from "../components/GallerySection";
import LoveLetterSection from "../components/LoveLetterSection";
import MusicPlayer from "../components/MusicPlayer";

export default function HomePage() {
  return (
    <>
      <MusicPlayer />
      <Navbar />

      {/* SECTION: Hero */}
      <div id="hero">
        <Hero />
      </div>

      {/* SECTION: OUR BOOK */}
      <div className="pt-20" id="book">
        <Book />
      </div>

      {/* SECTION: ذكرياتنا */}
      <div id="gallery">
        <GallerySection />
      </div>

      {/* SECTION: رسالة ليكي */}
      <div id="love-letter">
        <LoveLetterSection />
      </div>
    </>
  );
}
