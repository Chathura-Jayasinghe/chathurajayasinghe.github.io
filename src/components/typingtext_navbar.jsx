import { useEffect, useState } from "react";

const TypingText = ({ phrases, speed = 100, delay = 2000 }) => {
  const [displayedNavbar, setDisplayedNavbar] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[index];
    if (displayedNavbar.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedNavbar((prev) => prev + currentPhrase[displayedNavbar.length]);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedNavbar(""); // Reset the text
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase
      }, delay); // Wait before starting next phrase
      return () => clearTimeout(resetTimeout);
    }
  }, [displayedNavbar, index, phrases, speed, delay]);

  return (
    <div className="text-amber-50 font-mono text-xl transition duration-300 ease-in-out cursor-pointer">
      {displayedNavbar}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingText;
