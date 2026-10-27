import type { TypingSoundOption } from "../components/settings/types/Settingstypes";

const soundPaths: Partial<Record<TypingSoundOption, string>> = {
  mechanical: "/sounds/mechanical.mp3",
  typewriter: "/sounds/typewriter.ogg",
  soft: "sounds/cherrymax.m4a",
};

const audioPool: HTMLAudioElement[] = [];

export function playTypingSound(sound: TypingSoundOption) {
  if (sound === "off") return;

  const path = soundPaths[sound];
  if (!path) return;

  let audio = audioPool.find(
    (item) => item.dataset.soundPath === path && item.paused,
  );

  if (!audio) {
    audio = new Audio(path);
    audio.preload = "auto";
    audio.dataset.soundPath = path;
    audioPool.push(audio);
  }

  audio.currentTime = 0;
  void audio.play().catch(() => {
    // Playback can be blocked by the browser.
  });
}
