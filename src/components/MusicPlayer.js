import React, { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.volume = 0.5;
      audio.play().catch(e => console.log("Autoplay blocked:", e));
    } else if (audio) {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/sounds/love.mp3" loop autoPlay hidden />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-6 right-6 bg-[#8b5e3c] text-white px-4 py-2 rounded-full shadow-lg text-sm hover:bg-[#71472e] transition"
      >
        {isPlaying ? "إيقاف الموسيقى 🎵" : "تشغيل الموسيقى ▶️"}
      </button>
    </>
  );
}
