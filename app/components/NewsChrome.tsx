"use client";

import Link from "next/link";
import { useState } from "react";

// Горна лента и футър за страниците с новини. Използват същите стилове
// като началната страница, но връзките водят обратно към нея.

export function NewsHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const close = () => setIsNavOpen(false);

  return (
    <header className="navbar">
      <Link href="/" className="nav-logo" aria-label="Balkan Sip">
        <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
      </Link>

      <nav
        className={`nav-links ${isNavOpen ? "nav-links-open" : ""}`}
        id="main-navigation"
        aria-label="Основна навигация"
      >
        <Link href="/#about" onClick={close}>
          За нас
        </Link>
        <Link href="/#formats" onClick={close}>
          Формати
        </Link>
        <Link href="/#menu" onClick={close}>
          Меню
        </Link>
        <Link href="/news" onClick={close} aria-current="page">
          Новини
        </Link>
        <Link href="/#contact" className="nav-contact" onClick={close}>
          Свържи се с нас
        </Link>
      </nav>

      <div className="nav-actions">
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
  );
}

export function NewsFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="footer-logo" aria-label="Balkan Sip">
          <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
        </Link>

        <nav className="footer-nav" aria-label="Навигация във футъра">
          <Link href="/#about">За нас</Link>
          <Link href="/#formats">Формати</Link>
          <Link href="/#menu">Меню</Link>
          <Link href="/news">Новини</Link>
          <Link href="/#contact">Свържи се с нас</Link>
        </nav>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2026 Balkan Sip. Всички права запазени.</p>
        <p className="news-footer-note">
          Резюметата на новините са наши. Правата върху оригиналните
          материали принадлежат на техните автори.
        </p>
      </div>
    </footer>
  );
}
