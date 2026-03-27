'use client';

import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'RJ Villamer',
    role: 'Business Owner',
    quote:
      'Charmaine completely transformed how my business runs. I used to spend hours chasing leads manually — now everything just flows automatically.',
  },
  {
    name: 'Chrissy Reter',
    role: 'Beckon Homes',
    quote:
      'Ingrid is a lovely addition to a team. She is thoughtful and thorough in her work!',
    featured: true,
  },
  {
    name: 'Marco L.',
    role: 'Online Coach',
    quote:
      'The automations Charm set up saved me at least 10 hours a week. My onboarding process went from chaotic to completely seamless overnight.',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>('.tst-card')
    );
    const centerCard = section.querySelector<HTMLElement>('.tst-card--featured');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cards.forEach((card) => card.classList.add('tst-card--visible'));

          // Start breathing glow on all cards after fade-up completes
          setTimeout(() => {
            cards.forEach((card) => {
              const isFeatured = card.classList.contains('tst-card--featured');
              card.animate(
                [
                  {
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.3), 0 0 0px 0px rgba(180,60,60,0)',
                  },
                  {
                    boxShadow: isFeatured
                      ? '0 8px 32px rgba(0,0,0,0.3), 0 0 20px 4px rgba(180,60,60,0.3)'
                      : '0 8px 32px rgba(0,0,0,0.3), 0 0 20px 4px rgba(180,60,60,0.25)',
                  },
                  {
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.3), 0 0 0px 0px rgba(180,60,60,0)',
                  },
                ],
                { duration: 3000, easing: 'ease-in-out', iterations: Infinity }
              );
            });
          }, 700);

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tst-section" id="testimonials" ref={sectionRef}>
      <h2 className="tst-title">
        What Clients <span>Say</span>
      </h2>

      <div className="tst-grid">
        {testimonials.map((t) => (
          <div
            className={`tst-card${t.featured ? ' tst-card--featured' : ' tst-card--side'}`}
            key={t.name}
          >
            <span className="tst-quote-mark">&ldquo;</span>
            <p className="tst-text">{t.quote}{"\u201D"}</p>
            <div className="tst-divider" />
            <p className="tst-name">{t.name}</p>
            <p className="tst-role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
