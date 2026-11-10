import { useT } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";
import track from "@/assets/time-ambient.mp3.asset.json";

const FADE_MS = 900;

export function AmbientPlayer() {
  const t = useT();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const volRef = useRef(0.5);

  const fadeTo = (target: number, done?: () => void) => {
    const a = audioRef.current;
    if (!a) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = a.volume;
    const start = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / FADE_MS);
      a.volume = Math.max(0, Math.min(1, from + (target - from) * k));
      if (k < 1) rafRef.current = requestAnimationFrame(step);
      else { rafRef.current = null; done?.(); }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    audioRef.current?.pause();
  }, []);

  const toggle = async () => {
    if (!audioRef.current) {
      const a = new Audio();
      a.loop = true;
      a.preload = "auto";
      a.volume = 0;
      a.src = track.url; // loaded only after the first Play
      audioRef.current = a;
    }
    const a = audioRef.current;
    if (playing) {
      setPlaying(false);
      fadeTo(0, () => a.pause());
    } else {
      try {
        a.volume = 0;
        await a.play();
        setPlaying(true);
        fadeTo(volRef.current);
      } catch {
        setPlaying(false);
      }
    }
  };

  const onVolume = (v: number) => {
    setVolume(v);
    volRef.current = v;
    if (audioRef.current && playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      audioRef.current.volume = v;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? t("Pausar música ambiental", "Pause ambient music") : t("Reproducir música ambiental", "Play ambient music")}
        aria-pressed={playing}
        className="w-10 h-10 rounded border border-outline-variant hover:border-primary flex items-center justify-center text-primary transition-colors duration-200"
      >
        <span className="material-symbols-outlined text-[20px]">{playing ? "pause" : "play_arrow"}</span>
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => onVolume(Number(e.target.value))}
        aria-label={t("Volumen de la música", "Music volume")}
        className="hidden md:block w-20 accent-primary cursor-pointer"
      />
    </div>
  );
}
