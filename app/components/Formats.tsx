"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

type Lang = "bg" | "en";

type Fact = { label: string; value: string };

type FormatCopy = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  facts: Fact[];
};

const caravanPhotos = [
  {
    src: "/formats/caravan-day.jpg",
    alt: {
      bg: "Караваната на Balkan Sip с отворен бар, меню и високи маси пред нея",
      en: "The Balkan Sip caravan with its bar open, menu board and high tables in front",
    },
  },
  {
    src: "/formats/caravan-night-market.jpg",
    alt: {
      bg: "Караваната, осветена вечер, с гости около нея на коледен базар",
      en: "The caravan lit up at night with guests around it at a Christmas market",
    },
  },
  {
    src: "/formats/caravan-night-cathedral.jpg",
    alt: {
      bg: "Караваната вечер под празнични светлини, с катедралата на заден план",
      en: "The caravan at night under festive lights with the cathedral behind it",
    },
  },
];

const copy = {
  bg: {
    label: "FORMATS",
    kicker: "THREE WAYS TO BRING THE BAR",
    titleStart: "Барът идва",
    titleAccent: "при вас.",
    intro:
      "Три формата за три вида събития. Избирате според мястото и броя гости, а ние носим всичко останало: коктейли, лед, чаши и екип.",
    cta: "Запитване за този формат",
    comingSoon: "Скоро",
    comingSoonNote: "Снимките са на път",
    galleryLabel: "Снимки на караваната",
    showPhoto: "Покажи снимка",
    formats: [
      {
        number: "01",
        name: "Каравана бар",
        tagline: "Цял бар на колела",
        description:
          "Напълно оборудвана каравана, която пристига готова за работа. Отваряме капака и барът е на място, с меню, осветление и зона за гости пред нея.",
        facts: [
          {
            label: "Подходяща за",
            value: "Събития на открито: сватби, фестивали, фирмени партита",
          },
          { label: "Нужно на място", value: "Ток 220V и равен терен" },
          { label: "Минимална поръчка", value: "60 напитки" },
        ],
      },
      {
        number: "02",
        name: "Портативен бар",
        tagline: "Барът, който влиза навсякъде",
        description:
          "Преносима барманска станция с пълно оборудване. За местата, до които караваната не стига: зали, офиси и тераси.",
        facts: [
          { label: "Подходящ за", value: "Зали и закрити пространства" },
          { label: "Минимална поръчка", value: "60 напитки" },
        ],
      },
      {
        number: "03",
        name: "Раница с кег",
        tagline: "Коктейл бар, който идва при гостите",
        description:
          "Раница с 18-литров кег, от която наливаме готов, изстуден коктейл направо сред гостите. Без опашка на бара.",
        facts: [
          { label: "Капацитет", value: "80 коктейла на едно зареждане" },
          {
            label: "Нужно на място",
            value: "Нищо. Без ток, място и монтаж",
          },
          {
            label: "Коктейл",
            value: "Един вид на зареждане, избран предварително",
          },
        ],
      },
    ] as FormatCopy[],
  },
  en: {
    label: "FORMATS",
    kicker: "THREE WAYS TO BRING THE BAR",
    titleStart: "The bar comes",
    titleAccent: "to you.",
    intro:
      "Three formats for three kinds of events. You choose by venue and guest count, and we bring everything else: cocktails, ice, glassware and the team.",
    cta: "Ask about this format",
    comingSoon: "Coming soon",
    comingSoonNote: "Photos are on the way",
    galleryLabel: "Photos of the caravan",
    showPhoto: "Show photo",
    formats: [
      {
        number: "01",
        name: "Caravan bar",
        tagline: "A full bar on wheels",
        description:
          "A fully equipped caravan that arrives ready to work. We lift the hatch and the bar is in place, with a menu, lighting and a guest area in front.",
        facts: [
          {
            label: "Best for",
            value: "Outdoor events: weddings, festivals, company parties",
          },
          {
            label: "Needed on site",
            value: "220V power and level ground",
          },
          { label: "Minimum order", value: "60 drinks" },
        ],
      },
      {
        number: "02",
        name: "Portable bar",
        tagline: "The bar that fits anywhere",
        description:
          "A portable, fully equipped bartending station. For the places the caravan cannot reach: halls, offices and terraces.",
        facts: [
          { label: "Best for", value: "Halls and indoor venues" },
          { label: "Minimum order", value: "60 drinks" },
        ],
      },
      {
        number: "03",
        name: "Keg backpack",
        tagline: "A cocktail bar that walks to your guests",
        description:
          "A backpack with an 18-litre keg. We pour a ready, chilled cocktail right among the guests. No queue at the bar.",
        facts: [
          { label: "Capacity", value: "80 cocktails per fill" },
          {
            label: "Needed on site",
            value: "Nothing. No power, space or setup",
          },
          {
            label: "Cocktail",
            value: "One kind per fill, chosen in advance",
          },
        ],
      },
    ] as FormatCopy[],
  },
};

function FormatBody({ format, cta }: { format: FormatCopy; cta: string }) {
  return (
    <div className="format-body">
      <span className="format-number" aria-hidden="true">
        {format.number}
      </span>

      <p className="format-tagline">{format.tagline}</p>
      <h3>{format.name}</h3>
      <p className="format-description">{format.description}</p>

      <dl className="format-facts">
        {format.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <a href="#contact" className="format-cta">
        <span>{cta}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

type Shape = {
  kind: "cube" | "ring" | "orb";
  size: number;
  top: string;
  duration: number;
  delay: number;
  spin: number;
  reverse?: boolean;
  gold?: boolean;
  desktopOnly?: boolean;
};

// Ледени кубчета, обръчи и мехурчета, които бавно прелитат зад картите.
const shapes: Shape[] = [
  { kind: "cube", size: 120, top: "6%", duration: 95, delay: -20, spin: 38, gold: true },
  { kind: "cube", size: 64, top: "30%", duration: 70, delay: -48, spin: 26, reverse: true },
  { kind: "ring", size: 150, top: "44%", duration: 110, delay: -75, spin: 30, gold: true, desktopOnly: true },
  { kind: "orb", size: 46, top: "18%", duration: 80, delay: -8, spin: 0, reverse: true },
  { kind: "cube", size: 90, top: "62%", duration: 105, delay: -60, spin: 44, desktopOnly: true },
  { kind: "orb", size: 28, top: "74%", duration: 65, delay: -30, spin: 0, gold: true },
  { kind: "ring", size: 84, top: "84%", duration: 88, delay: -12, spin: 22, reverse: true },
  { kind: "cube", size: 52, top: "90%", duration: 76, delay: -55, spin: 30, gold: true, desktopOnly: true },
];

function FloatingShapes() {
  return (
    <div className="formats-shapes" aria-hidden="true">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={[
            "formats-shape",
            shape.reverse ? "formats-shape-reverse" : "",
            shape.gold ? "formats-shape-gold" : "",
            shape.desktopOnly ? "formats-shape-desktop" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={
            {
              "--size": `${shape.size}px`,
              "--spin": `${shape.spin}s`,
              top: shape.top,
              animationDuration: `${shape.duration}s`,
              animationDelay: `${shape.delay}s`,
            } as CSSProperties
          }
        >
          {shape.kind === "cube" && (
            <div className="formats-cube">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          )}
          {shape.kind === "ring" && <div className="formats-ring" />}
          {shape.kind === "orb" && <div className="formats-orb" />}
        </div>
      ))}
    </div>
  );
}

export default function Formats({ lang }: { lang: Lang }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const t = copy[lang];
  const [caravan, ...upcoming] = t.formats;

  // Картите се появяват плавно, когато влязат в екрана.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(section.querySelectorAll(".format-card"));
    section.classList.add("formats-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("format-card-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      section.classList.remove("formats-reveal");
    };
  }, []);

  return (
    <section className="formats-section" id="formats" ref={sectionRef}>
      <FloatingShapes />

      <div className="formats-shell">
        <div className="formats-label">
          <p>{t.label}</p>
        </div>

        <div className="formats-content">
          <p className="formats-kicker">{t.kicker}</p>

          <h2>
            {t.titleStart} <span>{t.titleAccent}</span>
          </h2>

          <p className="formats-intro">{t.intro}</p>

          <article className="format-card format-card-feature">
            <div className="format-gallery">
              <div className="format-photo">
                <img
                  src={caravanPhotos[activePhoto].src}
                  alt={caravanPhotos[activePhoto].alt[lang]}
                />
              </div>

              <div
                className="format-thumbs"
                role="group"
                aria-label={t.galleryLabel}
              >
                {caravanPhotos.map((photo, index) => (
                  <button
                    type="button"
                    key={photo.src}
                    className={
                      index === activePhoto
                        ? "format-thumb format-thumb-active"
                        : "format-thumb"
                    }
                    aria-pressed={index === activePhoto}
                    aria-label={`${t.showPhoto} ${index + 1}`}
                    onClick={() => setActivePhoto(index)}
                  >
                    <img src={photo.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            <FormatBody format={caravan} cta={t.cta} />
          </article>

          <div className="formats-grid">
            {upcoming.map((format) => (
              <article className="format-card" key={format.number}>
                <div className="format-soon" role="img" aria-label={`${format.name}: ${t.comingSoonNote}`}>
                  <span className="format-soon-word">{t.comingSoon}</span>
                  <span className="format-soon-note">{t.comingSoonNote}</span>
                </div>

                <FormatBody format={format} cta={t.cta} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
