'use client';

import { useEffect } from 'react';

export default function SignalMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('sg-js');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups: Array<() => void> = [];

    const progress = document.querySelector<HTMLElement>('.sg-progress');
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add('is-in');
          io.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    if (!reduce && fine) {
      const tilts = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
      tilts.forEach((el) => {
        let frame = 0;
        const max = Number(el.dataset.tiltStrength || 5);
        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
            el.style.setProperty('--rx', `${(0.5 - y) * max * 1.5}deg`);
          });
        };
        const leave = () => {
          cancelAnimationFrame(frame);
          el.style.removeProperty('--rx');
          el.style.removeProperty('--ry');
        };
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        cleanups.push(() => { cancelAnimationFrame(frame); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); });
      });

      const scenes = Array.from(document.querySelectorAll<HTMLElement>('.sg-scene'));
      scenes.forEach((scene) => {
        const layers = Array.from(scene.querySelectorAll<HTMLElement>('[data-depth]'));
        let frame = 0;
        const move = (event: PointerEvent) => {
          const rect = scene.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            layers.forEach((layer) => {
              const depth = Number(layer.dataset.depth || 8);
              layer.style.setProperty('--mx', String(x * depth));
              layer.style.setProperty('--my', String(y * depth));
            });
          });
        };
        const leave = () => {
          cancelAnimationFrame(frame);
          layers.forEach((layer) => { layer.style.setProperty('--mx', '0'); layer.style.setProperty('--my', '0'); });
        };
        scene.addEventListener('pointermove', move);
        scene.addEventListener('pointerleave', leave);
        cleanups.push(() => { cancelAnimationFrame(frame); scene.removeEventListener('pointermove', move); scene.removeEventListener('pointerleave', leave); });
      });
    }

    return () => { cleanups.forEach((fn) => fn()); root.classList.remove('sg-js'); };
  }, []);

  return <div className="sg-progress" aria-hidden="true" />;
}
