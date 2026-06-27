import { useState, useRef, useEffect } from 'react';

const BAR_COUNT = 5;

export default function VoiceIntro({ onPlayingChange }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    onPlayingChange?.(playing);
  }, [playing, onPlayingChange]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
      return;
    }
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
  }

  return (
    <button type="button" className={`voice-intro-btn ${playing ? 'is-playing' : ''}`} onClick={togglePlay}>
      <audio ref={audioRef} src="/voice-intro.m4a" onEnded={() => setPlaying(false)} preload="none" />
      <span className="voice-intro-waveform" aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <span key={i} className="voice-intro-bar" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </span>
      <span>{playing ? 'Playing intro…' : 'Play voice intro'}</span>
    </button>
  );
}
