"use client";

import { type CSSProperties, useEffect, useRef } from "react";

type Lang = "bg" | "en";
type Glass = "lowJar" | "tallJar" | "wine";

type Cocktail = {
  name: Record<Lang, string>;
  base: Record<Lang, string>;
  ingredients: Record<Lang, string[]>;
  volume: string;
  glass: Glass;
  // Цвят на напитката: горе и долу в чашата.
  colors: [string, string];
  garnish: string;
  sparkling?: boolean;
  foam?: boolean;
};

const cocktails: Cocktail[] = [
  {
    name: { bg: "Невен Саур", en: "Marigold Sour" },
    base: { bg: "Водка", en: "Vodka" },
    ingredients: {
      bg: ["водка", "невен", "лайм", "розова вода", "веган белтък"],
      en: ["vodka", "marigold", "lime", "rose water", "vegan egg white"],
    },
    volume: "180 ml",
    glass: "lowJar",
    colors: ["#f7c948", "#ee9a2b"],
    garnish: "#ff8a1f",
    foam: true,
  },
  {
    name: { bg: "Червената Лада", en: "The Red Lada" },
    base: { bg: "Ракия", en: "Rakia" },
    ingredients: {
      bg: [
        "ракия",
        "печена чушка",
        "тинктура от люти чушки Кайен",
        "лайм",
        "газирана вода",
      ],
      en: [
        "rakia",
        "roasted pepper",
        "cayenne pepper tincture",
        "lime",
        "sparkling water",
      ],
    },
    volume: "220 ml",
    glass: "tallJar",
    colors: ["#f0584a", "#b9242b"],
    garnish: "#8fd14f",
    sparkling: true,
  },
  {
    name: { bg: "Балкански Снапър", en: "The Balkan Snap" },
    base: { bg: "Джин", en: "Gin" },
    ingredients: {
      bg: ["джин", "домат", "хрян", "мащерка", "микс от пипери", "люта чушка"],
      en: [
        "gin",
        "tomato",
        "horseradish",
        "thyme",
        "pepper blend",
        "chili pepper",
      ],
    },
    volume: "220 ml",
    glass: "tallJar",
    colors: ["#e4532f", "#9c2a1c"],
    garnish: "#5fae3f",
  },
  {
    name: { bg: "Златна жетва", en: "Golden Harvest" },
    base: { bg: "Кайсиева ракия", en: "Apricot rakia" },
    ingredients: {
      bg: ["ракия от кайсия", "просеко", "праскова", "битър", "прасковена сода"],
      en: ["apricot rakia", "Prosecco", "peach", "bitters", "peach soda"],
    },
    volume: "250 ml",
    glass: "wine",
    colors: ["#ffd684", "#f29a52"],
    garnish: "#ff9d6b",
    sparkling: true,
  },
  {
    name: { bg: "Хайдут Тай", en: "Haidut Tai" },
    base: { bg: "Ром", en: "Rum" },
    ingredients: {
      bg: [
        "тъмен ром",
        "спайс ром",
        "агриколен ром",
        "ямайски ром",
        "Коантро",
        "орехов оржет",
        "лайм",
        "битери",
      ],
      en: [
        "dark rum",
        "spiced rum",
        "agricole rum",
        "Jamaican rum",
        "Cointreau",
        "walnut orgeat",
        "lime",
        "bitters",
      ],
    },
    volume: "180 ml",
    glass: "lowJar",
    colors: ["#d98a3a", "#8c401c"],
    garnish: "#6fbf4a",
  },
  {
    name: { bg: "Диня със сирене", en: "Watermelon Cheese" },
    base: { bg: "Водка", en: "Vodka" },
    ingredients: {
      bg: ["водка", "саламура", "диня", "лайм"],
      en: ["vodka", "brine", "watermelon", "lime"],
    },
    volume: "180 ml",
    glass: "lowJar",
    colors: ["#ff7b8f", "#e23d5e"],
    garnish: "#7ed957",
  },
  {
    name: { bg: "Хайланд Компот", en: "Highland Compote" },
    base: { bg: "Уиски", en: "Whisky" },
    ingredients: {
      bg: [
        "уиски",
        "лактоферментирали круши",
        "сода от круши",
        "лайм",
        "бонбон от круша",
      ],
      en: [
        "whisky",
        "lacto-fermented pears",
        "pear soda",
        "lime",
        "pear candy",
      ],
    },
    volume: "220 ml",
    glass: "tallJar",
    colors: ["#e6dd86", "#b9a13f"],
    garnish: "#c9d86a",
    sparkling: true,
  },
  {
    name: { bg: "Тракийско злато", en: "Thracian Gold" },
    base: { bg: "Джин", en: "Gin" },
    ingredients: {
      bg: ["джин", "портокал", "мащерка", "пелин", "сода от горчив портокал"],
      en: ["gin", "orange", "thyme", "wormwood", "bitter orange soda"],
    },
    volume: "250 ml",
    glass: "wine",
    colors: ["#ffc24a", "#ef8424"],
    garnish: "#ff9a2e",
    sparkling: true,
  },
];

const copy = {
  bg: {
    label: "MENU",
    kicker: "SIGNATURE COCKTAILS",
    titleStart: "Авторски коктейли с",
    titleAccent: "балкански вкус.",
    intro:
      "Всяка рецепта е наша. Работим с ракия, билки и плодове от Балканите и сами приготвяме кордиалите и сиропите.",
    listLabel: "Коктейли",
    noteTitle: "Менюто се адаптира към вашето събитие.",
    noteText:
      "Избираме заедно кои коктейли да наливаме според повода, сезона и гостите.",
    cta: "Поискай меню за събитие",
  },
  en: {
    label: "MENU",
    kicker: "SIGNATURE COCKTAILS",
    titleStart: "Signature cocktails with a",
    titleAccent: "Balkan soul.",
    intro:
      "Every recipe is our own. We work with rakia, herbs and fruit from the Balkans, and we make the cordials and syrups ourselves.",
    listLabel: "Cocktails",
    noteTitle: "The menu adapts to your event.",
    noteText:
      "Together we choose which cocktails to pour, based on the occasion, the season and your guests.",
    cta: "Ask for an event menu",
  },
};

const vesselLabel: Record<Glass, Record<Lang, string>> = {
  lowJar: { bg: "нисък буркан", en: "low jar" },
  tallJar: { bg: "висок буркан", en: "tall jar" },
  wine: { bg: "чаша за вино", en: "wine glass" },
};

// Контур на съда, вътрешност за течността, ниво на течността,
// допълнителни линии (гърло с резба или столче) и място на резена.
const glassShapes: Record<
  Glass,
  {
    outline: string;
    inside: string;
    level: number;
    lines: string;
    threads?: string;
    wheel: [number, number];
  }
> = {
  lowJar: {
    outline:
      "M26 46 L26 60 Q26 66 20 70 Q14 75 15 84 L20 130 Q21 140 31 140 L89 140 Q99 140 100 130 L105 84 Q106 75 100 70 Q94 66 94 60 L94 46",
    inside:
      "M26 46 L26 60 Q26 66 20 70 Q14 75 15 84 L20 130 Q21 140 31 140 L89 140 Q99 140 100 130 L105 84 Q106 75 100 70 Q94 66 94 60 L94 46 Z",
    level: 74,
    lines: "M23 46 H97",
    threads: "M26 53 H94 M26 59 H94",
    wheel: [97, 44],
  },
  tallJar: {
    outline:
      "M38 12 L38 25 Q38 30 34 33 Q30 37 30 44 L30 130 Q30 140 40 140 L80 140 Q90 140 90 130 L90 44 Q90 37 86 33 Q82 30 82 25 L82 12",
    inside:
      "M38 12 L38 25 Q38 30 34 33 Q30 37 30 44 L30 130 Q30 140 40 140 L80 140 Q90 140 90 130 L90 44 Q90 37 86 33 Q82 30 82 25 L82 12 Z",
    level: 40,
    lines: "M35 12 H85",
    threads: "M38 18 H82 M38 24 H82",
    wheel: [86, 12],
  },
  wine: {
    outline: "M38 18 C28 44 31 78 60 84 C89 78 92 44 82 18",
    inside: "M38 18 C28 44 31 78 60 84 C89 78 92 44 82 18 Z",
    level: 40,
    lines: "M60 84 L60 134 M40 139 Q60 130 80 139",
    wheel: [84, 20],
  },
};

const iceStyle = {
  fill: "rgba(255,255,255,0.16)",
  stroke: "rgba(255,255,255,0.55)",
  strokeWidth: 1.4,
};

function GlassArt({ cocktail, id }: { cocktail: Cocktail; id: string }) {
  const shape = glassShapes[cocktail.glass];
  const [top, bottom] = cocktail.colors;
  const [wheelX, wheelY] = shape.wheel;

  return (
    <svg
      className="sip-glass"
      viewBox="0 0 120 150"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-liquid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <path d={shape.inside} />
        </clipPath>
      </defs>

      {/* Сламка във високия буркан */}
      {cocktail.glass === "tallJar" && (
        <path
          d="M70 2 L58 126"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      )}

      <g clipPath={`url(#${id}-clip)`}>
        <rect
          x="0"
          y={shape.level}
          width="120"
          height="150"
          fill={`url(#${id}-liquid)`}
          opacity="0.94"
        />

        {cocktail.foam && (
          <rect
            x="0"
            y={shape.level}
            width="120"
            height="9"
            fill="#fff7e6"
            opacity="0.95"
          />
        )}

        {cocktail.glass === "tallJar" && (
          <g {...iceStyle}>
            <rect x="38" y="50" width="22" height="22" rx="4" transform="rotate(-12 49 61)" />
            <rect x="58" y="76" width="22" height="22" rx="4" transform="rotate(14 69 87)" />
            <rect x="40" y="104" width="22" height="22" rx="4" transform="rotate(-8 51 115)" />
          </g>
        )}

        {cocktail.glass === "lowJar" && !cocktail.foam && (
          <g {...iceStyle}>
            <rect x="30" y="88" width="28" height="28" rx="5" transform="rotate(-10 44 102)" />
            <rect x="62" y="98" width="26" height="26" rx="5" transform="rotate(12 75 111)" />
          </g>
        )}

        {cocktail.glass === "wine" && (
          <g {...iceStyle}>
            <rect x="42" y="46" width="18" height="18" rx="4" transform="rotate(-14 51 55)" />
            <rect x="60" y="56" width="18" height="18" rx="4" transform="rotate(10 69 65)" />
          </g>
        )}

        {cocktail.sparkling && (
          <g
            className={
              cocktail.glass === "wine"
                ? "sip-bubbles sip-bubbles-short"
                : "sip-bubbles"
            }
            fill="rgba(255,255,255,0.8)"
          >
            {cocktail.glass === "wine" ? (
              <>
                <circle cx="52" cy="76" r="1.6" />
                <circle cx="62" cy="72" r="1.3" />
                <circle cx="70" cy="76" r="1.5" />
                <circle cx="56" cy="66" r="1.2" />
                <circle cx="66" cy="68" r="1.4" />
              </>
            ) : (
              <>
                <circle cx="42" cy="130" r="1.8" />
                <circle cx="60" cy="122" r="1.3" />
                <circle cx="76" cy="132" r="1.6" />
                <circle cx="52" cy="100" r="1.2" />
                <circle cx="70" cy="108" r="1.5" />
              </>
            )}
          </g>
        )}
      </g>

      {shape.threads && (
        <path
          d={shape.threads}
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}

      <path
        d={`${shape.outline} ${shape.lines}`}
        fill="none"
        stroke="rgba(255,255,255,0.92)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Гарнитура: цвете върху пяната или резен на ръба */}
      {cocktail.foam ? (
        <circle cx="60" cy={shape.level + 4} r="5" fill={cocktail.garnish} />
      ) : (
        <g transform={`translate(${wheelX} ${wheelY})`}>
          <circle r="11" fill={cocktail.garnish} opacity="0.95" />
          <circle
            r="11"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.6"
          />
          <path
            d="M0 -8 V8 M-8 0 H8 M-5.6 -5.6 L5.6 5.6 M-5.6 5.6 L5.6 -5.6"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
}

export default function Cocktails({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const t = copy[lang];

  // Картите се появяват една след друга, когато влязат в екрана.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(section.querySelectorAll(".sip-card"));
    section.classList.add("sips-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("sip-card-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      section.classList.remove("sips-reveal");
    };
  }, []);

  return (
    <section className="sips-section" id="menu" ref={sectionRef}>
      <div className="sips-shell">
        <div className="sips-heading">
          <p className="sips-kicker">{t.kicker}</p>

          <h2>
            {t.titleStart} <span>{t.titleAccent}</span>
          </h2>

          <p className="sips-intro">{t.intro}</p>
        </div>

        <ul className="sips-grid" aria-label={t.listLabel}>
          {cocktails.map((cocktail, index) => (
            <li
              className="sip-card"
              key={cocktail.name.en}
              style={
                {
                  "--sip-a": cocktail.colors[0],
                  "--sip-b": cocktail.colors[1],
                  "--sip-delay": `${(index % 4) * 0.08}s`,
                } as CSSProperties
              }
            >
              <div className="sip-art">
                <span className="sip-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <GlassArt cocktail={cocktail} id={`sip-${lang}-${index}`} />
              </div>

              <div className="sip-body">
                <p className="sip-base">{cocktail.base[lang]}</p>
                <h3>{cocktail.name[lang]}</h3>
                <p className="sip-ingredients">
                  {cocktail.ingredients[lang].join(" · ")}
                </p>

                <p className="sip-meta">
                  <span>{cocktail.volume}</span>
                  <em>{vesselLabel[cocktail.glass][lang]}</em>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="sips-note">
          <div>
            <h3>{t.noteTitle}</h3>
            <p>{t.noteText}</p>
          </div>

          <a href="#contact" className="format-cta">
            <span>{t.cta}</span>
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
      </div>
    </section>
  );
}
