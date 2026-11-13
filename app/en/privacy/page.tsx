"use client";

import { useState } from "react";

export default function PrivacyPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="privacy-page">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="/en#about" className="nav-logo" aria-label="Balkan Sip">
          <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
        </a>

        <nav
          className={`nav-links ${isNavOpen ? "nav-links-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <a href="/en#about" onClick={() => setIsNavOpen(false)}>
            About
          </a>
          <a href="/en#menu" onClick={() => setIsNavOpen(false)}>
            Menu
          </a>
          <a href="/en#partners" onClick={() => setIsNavOpen(false)}>
            Partners
          </a>
          <a
            href="/en#contact"
            className="nav-contact"
            onClick={() => setIsNavOpen(false)}
          >
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <div className="language-switch" aria-label="Language selection">
            <a href="/privacy">BG</a>
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

      {/* HERO */}
      <section className="privacy-hero">
        <div className="privacy-hero-inner">
          <p className="privacy-eyebrow">BALKAN SIP · PRIVACY</p>

          <h1>
            Privacy <span>Policy.</span>
          </h1>

          <p className="privacy-updated">
            Last updated: 11 September 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="privacy-content">
        <div className="privacy-content-inner">
          <article className="privacy-document">
            <section className="privacy-section">
              <div className="privacy-section-number">01</div>

              <div className="privacy-section-content">
                <h2>About your privacy</h2>

                <p>
                  Balkan Sip respects your privacy and is committed to protecting your personal data.
                </p>

                <p>
                  This Privacy Policy explains what information we may collect through{" "}
                  <a href="https://balkansip.bg">balkansip.bg</a>, how we use it, and what rights you have in relation to it.
                </p>

                <p>
                  Personal data is processed in accordance with applicable Bulgarian and European legislation, including the General Data Protection Regulation (Regulation (EU) 2016/679 — GDPR).
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">02</div>

              <div className="privacy-section-content">
                <h2>What data we collect</h2>

                <p>
                  We primarily collect personal data when you voluntarily contact us through the website contact form.
                </p>

                <p>This may include:</p>

                <ul>
                  <li>name;</li>
                  <li>email address;</li>
                  <li>reason for contacting us;</li>
                  <li>
                    a social media profile, when you choose to provide it;
                  </li>
                  <li>the content of your message;</li>
                  <li>
                    other information you voluntarily provide when communicating with us.
                  </li>
                </ul>

                <p>
                  Please do not provide sensitive or other personal data that is not necessary for your enquiry.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">03</div>

              <div className="privacy-section-content">
                <h2>How we use your data</h2>

                <p>We use the information you provide to:</p>

                <ul>
                  <li>receive and process your enquiries;</li>
                  <li>
                    communicate with you and respond to your messages;
                  </li>
                  <li>
                    discuss potential services, events, partnerships or other relationships with Balkan Sip;
                  </li>
                  <li>
                    comply with applicable legal obligations and protect our legitimate interests.
                  </li>
                </ul>

                <p>
                  Depending on the circumstances, processing may be based on your consent, steps taken before entering into a contract, performance of a contract, a legal obligation or a legitimate interest.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">04</div>

              <div className="privacy-section-content">
                <h2>Storage and sharing of data</h2>

                <p>
                  We retain personal data only for as long as necessary for the purposes for which it was provided, or where retention is necessary to comply with a legal obligation or protect legitimate interests.
                </p>

                <p>
                  We do not sell or provide your personal data to third parties for their own advertising purposes.
                </p>

                <p>
                  We may use external technical service providers for the operation of the website and our communications, including hosting, database and email services. They may process data only to the extent necessary to provide the relevant service and subject to applicable data protection requirements.
                </p>

                <p>
                  Where processing involves the transfer of personal data outside the European Economic Area, the mechanisms and safeguards required by applicable law are used.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">05</div>

              <div className="privacy-section-content">
                <h2>Security</h2>

                <p>
                  We apply appropriate technical and organisational measures to protect information against unauthorised access, loss, alteration or disclosure.
                </p>

                <p>
                  However, no system for transmitting or storing information over the internet can guarantee absolute security.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">06</div>

              <div className="privacy-section-content">
                <h2>Your rights</h2>

                <p>
                  Under applicable law, where the relevant right applies, you may request:
                </p>

                <ul>
                  <li>access to your personal data;</li>
                  <li>correction or deletion of your data;</li>
                  <li>restriction of processing;</li>
                  <li>to object to processing;</li>
                  <li>data portability;</li>
                  <li>withdrawal of consent you have given.</li>
                </ul>

                <p>
                  You also have the right to lodge a complaint with the Bulgarian Commission for Personal Data Protection (CPDP) if you believe that your personal data is being processed unlawfully.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">07</div>

              <div className="privacy-section-content">
                <h2>Cookies</h2>

                <p>
                  The website may use technologies that are necessary for its proper and secure operation.
                </p>

                <p>
                  If optional analytics, marketing or similar technologies are used, the required information and consent controls will be provided where required by law.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">08</div>

              <div className="privacy-section-content">
                <h2>Changes to this policy</h2>

                <p>
                  We may update this Privacy Policy from time to time to reflect changes to the website, our data processing practices or applicable law.
                </p>

                <p>
                  The current version will be published on this page.
                </p>
              </div>
            </section>

            <section className="privacy-section privacy-contact-section">
              <div className="privacy-section-number">09</div>

              <div className="privacy-section-content">
                <h2>Contact</h2>

                <p>
                  For questions about this Policy or to exercise your rights,
                  you can contact us:
                </p>

                <div className="privacy-contact-card">
                  <strong>Balkan Sip</strong>

                  <p>
                    Website:{" "}
                    <a href="https://balkansip.bg">balkansip.bg</a>
                  </p>

                  <p>
                    Email:{" "}
                    <a href="mailto:contact@balkansip.bg">
                      contact@balkansip.bg
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <a href="/en#about" className="footer-logo" aria-label="Balkan Sip">
            <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
          </a>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/en#about">About</a>
            <a href="/en#menu">Menu</a>
            <a href="/en#partners">Partners</a>
            <a href="/en#contact">Contact</a>
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
    </main>
  );
}