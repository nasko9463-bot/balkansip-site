"use client";

import { useState } from "react";

type Lang = "bg" | "en";

type Fact = { label: string; value: string };

type FormatCopy = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  facts: Fact[];
  price: string;
  priceNote: string;
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
        price: "от 480 €",
        priceNote:
          "на събитие. Барманите и коктейлите се оферират според броя гости.",
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
        price: "от 180 €",
        priceNote:
          "на събитие. Барманите и коктейлите се оферират според броя гости.",
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
        price: "900 €",
        priceNote: "за 80 коктейла, с включен човек до 6 часа.",
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
        price: "from €480",
        priceNote:
          "per event. Bartenders and cocktails are quoted by guest count.",
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
        price: "from €180",
        priceNote:
          "per event. Bartenders and cocktails are quoted by guest count.",
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
        price: "€900",
        priceNote: "for 80 cocktails, with a server for up to 6 hours.",
      },
    ] as FormatCopy[],
  },
};

function FormatBody({ format, cta }: { format: FormatCopy; cta: string }) {
  return (
    <div className="format-body">
      <p className="format-number">{format.number}</p>
      <h3>{format.name}</h3>
      <p className="format-tagline">{format.tagline}</p>
      <p className="format-description">{format.description}</p>

      <dl className="format-facts">
        {format.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="format-footer">
        <p className="format-price">
          <strong>{format.price}</strong> <span>{format.priceNote}</span>
        </p>

        <a href="#contact" className="format-cta">
          {cta}
        </a>
      </div>
    </div>
  );
}

export default function Formats({ lang }: { lang: Lang }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const t = copy[lang];
  const [caravan, ...upcoming] = t.formats;

  return (
    <section className="formats-section" id="formats">
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
