import gsap from "gsap";
import React from "react";

type Vars = { [key: string]: any } & { duration: number }

export function animate(target: gsap.TweenTarget, delay: number, vars: Vars, callback?: () => void) {
  setTimeout(() => {
    gsap.to(target, vars);
    setTimeout(() => callback?.(), vars.duration * 1000);
  }, delay)
}

export function animateMany(target: gsap.TweenTarget[], delay: number, vars: Vars, callback?: () => void) {
  setTimeout(() => {
    gsap.to(target, vars);
    setTimeout(() => callback?.(), vars.duration * 1000);
  }, delay)
}

export function setOpacity(target: React.MutableRefObject<HTMLElement>, opacity: string | number) {
  target.current.style.opacity = opacity.toString()
}

export function disable(target: React.MutableRefObject<HTMLElement>) {
  target.current.style.display = "none";
}

export function enableBlock(target: React.MutableRefObject<HTMLElement>) {
  target.current.style.display = "block";
}
