import { useEffect, useState } from "react";

const TypingTextHome = ({ phrases, speed = 100, delay = 2000 }) => {
  const [displayedHome, setDisplayedHome] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[index];
    if (displayedHome.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedHome((prev) => prev + currentPhrase[displayedHome.length]);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedHome(""); // Reset the text
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase
      }, delay); // Wait before starting next phrase
      return () => clearTimeout(resetTimeout);
    }
  }, [displayedHome, index, phrases, speed, delay]);

  return (
    <div className="text-amber-50 font-mono text-xl transition duration-300 ease-in-out cursor-pointer">
      {displayedHome}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingTextHome;
