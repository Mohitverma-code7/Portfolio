import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Music, Play, Pause, SkipBack, SkipForward, Heart, Volume2, Disc3 } from "lucide-react";

// Local tracks — change titles/artists as needed
const tracks = [
  { title: "Haji Mastan", artist: "Cheema Y", file: "song1.mp3" },
  { title: "I Really Do", artist: "Karan Aujla", file: "song2.mp3" },
  { title: "For a Reason", artist: "Karan Aujla", file: "song3.mp3" },
  { title: "I Wanna Be Yours", artist: "Arctic Monkeys", file: "song4.mp3" },
  { title: "Night Changes", artist: "One Direction", file: "song5.mp3" },
  { title: "Baby", artist: "Justin Bieber", file: "song6.mp3" },
  { title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", file: "song7.mp3" },
  { title: "Drunk Text", artist: "Henry Moodie", file: "song8.mp3" },
  { title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", file: "song9.mp3" },
  { title: "Closer", artist: "The Chainsmokers", file: "song10.mp3" },
  { title: "The Night We Met", artist: "Jude Abastas", file: "song11.mp3" },
];

const SONG_FOLDER = "/music/";

const SpotifySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentTrack = tracks[currentIndex];

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Load track when index changes
  useEffect(() => {
    if (!audioRef.current) return;
    const wasPlaying = isPlaying;
    audioRef.current.pause();
    audioRef.current.src = SONG_FOLDER + currentTrack.file;
    audioRef.current.load();
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);

    if (wasPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise) {
        playPromise.catch(() => setIsPlaying(false));
      }
    }

    const audio = audioRef.current;
    const onTimeUpdate = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => handleNext();

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, [currentIndex]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [isPlaying]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  }, []);

  const handlePrev = useCallback(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    // If more than 3 seconds in, restart current; otherwise go to previous
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      setCurrentTime(0);
      setProgress(0);
    } else {
      setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    }
  }, []);

  const selectTrack = useCallback((index) => {
    if (index === currentIndex) {
      togglePlay();
    } else {
      setCurrentIndex(index);
      // After index change it will auto-play
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 100);
    }
  }, [currentIndex, togglePlay]);

  const formatTime = (sec) => {
    if (!sec || !isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6" />
          <span className="section-subheading mb-4 block">On Repeat</span>
          <h2 className="section-heading">
            WHAT I'M
            <br />
            LISTENING
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12">
          {/* LEFT — Now Playing */}
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1DB954]/20 flex items-center justify-center">
                  <Music size={16} className="text-[#1DB954]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1DB954]">
                  {isPlaying ? "Now Playing" : "Paused"}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {isPlaying && <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />}
                <span className="text-[10px] uppercase tracking-wider opacity-60" style={{ color: "var(--color-text-secondary)" }}>
                  {isPlaying ? "Live" : "Stopped"}
                </span>
              </div>
            </div>

            <div className="px-6 pb-6">
              {/* Vinyl + Equalizer */}
              <div className="relative w-full aspect-square max-w-[300px] mx-auto mb-6 rounded-2xl overflow-hidden border" style={{ borderColor: "var(--glass-border)", background: "var(--glass-bg)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-36 h-36 rounded-full border-4 flex items-center justify-center relative"
                    style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={isPlaying ? { repeat: Infinity, duration: 8, ease: "linear" } : { duration: 0 }}
                  >
                    <div className="absolute inset-4 rounded-full border" style={{ borderColor: "var(--color-border)" }} />
                    <div className="absolute inset-8 rounded-full border" style={{ borderColor: "var(--color-border)" }} />
                    <div className="absolute inset-12 rounded-full border" style={{ borderColor: "var(--color-border)" }} />
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--color-bg)" }}>
                      <div className="w-3 h-3 rounded-full bg-[#1DB954]" />
                    </div>
                  </motion.div>
                  {/* Equalizer */}
                  <div className="absolute bottom-6 flex items-end gap-[3px]">
                    {[0.6, 0.9, 0.4, 0.7, 1, 0.5, 0.8].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-[#1DB954] rounded-full"
                        animate={isPlaying ? { height: [h * 14, h * 7, h * 14] } : { height: h * 4 }}
                        transition={isPlaying ? { repeat: Infinity, duration: 0.8 + i * 0.1, ease: "easeInOut", delay: i * 0.05 } : { duration: 0 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <motion.h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "var(--color-text-primary)" }}
                  animate={isPlaying ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
                  transition={isPlaying ? { repeat: Infinity, duration: 3, ease: "easeInOut" } : {}}
                >
                  {currentTrack.title}
                </motion.h3>
                <p className="text-sm mb-1" style={{ color: "var(--color-text-secondary)" }}>{currentTrack.artist}</p>
                <p className="text-[10px] opacity-50" style={{ color: "var(--color-text-secondary)" }}>
                  Track {currentIndex + 1} of {tracks.length}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mt-6">
                <div
                  className="h-1 rounded-full overflow-hidden cursor-pointer relative"
                  style={{ backgroundColor: "var(--color-border)" }}
                  onClick={(e) => {
                    if (!audioRef.current || !duration) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = (e.clientX - rect.left) / rect.width;
                    audioRef.current.currentTime = pct * duration;
                  }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ width: `${progress}%`, background: "linear-gradient(90deg, #1DB954, var(--color-accent))" }}
                  />
                </div>
                <div className="flex items-center justify-between mt-2 text-[10px]" style={{ color: "var(--color-text-secondary)" }}>
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mt-5">
                <button onClick={handlePrev} style={{ color: "var(--color-text-secondary)" }} className="hover:opacity-80 transition-opacity">
                  <SkipBack size={20} />
                </button>
                <motion.button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "var(--color-text-primary)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause size={20} style={{ fill: "var(--color-bg)", color: "var(--color-bg)" }} />
                  ) : (
                    <Play size={20} style={{ fill: "var(--color-bg)", color: "var(--color-bg)" }} />
                  )}
                </motion.button>
                <button onClick={handleNext} style={{ color: "var(--color-text-secondary)" }} className="hover:opacity-80 transition-opacity">
                  <SkipForward size={20} />
                </button>
              </div>

              <div className="flex items-center justify-between mt-5">
                <button style={{ color: "var(--color-text-secondary)" }} className="hover:text-[#1DB954] transition-colors">
                  <Heart size={16} />
                </button>
                <div className="flex items-center gap-2">
                  <Volume2 size={14} style={{ color: "var(--color-text-secondary)" }} />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    defaultValue="0.75"
                    className="w-20 h-1 appearance-none rounded-full cursor-pointer"
                    style={{ backgroundColor: "var(--color-border)", accentColor: "var(--color-accent)" }}
                    onChange={(e) => {
                      if (audioRef.current) audioRef.current.volume = parseFloat(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Playlist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1DB954]">
                Coding Playlist
              </h3>
              <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{tracks.length} tracks</span>
            </div>

            <div className="space-y-1 max-h-[460px] overflow-y-auto custom-scrollbar">
              {tracks.map((track, i) => {
                const isActive = i === currentIndex;
                return (
                  <motion.div
                    key={i}
                    onClick={() => selectTrack(i)}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all cursor-pointer group border`}
                    style={{
                      backgroundColor: isActive ? "rgba(29,185,84,0.06)" : "transparent",
                      borderColor: isActive ? "rgba(29,185,84,0.15)" : "transparent",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-8 flex-shrink-0 text-center">
                      {isActive && isPlaying ? (
                        <div className="flex items-center justify-center gap-[2px]">
                          {[1, 2, 3].map((bar) => (
                            <motion.div
                              key={bar}
                              className="w-[3px] bg-[#1DB954] rounded-full"
                              animate={{ height: [8, 16, 8] }}
                              transition={{ repeat: Infinity, duration: 0.6 + bar * 0.15, ease: "easeInOut" }}
                            />
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs group-hover:hidden" style={{ color: "var(--color-text-secondary)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                      {!(isActive && isPlaying) && (
                        <Play size={14} className="hidden group-hover:block mx-auto" style={{ color: "var(--color-text-primary)" }} />
                      )}
                    </div>

                    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: isActive ? "rgba(29,185,84,0.08)" : "var(--glass-bg)" }}>
                      <Disc3 size={18} style={{ color: isActive ? "#1DB954" : "var(--color-text-secondary)", opacity: isActive ? 1 : 0.4 }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate" style={{ color: isActive ? "#1DB954" : "var(--color-text-primary)", fontWeight: isActive ? 500 : 400 }}>
                        {track.title}
                      </p>
                      <p className="text-xs truncate" style={{ color: "var(--color-text-secondary)" }}>{track.artist}</p>
                    </div>

                    {isActive && (
                      <span className="text-[10px] uppercase tracking-wider flex-shrink-0 text-[#1DB954] font-medium">Now</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-24">
        <div className="h-px" style={{ backgroundColor: "var(--color-border)" }} />
      </div>
    </section>
  );
};

export default SpotifySection;