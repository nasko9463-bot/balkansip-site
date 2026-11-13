"use client";

import { FormEvent, useState } from "react";
import Formats from "./components/Formats";

const cocktails = [
  {
    name: "Невен Саур",
    price: "7 EUR",
    volume: "180 ml",
    description: "Водка, невен, лайм, розова вода, веган белтък",
  },
  {
    name: "Червената Лада",
    price: "7.5 EUR",
    volume: "220 ml",
    description:
      "Ракия, печена чушка, тинктура от люти чушки Кайен, лайм, газирана вода",
  },
  {
    name: "Балкански Снапър",
    price: "7.5 EUR",
    volume: "220 ml",
    description: "Джин, домат, хрян, мащерка, микс от пипери, люта чушка",
  },
  {
    name: "Златна жетва",
    price: "8 EUR",
    volume: "250 ml",
    description: "Ракия от кайсия, Просеко, праскова, битър, прасковена сода",
  },
  {
    name: "Хайдут Тай",
    price: "8 EUR",
    volume: "180 ml",
    description:
      "Тъмен ром, спайс ром, агриколен ром, ямайски ром, Коантро, орехов оржет, лайм, битери",
  },
  {
    name: "Диня със сирене",
    price: "7 EUR",
    volume: "180 ml",
    description: "Водка, саламура, диня, лайм",
  },
  {
    name: "Хайланд Компот",
    price: "8 EUR",
    volume: "220 ml",
    description:
      "Уиски, лактоферментирали круши, сода от круши, лайм, бонбон от круша",
  },
  {
    name: "Тракийско злато",
    price: "8 EUR",
    volume: "250 ml",
    description: "Джин, портокал, мащерка, пелин, сода от горчив портокал",
  },
];

const menuCategories = [
  {
    number: "02",
    title: "Топли Напитки",
    items: [
      ["Еспресо", "30 ml", "2 EUR"],
      ["Безкофеиново еспресо", "30 ml", "2 EUR"],
      ["Капучино", "200 ml", "3 EUR"],
      ["Лате Макиато", "250 ml", "3 EUR"],
      ["Матча", "250 ml", "4 EUR"],
      ["Чай", "200 ml", "2 EUR"],
    ],
  },
  {
    number: "03",
    title: "Студени Напитки",
    items: [
      ["Фреш Портокал / Грейпфрут / Ябълка / Морков", "", "4 EUR"],
      ["Колд Брю Тоник", "", "4 EUR"],
      ["Фрапе", "", "3.5 EUR"],
      ["Фредо Капучино", "", "4 EUR"],
    ],
  },
  {
    number: "04",
    title: "Домашни Лимонади",
    note: "500 ml",
    items: [
      ["Портокал", "", "4 EUR"],
      ["Мащерка", "", "4 EUR"],
      ["Праскова", "", "4 EUR"],
      ["Малина", "", "4 EUR"],
      ["Мента", "", "4 EUR"],
      ["Невен", "", "4 EUR"],
    ],
  },
  {
    number: "05",
    title: "Безалкохолни Напитки",
    items: [
      ["Pepsi Cola", "330 ml", "2 EUR"],
      ["Pepsi Zero", "330 ml", "2 EUR"],
      ["Pepsi Twist", "330 ml", "2 EUR"],
      ["Mirinda Портокал", "330 ml", "2 EUR"],
      ["7UP", "330 ml", "2 EUR"],
      ["Evervess Тоник", "330 ml", "2 EUR"],
      ["Evervess Сода", "250 ml", "2 EUR"],
      ["Prisun", "250 ml", "2 EUR"],
      ["Lipton", "330 ml", "2 EUR"],
      ["Rilana Spring вода", "330 ml", "1.5 EUR"],
      ["Rilana Spring вода", "1000 ml", "2.5 EUR"],
      ["S. Pellegrino", "250 ml", "3 EUR"],
      ["Shark", "250 ml", "3.5 EUR"],
      ["Shark Zero", "250 ml", "3.5 EUR"],
    ],
  },
  {
    number: "06",
    title: "Бира",
    items: [
      ["Grolsch Premium Lager", "500 ml", "4.5 EUR"],
      ["Pilsner Urquell", "500 ml", "4.5 EUR"],
      ["Efes Draft", "500 ml", "4 EUR"],
      ["Kozel", "500 ml", "4 EUR"],
      ["Corona", "355 ml", "4 EUR"],
    ],
  },
  {
    number: "07",
    title: "Вино",
    note: "",
    items: [
      ["Совиньон блан", "150 ml", "3.5 EUR"],
      ["Мерло", "150 ml", "3.5 EUR"],
      ["Просеко", "150 ml", "4.5 EUR"],
      ["Совиньон блан Yamantievs", "750 ml", "15 EUR"],
      ["Пино Гри Yamantievs", "750 ml", "15 EUR"],
      ["Розе Yamantievs", "750 ml", "15 EUR"],
      ["Мерло Grand Reserve", "750 ml", "16 EUR"],
      ["Каберне Совиньон Grand Reserve", "750 ml", "16 EUR"],
      ["Шандон Garden Spritz", "750 ml", "25 EUR"],
      ["La Gioiosa Prosecco Spumante DOC Treviso", "750 ml", "35 EUR"],
    ],
  },
  {
    number: "08",
    title: "Ракия",
    note: "50 ml",
    items: [
      ["SURLAN RAKIJA DUNJA", "", "3,5 EUR"],
      ["SURLAN RAKIJA VILJAMOVKA", "", "3,5 EUR"],
      ["SURLAN RAKIJA ZUTA LOZA", "", "3 EUR"],
      ["BRANKO RAKIA PLUM TRADITIONAL", "", "7 EUR"],
      ["BRANKO QUINCE PREMIUM", "", "9,5 EUR"],
    ],
  },
  {
    number: "09",
    title: "Водка",
    note: "50 ml",
    items: [
      ["ВОДКА ЗАНАЯТЧИЙСКА", "", "2,5 EUR"],
      ["SMIRNOFF RED NO. 21", "", "3 EUR"],
      ["SMIRNOFF BLACK NO. 55", "", "3,5 EUR"],
      ["KETEL ONE", "", "6 EUR"],
      ["BELVEDERE", "", "9 EUR"],
    ],
  },
  {
    number: "10",
    title: "Джин",
    note: "50 ml",
    items: [
      ["GORDON’S PINK", "", "3.5 EUR"],
      ["TANQUERAY", "", "4.5 EUR"],
      ["TANQUERAY FLOR DE SEVILLA", "", "4.5 EUR"],
      ["TANQUERAY RANGPUR", "", "4.5 EUR"],
      ["TANQUERAY ROYALE", "", "4.5 EUR"],
      ["TANQUERAY NO. 10", "", "8 EUR"],
      ["TANQUERAY 0.0%", "", "5 EUR"],
    ],
  },
  {
    number: "11",
    title: "Агаве",
    note: "50 ml",
    items: [
      ["JOSE CUERVO ESPECIAL SILVER", "", "5 EUR"],
      ["JOSE CUERVO ESPECIAL GOLD", "", "5 EUR"],
      ["1800 SILVER", "", "9.5 EUR"],
      ["1800 REPOSADO", "", "10 EUR"],
      ["DOBEL DIAMANTE", "", "12 EUR"],
      ["DOBEL HUMITO", "", "13 EUR"],
      ["AGAVE BLANCO BEVERAGE 0%", "", "4.5 EUR"],
      ["DERRUMBES NO. 3 SAN LUIS POTOSI MEZCAL", "", "6.5 EUR"],
    ],
  },
  {
    number: "12",
    title: "Бренди и коняк",
    note: "50 ml",
    items: [
      ["BLACK SEA GOLD", "", "3 EUR"],
      ["HENNESSY V.S", "", "7 EUR"],
      ["HENNESSY V.S.O.P", "", "12 EUR"],
    ],
  },
  {
    number: "13",
    title: "Ром",
    note: "50 ml",
    items: [
      ["Captain Morgan Dark", "", "3.5 EUR"],
      ["Captain Morgan Spiced Gold", "", "3.5 EUR"],
      ["Captain Morgan White", "", "3.5 EUR"],
      ["Appleton Estate Signature Blend", "", "5 EUR"],
      ["J.M Rhum", "", "5 EUR"],
      ["Zacapa Solera Gran Reserva", "", "10 EUR"],
    ],
  },
  {
    number: "14",
    title: "Уиски",
    note: "50 ml",
    groups: [
      {
        title: "Шотландско уиски",
        items: [
          ["J&B Rare Scotch Whisky", "", "3.5 EUR"],
          ["Johnnie Walker Red Label", "", "3.5 EUR"],
          ["Johnnie Walker Black Label 12YO", "", "4.5 EUR"],
          ["Dimple 15YO", "", "9 EUR"],
        ],
      },
      {
        title: "Ирландско уиски",
        items: [
          ["Bushmills Original", "", "4 EUR"],
          ["Black Bush", "", "4.5 EUR"],
          ["The Sexton Single Malt", "", "8.5 EUR"],
        ],
      },
      {
        title: "Американско уиски и бърбън",
        items: [
          ["Bulleit Bourbon", "", "6 EUR"],
          ["Bulleit Rye", "", "6 EUR"],
        ],
      },
      {
        title: "Сингъл малц уиски",
        items: [
          ["Isperitus Single Malt", "", "6.5 EUR"],
          ["Glenmorangie The Original 12YO", "", "8.5 EUR"],
          ["Roe & Co", "", "9 EUR"],
          ["Talisker Storm", "", "9.5 EUR"],
          ["Ardbeg 10YO", "", "12 EUR"],
        ],
      },
    ],
  },
  {
    number: "15",
    title: "Други",
    note: "50 ml",
    items: [
      ["Pampelle Grapefruit Aperitif", "", "4.5 EUR"],
      ["Select Venetian Aperitif", "", "3 EUR"],
      ["Amaro Montenegro", "", "5 EUR"],
      ["Ouzo Babatzim", "", "3 EUR"],
      ["Ouzo Lazaris", "", "3 EUR"],
      ["Roots Mastic", "", "5.5 EUR"],
      ["Amaretto", "", "3.5 EUR"],
      ["Kalua Coffee Liqueur", "", "3.5 EUR"],
      ["Baileys Original Irish Cream", "", "3.5 EUR"],
      ["Cointreau", "", "4.5 EUR"],
      ["Fernet – Branca", "", "4.5 EUR"],
      ["Roots Divino Bianco 0%", "", "5.5 EUR"],
    ],
  },
  {
    number: "16",
    title: "Снакс",
    items: [
      ["Ядки", "80 g", "5.5 EUR"],
      ["Маслини", "150 g", "4.5 EUR"],
      ["Чипс / Паприка / Гъби / Горчица / Чесън", "100 g", "4.5 EUR"],
    ],
  },
];


const partners = [
  { name: "Дестилерия Исперих", image: "/partners/isperih.webp" },
  { name: "Pepsi", image: "/partners/pepsi.png" },
  { name: "Ketel One", image: "/partners/ketell.png" },
  { name: "Smirnoff", image: "/partners/Smirnoff.webp" },
  { name: "Tanqueray", image: "/partners/tanqueray.png" },
  { name: "Tequila 1800", image: "/partners/tequia1800.png" },
  { name: "Johnnie Walker", image: "/partners/djoniwalker.png" },
  { name: "Talisker", image: "/partners/talisker.png" },
  { name: "Hennessy", image: "/partners/henesi.png" },
  { name: "Savortails", image: "/partners/savortails.webp" },
  { name: "Pampelle Aperitif", image: "/partners/pampelle.png" },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      reason: String(formData.get("reason") || "").trim(),
      social: String(formData.get("social") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error ||
            "Възникна проблем при изпращането. Моля, опитайте отново.",
        );
      }

      form.reset();
      setIsSuccessOpen(true);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Възникна проблем при изпращането. Моля, опитайте отново.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="site">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#about" className="nav-logo" aria-label="Balkan Sip">
          <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
        </a>

        <nav
          className={`nav-links ${isNavOpen ? "nav-links-open" : ""}`}
          id="main-navigation"
          aria-label="Основна навигация"
        >
          <a href="#about" onClick={() => setIsNavOpen(false)}>
            За нас
          </a>
          <a href="#formats" onClick={() => setIsNavOpen(false)}>
            Формати
          </a>
          <a href="#menu" onClick={() => setIsNavOpen(false)}>
            Меню
          </a>
          <a href="#partners" onClick={() => setIsNavOpen(false)}>
            Партньори
          </a>
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setIsNavOpen(false)}
          >
            Свържи се с нас
          </a>
        </nav>

        <div className="nav-actions">
          <div className="language-switch" aria-label="Избор на език">
            <span className="language-active" aria-current="page">
              BG
            </span>
            <span className="language-divider" aria-hidden="true">
              /
            </span>
            <a
              href="/en"
              onClick={(event) => {
                event.preventDefault();
                window.location.href = `/en${window.location.hash}`;
              }}
            >
              EN
            </a>
          </div>

          <button
            type="button"
            className={`nav-toggle ${isNavOpen ? "nav-toggle-open" : ""}`}
            aria-label={isNavOpen ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={isNavOpen}
            aria-controls="main-navigation"
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ABOUT */}
      <section className="hero" id="about">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="hero-intro">
          <span>THE PEOPLE BEHIND THE SIP</span>

          <h1>
            Запознай се с хората
            <br />
            зад <strong>Balkan Sip.</strong>
          </h1>

          <p>
            Двама души, една идея и една каравана, превърната в място за
            коктейли, истории и хубави моменти.
          </p>
        </div>

        <div className="owners-layout">
          {/* OWNER LEFT */}
          <article className="owner owner-left">

            <span className="owner-role">CO-FOUNDER</span>

            <h2>Атанас Михайлов</h2>

            <p>
              Казвам се Атанас Михайлов, барман и един от създателите на мобилен
              бар „Balkan Sip“. Професионалният ми път започна през 2008 г. в
              Софийската професионална гимназия по туризъм със специалност
              „Ресторантьорство и хотелиерство“. През годините преминах през
              различни позиции в бранша, но барът винаги оставаше моето истинско
              призвание. Работата ми в ресторанта на шеф Виктор Ангелов ми
              помогна да задълбоча познанията си за класическите техники и
              винената култура. В „Beach Bar Sofia“ изградих бързина и
              постоянство, а развитието ми продължи в „Sputnik Cocktail Bar“,
              където усъвършенствах уменията си в смесването на напитки.
              По-късно като главен барман и асистент-мениджър в „SOTO Bar“
              създадох и първото си авторско коктейлно меню. Днес съм част от
              екипа на „Phi Cocktail Bar“, а заедно с мой колега превърнахме
              общата си страст в собствен проект – „Balkan Sip“.
            </p>

            <div className="owner-line" />
          </article>

          {/* CENTER IMAGE */}
          <div className="owners-photo">
            <div className="photo-frame">
              <img
                src="/founders.jpg"
                alt="Собствениците на Balkan Sip"
                className="owners-image"
              />
            </div>

            <div className="photo-tag">
              <span>EST.</span>
              <strong>2026</strong>
            </div>
          </div>

          {/* OWNER RIGHT */}
          <article className="owner owner-right">

            <span className="owner-role">CO-FOUNDER</span>

            <h2>Стефан Тодоров</h2>

            <p>
              Казвам се Стефан Тодоров, барман и собственик на мобилен бар
              "Balkan Sip". Приключението ми започна още на 16 годишна възраст
              след успешно завършен курс за "Сервитьор-барман" към "Bar Academy"
              България. Стартирах в "Sammy's Bar" като барман, а на по-късен
              етап бях бар-мениджър. Осъзнах, че страстта ми е към смесените
              напитки и продължих своето развитие в "Ristretto", където положих
              здрави основи в бранша. Надграждането ми продължи в "Legé Bar &
              Diner", което беше ключов момент за мен, защото попаднах в една
              по-динамична среда и изградих по-бърз начин на работа. Преломният
              момент в моя път е влизането ми в екипа на "Phi Cocktail Bar",
              където работя и до ден днешен. Това е мястото, в което се уча и
              надграждам с всеки изминал ден, във всяка една насока на
              барманския живот.
            </p>

            <div className="owner-line" />
          </article>
        </div>

        <a href="#story" className="scroll-indicator">
          <span>OUR STORY</span>
          <div className="scroll-line" />
        </a>
      </section>

      {/* STORY */}
      <section className="story-section" id="story">
        <div className="story-label">
          <p>OUR STORY</p>
        </div>

        <div className="story-content">
          <p className="story-kicker">FROM AN IDEA TO A CARAVAN</p>

          <h2>
            Всичко започва
            <br />с една <span>идея.</span>
          </h2>

          <div className="story-text">
            <p>
              Balkan Sip започва като желание да създадем нещо различно — място,
              което носи усещането за лято, свобода и споделени моменти.
            </p>

            <p>
              От първите скици до превръщането на караваната в истински мобилен
              бар, всяка част от проекта носи собствена история.
            </p>
          </div>

          <div className="story-coming">
            <span>Историята продължава...</span>
          </div>
        </div>
      </section>

      <Formats lang="bg" />

      <section className="menu-section" id="menu">
        <div className="menu-shell">
          <div className="menu-heading">
            <div className="menu-heading-label">
              <p>MENU</p>
            </div>

            <div className="menu-heading-copy">
              <p className="menu-kicker">COCKTAILS · DRINKS · SNACKS</p>
              <h2>
                Избери своя <span>sip.</span>
              </h2>
            </div>
          </div>

          <div className="menu-accordion menu-accordion-aligned">
            <details className="menu-dropdown cocktails-dropdown" open>
              <summary>
                <div className="menu-summary-main">
                  <h3>Коктейли</h3>
                </div>

                <span className="menu-toggle" aria-hidden="true">
                  <img src="/icons/jigger.png" alt="" />
                </span>
              </summary>

              <div className="cocktails-list">
                {cocktails.map((cocktail) => (
                  <article className="cocktail-row" key={cocktail.name}>

                    <div className="cocktail-copy">
                      <div className="cocktail-topline">
                        <h4>{cocktail.name}</h4>
                        <strong>{cocktail.price}</strong>
                      </div>

                      <p>{cocktail.description}</p>

                      <span className="cocktail-volume">{cocktail.volume}</span>
                    </div>
                  </article>
                ))}
              </div>
            </details>

            {menuCategories.map((category) => (
              <details className="menu-dropdown" key={category.title}>
                <summary>
                  <div className="menu-summary-main">

                    <h3>
                      {category.title}
                      {category.note && <small>{category.note}</small>}
                    </h3>
                  </div>

                  <span className="menu-toggle" aria-hidden="true">
                    <img src="/icons/jigger.png" alt="" />
                  </span>
                </summary>

                <div className="category-content">
                  {"groups" in category && category.groups ? (
                    <div className="whiskey-groups">
                      {category.groups.map((group) => (
                        <div className="whiskey-group" key={group.title}>
                          <h4 className="whiskey-group-title">{group.title}</h4>

                          <div className="category-list">
                            {group.items.map(([name, volume, price]) => (
                              <div
                                className="category-row"
                                key={`${group.title}-${name}-${volume}`}
                              >
                                <div className="category-name">
                                  <strong>{name}</strong>
                                  {volume && <span>{volume}</span>}
                                </div>

                                <span className="category-dots" />

                                <strong className="category-price">
                                  {price}
                                </strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : category.items.length > 0 ? (
                    <div className="category-list">
                      {category.items.map(([name, volume, price]) => (
                        <div
                          className="category-row"
                          key={`${category.title}-${name}-${volume}`}
                        >
                          <div className="category-name">
                            <strong>{name}</strong>
                            {volume && <span>{volume}</span>}
                          </div>

                          <span className="category-dots" />

                          <strong className="category-price">{price}</strong>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="category-empty">
                      Артикулите в тази категория ще бъдат добавени.
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section" id="partners">
        <div className="partners-shell">
          <div className="partners-label">
            <p>PARTNERS</p>
          </div>

          <div className="partners-content">
            <p className="partners-kicker">BRANDS WE TRUST</p>

            <h2>
              Нашите <span>партньори.</span>
            </h2>

            <p className="partners-intro">
              Работим с утвърдени брандове, които споделят нашето отношение към
              качеството, вкуса и доброто изживяване.
            </p>

            <div className="partners-grid">
              {partners.map((partner) => (
                <div className="partner-card" key={partner.name}>
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="partner-logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-shell">
          <div className="contact-label">
            <p>CONTACT</p>
          </div>

          <div className="contact-heading">
            <h2>
              Хайде да си <span>поговорим.</span>
            </h2>

            <p className="contact-intro">
              Планираш събитие, имаш идея за партньорство или просто искаш
              Balkan Sip да бъде част от следващия ти повод? Разкажи ни малко
              повече и ще се свържем с теб.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="fullName">Име и фамилия *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Твоето име"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Имейл *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="reason">Повод за контакт *</label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  placeholder="Събитие, партньорство, запитване..."
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="social">Социална мрежа</label>
                <input
                  type="text"
                  id="social"
                  name="social"
                  placeholder="Instagram, Facebook..."
                />
              </div>
            </div>

            <div className="contact-field contact-message-field">
              <label htmlFor="message">Съобщение *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Разкажи ни какво си намислил..."
                rows={7}
                required
              />
            </div>

            {formError && (
              <p className="contact-form-error" role="alert">
                {formError}
              </p>
            )}

            <div className="contact-form-bottom">
              <p>
                С изпращането на формата се съгласяваш с нашата{" "}
                <a href="/privacy">Политика за поверителност</a>.
              </p>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="contact-submit-spinner"
                      aria-hidden="true"
                    />
                    Изпращане...
                  </>
                ) : (
                  <>
                    Изпрати
                    <span aria-hidden="true">↗</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <a href="#about" className="footer-logo" aria-label="Balkan Sip">
            <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
          </a>

          <nav className="footer-nav" aria-label="Навигация във футъра">
            <a href="#about">За нас</a>
            <a href="#formats">Формати</a>
            <a href="#menu">Меню</a>
            <a href="#partners">Партньори</a>
            <a href="#contact">Свържи се с нас</a>
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 Balkan Sip. Всички права запазени.</p>

          <a href="/privacy" className="footer-privacy">
            Политика за поверителност
          </a>
        </div>
      </footer>

      {isSuccessOpen && (
        <div
          className="contact-success-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsSuccessOpen(false);
            }
          }}
        >
          <div className="contact-success-card">
            <button
              type="button"
              className="contact-success-close"
              aria-label="Затвори"
              onClick={() => setIsSuccessOpen(false)}
            >
              ×
            </button>

            <div className="contact-success-icon" aria-hidden="true">
              ✓
            </div>

            <span className="contact-success-eyebrow">BALKAN SIP</span>

            <h2 id="contact-success-title">
              Запитването е направено <span>успешно!</span>
            </h2>

            <p>Очаквайте отговор скоро!</p>

            <button
              type="button"
              className="contact-success-button"
              onClick={() => setIsSuccessOpen(false)}
            >
              Чудесно
            </button>
          </div>
        </div>
      )}
    </main>
  );
}