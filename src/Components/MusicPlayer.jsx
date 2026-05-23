import { useRef, useState, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { songs } from "../Songs";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const song = songs[index];

  // Toggle Play / Pause
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Next Song
  const nextSong = () => {
    setIndex((i) => (i + 1) % songs.length);
    setCurrentTime(0);
  };

  // Previous Song
  const prevSong = () => {
    setIndex((i) => (i === 0 ? songs.length - 1 : i - 1));
    setCurrentTime(0);
  };

  // Update audio src when song changes
  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.src = song.src;
    audio.currentTime = 0;
    if (isPlaying) audio.play();
  }, [index, song.src, isPlaying]);

  // Play/pause control effect
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying]);

  // Update time and duration, handle song end
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration || 0);
    const onEnd = () => nextSong();

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [index]);

  // Handle click on progress bar
  const handleProgressClick = (e) => {
    const bar = progressRef.current;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div
      className="ui-surface ui-surface-strong max-w-xl w-fit md:w-full p-4 text-white"
    >
      {/* Song Info */}
      <div className="flex items-center gap-4 md:gap-3">
        <img src={song.cover} className="h-12 w-12 rounded-xl object-cover" />
        <div className="flex-1">
          <p className="text-sm font-medium">{song.title}</p>
          <p className="text-xs text-gray-300">{song.artist}</p>
        </div>

        <div className="flex gap-2">
          <button onClick={prevSong} className="rounded-full p-2 hover:bg-white/10">
            <SkipBack size={18} />
          </button>
          <button onClick={togglePlay} className="rounded-full p-2 hover:bg-white/10">
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button onClick={nextSong} className="rounded-full p-2 hover:bg-white/10">
            <SkipForward size={18} />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div
          ref={progressRef}
          onClick={handleProgressClick}
          className="relative h-1 cursor-pointer bg-white/10"
        >
          <div
            className="h-1 bg-gradient-to-r from-[#ff2d55] via-[#ff6b8a] to-[#ff9f43] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-1 flex justify-between text-xs text-gray-300">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio ref={audioRef} />
    </div>
  );
}

// Helper function to format time
function formatTime(time) {
  if (!time) return "0:00";
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}
