"use client";

import { FormEvent, useState } from "react";
import Formats from "../components/Formats";

const cocktails = [
  {
    name: "Marigold Sour",
    price: "7 EUR",
    volume: "180 ml",
    description: "Vodka, marigold, lime, rose water, vegan egg white",
  },
  {
    name: "The Red Lada",
    price: "7.5 EUR",
    volume: "220 ml",
    description:
      "Rakia, roasted pepper, cayenne pepper tincture, lime, sparkling water",
  },
  {
    name: "The Balkan Snap",
    price: "7.5 EUR",
    volume: "220 ml",
    description: "Gin, tomato, horseradish, thyme, pepper blend, chili pepper",
  },
  {
    name: "Golden Harvest",
    price: "8 EUR",
    volume: "250 ml",
    description: "Apricot rakia, Prosecco, peach, bitters, peach soda",
  },
  {
    name: "Haidut Tai",
    price: "8 EUR",
    volume: "180 ml",
    description:
      "Dark rum, spiced rum, agricole rum, Jamaican rum, Cointreau, walnut orgeat, lime, bitters",
  },
  {
    name: "Watermelon Cheese",
    price: "7 EUR",
    volume: "180 ml",
    description: "Vodka, brine, watermelon, lime",
  },
  {
    name: "Highland Compote",
    price: "8 EUR",
    volume: "220 ml",
    description:
      "Whisky, lacto-fermented pears, pear soda, lime, pear candy",
  },
  {
    name: "Thracian Gold",
    price: "8 EUR",
    volume: "250 ml",
    description: "Gin, orange, thyme, wormwood, bitter orange soda",
  },
];

const menuCategories = [
  {
    number: "02",
    title: "Hot Drinks",
    items: [
      ["Espresso", "30 ml", "2 EUR"],
      ["Decaf Espresso", "30 ml", "2 EUR"],
      ["Cappuccino", "200 ml", "3 EUR"],
      ["Latte Macchiato", "250 ml", "3 EUR"],
      ["Matcha", "250 ml", "4 EUR"],
      ["Tea", "200 ml", "2 EUR"],
    ],
  },
  {
    number: "03",
    title: "Cold Drinks",
    items: [
      ["Fresh Orange / Grapefruit / Apple / Carrot", "", "4 EUR"],
      ["Cold Brew Tonic", "", "4 EUR"],
      ["Frappe", "", "3.5 EUR"],
      ["Freddo Cappuccino", "", "4 EUR"],
    ],
  },
  {
    number: "04",
    title: "Homemade Lemonades",
    note: "500 ml",
    items: [
      ["Orange", "", "4 EUR"],
      ["Thyme", "", "4 EUR"],
      ["Peach", "", "4 EUR"],
      ["Raspberry", "", "4 EUR"],
      ["Mint", "", "4 EUR"],
      ["Marigold", "", "4 EUR"],
    ],
  },
  {
    number: "05",
    title: "Soft Drinks",
    items: [
      ["Pepsi Cola", "330 ml", "2 EUR"],
      ["Pepsi Zero", "330 ml", "2 EUR"],
      ["Pepsi Twist", "330 ml", "2 EUR"],
      ["Mirinda Orange", "330 ml", "2 EUR"],
      ["7UP", "330 ml", "2 EUR"],
      ["Evervess Tonic", "330 ml", "2 EUR"],
      ["Evervess Soda", "250 ml", "2 EUR"],
      ["Prisun", "250 ml", "2 EUR"],
      ["Lipton", "330 ml", "2 EUR"],
      ["Rilana Spring Water", "330 ml", "1.5 EUR"],
      ["Rilana Spring Water", "1000 ml", "2.5 EUR"],
      ["S. Pellegrino", "500 ml", "3 EUR"],
      ["Shark", "250 ml", "3.5 EUR"],
      ["Shark Zero", "250 ml", "3.5 EUR"],
    ],
  },
  {
    number: "06",
    title: "Beer",
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
    title: "Wine",
    note: "",
    items: [
      ["Sauvignon Blanc", "150 ml", "3.5 EUR"],
      ["Merlot", "150 ml", "3.5 EUR"],
      ["Prosecco", "150 ml", "4.5 EUR"],
      ["Sauvignon Blanc Yamantievs", "750 ml", "15 EUR"],
      ["Pinot Gris Yamantievs", "750 ml", "15 EUR"],
      ["Rosé Yamantievs", "750 ml", "15 EUR"],
      ["Merlot Grand Reserve", "750 ml", "16 EUR"],
      ["Cabernet Sauvignon Grand Reserve", "750 ml", "16 EUR"],
      ["Chandon Garden Spritz", "750 ml", "25 EUR"],
      ["La Gioiosa Prosecco Spumante DOC Treviso", "750 ml", "35 EUR"],
    ],
  },
  {
    number: "08",
    title: "Rakia",
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
    title: "Vodka",
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
    title: "Gin",
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
    title: "Agave",
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
    title: "Brandy & Cognac",
    note: "50 ml",
    items: [
      ["BLACK SEA GOLD", "", "3 EUR"],
      ["HENNESSY V.S", "", "7 EUR"],
      ["HENNESSY V.S.O.P", "", "12 EUR"],
    ],
  },
  {
    number: "13",
    title: "Rum",
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
    title: "Whisky",
    note: "50 ml",
    groups: [
      {
        title: "Scotch Whisky",
        items: [
          ["J&B Rare Scotch Whisky", "", "3.5 EUR"],
          ["Johnnie Walker Red Label", "", "3.5 EUR"],
          ["Johnnie Walker Black Label 12YO", "", "4.5 EUR"],
          ["Dimple 15YO", "", "9 EUR"],
        ],
      },
      {
        title: "Irish Whiskey",
        items: [
          ["Bushmills Original", "", "4 EUR"],
          ["Black Bush", "", "4.5 EUR"],
          ["The Sexton Single Malt", "", "8.5 EUR"],
        ],
      },
      {
        title: "American Whiskey & Bourbon",
        items: [
          ["Bulleit Bourbon", "", "6 EUR"],
          ["Bulleit Rye", "", "6 EUR"],
        ],
      },
      {
        title: "Single Malt Whisky",
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
    title: "Other",
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
    title: "Snacks",
    items: [
      ["Nuts", "80 g", "5.5 EUR"],
      ["Olives", "150 g", "4.5 EUR"],
      ["Chips / Paprika / Mushroom / Mustard / Garlic", "100 g", "4.5 EUR"],
    ],
  },
];


const partners = [
  { name: "Isperih Distillery", image: "/partners/isperih.webp" },
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
            "Something went wrong while sending your message. Please try again.",
        );
      }

      form.reset();
      setIsSuccessOpen(true);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again.",
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
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setIsNavOpen(false)}>
            About
          </a>
          <a href="#formats" onClick={() => setIsNavOpen(false)}>
            Formats
          </a>
          <a href="#menu" onClick={() => setIsNavOpen(false)}>
            Menu
          </a>
          <a href="#partners" onClick={() => setIsNavOpen(false)}>
            Partners
          </a>
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setIsNavOpen(false)}
          >
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <div className="language-switch" aria-label="Language selection">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                window.location.href = `/${window.location.hash}`;
              }}
            >
              BG
            </a>
            <span className="language-divider" aria-hidden="true">
              /
            </span>
            <span className="language-active" aria-current="page">
              EN
            </span>
          </div>

          <button
            type="button"
            className={`nav-toggle ${isNavOpen ? "nav-toggle-open" : ""}`}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
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
            Meet the people
            <br />
            behind <strong>Balkan Sip.</strong>
          </h1>

          <p>
            Two people, one idea and a caravan transformed into a place for
            cocktails, stories and memorable moments.
          </p>
        </div>

        <div className="owners-layout">
          {/* OWNER LEFT */}
          <article className="owner owner-left">

            <span className="owner-role">CO-FOUNDER</span>

            <h2>Atanas Mihaylov</h2>

            <p>
              My name is Atanas Mihaylov, a bartender and one of the founders of the
              Balkan Sip mobile bar. My professional journey began in 2008 at the
              Sofia Vocational High School of Tourism, where I studied Restaurant
              and Hotel Management. Over the years, I worked in different roles
              across the industry, but the bar always remained my true calling.
              Working at Chef Viktor Angelov&apos;s restaurant helped me deepen my
              knowledge of classic techniques and wine culture. At Beach Bar Sofia,
              I developed speed and consistency, while my growth continued at
              Sputnik Cocktail Bar, where I refined my mixology skills. Later, as
              head bartender and assistant manager at SOTO Bar, I created my first
              signature cocktail menu. Today, I am part of the Phi Cocktail Bar
              team, and together with a colleague we turned our shared passion into
              our own project — Balkan Sip.
            </p>

            <div className="owner-line" />
          </article>

          {/* CENTER IMAGE */}
          <div className="owners-photo">
            <div className="photo-frame">
              <img
                src="/founders.jpg"
                alt="The founders of Balkan Sip"
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

            <h2>Stefan Todorov</h2>

            <p>
              My name is Stefan Todorov, a bartender and co-founder of the Balkan Sip
              mobile bar. My journey began at the age of 16, after successfully
              completing a Waiter-Bartender course at Bar Academy Bulgaria. I
              started at Sammy&apos;s Bar as a bartender and later became bar manager.
              I realized that my passion was mixed drinks and continued developing
              at Ristretto, where I built a strong foundation in the industry. My
              growth continued at Legé Bar &amp; Diner, a key moment for me because
              the more dynamic environment helped me develop a faster and more
              efficient way of working. A turning point in my journey was joining
              the Phi Cocktail Bar team, where I still work today. It is the place
              where I continue to learn and improve every day in every aspect of
              bartending.
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
            It all starts
            <br />with an <span>idea.</span>
          </h2>

          <div className="story-text">
            <p>
              Balkan Sip began with a desire to create something different — a place
              that captures the feeling of summer, freedom and shared moments.
            </p>

            <p>
              From the first sketches to transforming the caravan into a real mobile
              bar, every part of the project carries its own story.
            </p>
          </div>

          <div className="story-coming">
            <span>The story continues...</span>
          </div>
        </div>
      </section>

      <Formats lang="en" />

      <section className="menu-section" id="menu">
        <div className="menu-shell">
          <div className="menu-heading">
            <div className="menu-heading-label">
              <p>MENU</p>
            </div>

            <div className="menu-heading-copy">
              <p className="menu-kicker">COCKTAILS · DRINKS · SNACKS</p>
              <h2>
                Choose your <span>sip.</span>
              </h2>
            </div>
          </div>

          <div className="menu-accordion menu-accordion-aligned">
            <details className="menu-dropdown cocktails-dropdown" open>
              <summary>
                <div className="menu-summary-main">
                  <h3>Cocktails</h3>
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
                      Items in this category will be added soon.
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
              Our <span>partners.</span>
            </h2>

            <p className="partners-intro">
              We work with established brands that share our commitment to
              quality, taste and a great experience.
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
              Let&apos;s <span>talk.</span>
            </h2>

            <p className="contact-intro">
              Planning an event, have a partnership idea, or simply want
              Balkan Sip to be part of your next occasion? Tell us a little
              more and we&apos;ll get back to you.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="fullName">Full name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="reason">Reason for contact *</label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  placeholder="Event, partnership, enquiry..."
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="social">Social media</label>
                <input
                  type="text"
                  id="social"
                  name="social"
                  placeholder="Instagram, Facebook..."
                />
              </div>
            </div>

            <div className="contact-field contact-message-field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what you have in mind..."
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
                By submitting this form, you agree to our{" "}
                <a href="/en/privacy">Privacy Policy</a>.
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
                    Sending...
                  </>
                ) : (
                  <>
                    Send
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

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#formats">Formats</a>
            <a href="#menu">Menu</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 Balkan Sip. All rights reserved.</p>

          <a href="/en/privacy" className="footer-privacy">
            Privacy Policy
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
              aria-label="Close"
              onClick={() => setIsSuccessOpen(false)}
            >
              ×
            </button>

            <div className="contact-success-icon" aria-hidden="true">
              ✓
            </div>

            <span className="contact-success-eyebrow">BALKAN SIP</span>

            <h2 id="contact-success-title">
              Your message was sent <span>successfully!</span>
            </h2>

            <p>We&apos;ll get back to you soon!</p>

            <button
              type="button"
              className="contact-success-button"
              onClick={() => setIsSuccessOpen(false)}
            >
              Great
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
