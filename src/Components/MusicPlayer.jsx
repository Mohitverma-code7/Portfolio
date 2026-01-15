import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import song from "../assets/music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const progress = (currentTime / duration) * 100 || 0;
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-xl w-full border rounded-xl p-4  shadow-sm ${theme === "dark" ? "bg-black" : "bg-white"} `}
    >
      {/* Song info */}
      <div className="flex items-center gap-3">
        <img
          src="https://picsum.photos/60"
          alt="cover"
          className="w-12 h-12 rounded-md"
        />
        <div className="flex-1">
          <p className="text-sm font-medium">See You Again </p>
          <p className="text-xs text-gray-500">Charlie Puth, Wiz Khalifa, DJ Frank E, and Andrew Cedar </p>
        </div>
        <button
          onClick={togglePlay}
          className={`p-2 rounded-full border ${theme === "dark" ? "bg-black hover:bg-blue-700 " : "bg-white hover:bg-gray-200 "} cursor-pointer `}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className={`h-1 w-full ${theme === "dark" ? "bg-black " : "bg-white  "} `}>
          <div
            className={`h-1 ${theme === "dark" ? "bg-white  " : "bg-black  "} rounded`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Audio */}
      <audio ref={audioRef} src={song} />
    </div>
  );
}

function formatTime(time) {
  if (!time) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
