import { useEffect, useState } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

const TextScramble = ({ text, className = "", delay = 0 }) => {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    let queue = [];

    const resolve = () => {
      const output = text.split("").map((char, i) => {
        if (i < frame) return text[i];
        return chars[Math.floor(Math.random() * chars.length)];
      });
      setDisplay(output.join(""));

      if (frame < text.length) {
        frame += 1 / 3;
        setTimeout(resolve, 30);
      } else {
        setDisplay(text);
      }
    };

    setTimeout(resolve, 100);
  }, [started, text]);

  return <span className={className}>{started ? display : text}</span>;
};

export default TextScramble;