'use client';

import { useEffect, useRef } from 'react';

const cards = [
  { num: '01', text: "New leads coming in but nobody's following up?" },
  { num: '02', text: 'Spending your day on tasks that should run themselves?' },
  { num: '03', text: 'Onboarding a client still means doing everything manually?' },
  { num: '04', text: "Your apps are everywhere but nothing talks to each other?" },
  { num: '05', text: "You said yes to more clients but your process can't keep up?" },
  { num: '06', text: 'Still the only person holding your whole business together?' },
];

const rotations: Record<number, string> = {
  0: '18deg',
  1: '0deg',
  2: '-18deg',
};

export default function WhyWorkWithMe() {
  const gridRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const animatingRef = useRef(false);

  useEffect(() => {
    const grid = gridRef.current;
    const body = bodyRef.current;
    const cta = ctaRef.current;
    if (!grid || !body || !cta) return;

    const cardEls = Array.from(grid.querySelectorAll<HTMLElement>('.wwm-card'));
    const timers: ReturnType<typeof setTimeout>[] = [];
    let cancelled = false;

    function schedule(fn: () => void, ms: number) {
      const id = setTimeout(fn, ms);
      timers.push(id);
      return id;
    }

    function startBreathing() {
      if (cancelled || !cta) return;
      cta.animate(
        [
          { transform: 'scale(1)', boxShadow: '0 6px 24px rgba(51,10,10,0.3), 0 0 0px rgba(168,64,64,0)' },
          { transform: 'scale(1.04)', boxShadow: '0 6px 24px rgba(51,10,10,0.3), 0 0 28px 6px rgba(168,64,64,0.45)' },
          { transform: 'scale(1)', boxShadow: '0 6px 24px rgba(51,10,10,0.3), 0 0 0px rgba(168,64,64,0)' },
        ],
        { duration: 2400, easing: 'ease-in-out', iterations: Infinity }
      );
    }

    function triggerShimmer() {
      if (cancelled || !body) return;

      body.animate(
        [
          { transform: 'scale(1)', color: '#9a8880' },
          { transform: 'scale(1.18)', color: '#ffffff', offset: 0.25 },
          { transform: 'scale(1)', color: '#ffffff', offset: 0.5 },
          { transform: 'scale(1.18)', color: '#ffffff', offset: 0.75 },
          { transform: 'scale(1)', color: '#ffffff' },
        ],
        { duration: 4400, easing: 'ease-in-out', fill: 'forwards' }
      );

      schedule(startBreathing, 4600);
    }

    function runSpotlight() {
      if (animatingRef.current || cancelled) return;
      animatingRef.current = true;

      let i = 0;
      const duration = 1600;

      function step() {
        if (cancelled) return;
        if (i < cardEls.length) {
          const col = i % 3;
          const rot = rotations[col];
          cardEls.forEach((c, ci) => {
            if (ci === i) {
              c.style.transform = `scale(1.18) rotateY(${rot})`;
              c.style.opacity = '1';
              c.style.borderColor = 'rgba(255,255,255,0.6)';
              c.style.boxShadow =
                '0 0 24px 6px rgba(255,255,255,0.15), 0 0 60px 10px rgba(255,255,255,0.07)';
              c.style.zIndex = '10';
            } else {
              c.style.transform = 'scale(0.92)';
              c.style.opacity = '0.2';
              c.style.borderColor = '#2e1212';
              c.style.boxShadow = 'none';
              c.style.zIndex = '1';
            }
          });
          i++;
          schedule(step, duration);
        } else {
          cardEls.forEach((c) => {
            c.style.transform = '';
            c.style.opacity = '';
            c.style.borderColor = '';
            c.style.boxShadow = '';
            c.style.zIndex = '';
          });
          animatingRef.current = false;
          triggerShimmer();
        }
      }

      step();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          schedule(runSpotlight, 400);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(grid);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      animatingRef.current = false;
      observer.disconnect();
    };
  }, []);

  return (
    <section className="wwm-section">
      <h2 className="wwm-title">
        Why Work <span>With Me?</span>
      </h2>
      <p className="wwm-sub">Does any of these sound familiar to you?</p>

      <div className="wwm-grid" ref={gridRef}>
        {cards.map((card, index) => (
          <div className="wwm-card" key={card.num} data-col={index % 3}>
            <span className="wwm-num">{card.num}</span>
            <p className="wwm-text">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="wwm-divider" />

      <p className="wwm-body" ref={bodyRef}>
        I set up the CRM systems and automations that take
        <br />
        those problems off your plate —
        <br />
        so your business keeps moving even when you&apos;re not.
      </p>

      <a href="#contact" className="wwm-cta" ref={ctaRef}>
LET&apos;S FIX THAT →
      </a>
    </section>
  );
}
