import { useState, useRef, useEffect } from 'react';

const BAR_COUNT = 5;
const PLACEHOLDER_DURATION = 6000;

export default function VoiceIntro({ onPlayingChange }) {
  const [playing, setPlaying] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    onPlayingChange?.(playing);
  }, [playing, onPlayingChange]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  function togglePlay() {
    clearTimeout(timeoutRef.current);
    if (playing) {
      setPlaying(false);
      return;
    }
    setPlaying(true);
    timeoutRef.current = setTimeout(() => setPlaying(false), PLACEHOLDER_DURATION);
  }

  return (
    <button type="button" className={`voice-intro-btn ${playing ? 'is-playing' : ''}`} onClick={togglePlay}>
      <span className="voice-intro-waveform" aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <span key={i} className="voice-intro-bar" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
      </span>
      <span>{playing ? 'Playing intro…' : 'Play voice intro'}</span>
    </button>
  );
}
