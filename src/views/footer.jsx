import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white text-xs w-full border-t-1 border-teal-300 px-4 py-3 flex justify-between items-center">
      {/* Left side - Policy links */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/noorjsdivs/youtubeportfolio.git"
          className="text-sm hover:underline"
        >
          Inspired from @noorjsdivs/youtubeportfolio
        </a>
      </div>

      {/* Right side - Designed with love text */}
      <div className="flex items-center">
        <span className="text-sm">Designed and developed with</span>
        <span className="text-red-500 mx-1">❤</span>
      </div>
    </footer>
  );
}
