"use client";

import { useState } from "react";

export default function PrivacyPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="privacy-page">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="/#about" className="nav-logo" aria-label="Balkan Sip">
          <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
        </a>

        <nav
          className={`nav-links ${isNavOpen ? "nav-links-open" : ""}`}
          id="main-navigation"
          aria-label="Основна навигация"
        >
          <a href="/#about" onClick={() => setIsNavOpen(false)}>
            За нас
          </a>
          <a href="/#menu" onClick={() => setIsNavOpen(false)}>
            Меню
          </a>
          <a href="/#partners" onClick={() => setIsNavOpen(false)}>
            Партньори
          </a>
          <a
            href="/#contact"
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
            <a href="/en/privacy">EN</a>
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

      {/* HERO */}
      <section className="privacy-hero">
        <div className="privacy-hero-inner">
          <p className="privacy-eyebrow">BALKAN SIP · PRIVACY</p>

          <h1>
            Политика за <span>поверителност.</span>
          </h1>

          <p className="privacy-updated">
            Последна актуализация: 11.09.2026 г.
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
                <h2>За Вашата поверителност</h2>

                <p>
                  Balkan Sip уважава Вашата поверителност и се отнася
                  отговорно към защитата на личните Ви данни.
                </p>

                <p>
                  Настоящата Политика за поверителност описва каква
                  информация можем да събираме чрез{" "}
                  <a href="https://balkansip.bg">balkansip.bg</a>, за какви
                  цели я използваме и какви права имате във връзка с нея.
                </p>

                <p>
                  Личните данни се обработват в съответствие с приложимото
                  българско и европейско законодателство, включително Общия
                  регламент относно защитата на данните (Регламент (ЕС)
                  2016/679 – GDPR).
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">02</div>

              <div className="privacy-section-content">
                <h2>Какви данни събираме</h2>

                <p>
                  Събираме лични данни основно когато доброволно се свържете
                  с нас чрез контактната форма на сайта.
                </p>

                <p>Те могат да включват:</p>

                <ul>
                  <li>име;</li>
                  <li>имейл адрес;</li>
                  <li>причина за контакт;</li>
                  <li>
                    профил в социална мрежа, когато доброволно го
                    предоставите;
                  </li>
                  <li>съдържанието на Вашето съобщение;</li>
                  <li>
                    друга информация, която доброволно ни предоставите при
                    комуникацията си с нас.
                  </li>
                </ul>

                <p>
                  Моля, не предоставяйте чувствителни или други лични данни,
                  които не са необходими за Вашето запитване.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">03</div>

              <div className="privacy-section-content">
                <h2>За какво използваме данните</h2>

                <p>Използваме предоставената информация, за да:</p>

                <ul>
                  <li>получаваме и обработваме Вашите запитвания;</li>
                  <li>
                    комуникираме с Вас и отговаряме на съобщенията Ви;
                  </li>
                  <li>
                    обсъждаме потенциални услуги, събития, партньорства или
                    други отношения с Balkan Sip;
                  </li>
                  <li>
                    изпълняваме приложими законови задължения и защитаваме
                    законните си интереси.
                  </li>
                </ul>

                <p>
                  В зависимост от конкретния случай обработването може да се
                  основава на Вашето съгласие, предприемане на стъпки преди
                  сключване на договор, изпълнение на договор, законово
                  задължение или легитимен интерес.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">04</div>

              <div className="privacy-section-content">
                <h2>Съхранение и споделяне на данни</h2>

                <p>
                  Съхраняваме личните данни само доколкото това е необходимо
                  за целите, за които са предоставени, или когато
                  съхранението е необходимо във връзка със законово
                  задължение или защита на законни интереси.
                </p>

                <p>
                  Не продаваме и не предоставяме личните Ви данни на трети
                  лица за техни собствени рекламни цели.
                </p>

                <p>
                  За функционирането на сайта и комуникацията ни можем да
                  използваме външни доставчици на технически услуги, като
                  хостинг, база данни и електронна поща. Те могат да
                  обработват данни само доколкото това е необходимо за
                  предоставянето на съответната услуга и при приложимите
                  изисквания за защита на личните данни.
                </p>

                <p>
                  Когато обработването включва предаване на лични данни извън
                  Европейското икономическо пространство, се прилагат
                  предвидените в приложимото законодателство механизми и
                  гаранции.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">05</div>

              <div className="privacy-section-content">
                <h2>Сигурност</h2>

                <p>
                  Прилагаме подходящи технически и организационни мерки за
                  защита на информацията срещу неправомерен достъп, загуба,
                  изменение или разкриване.
                </p>

                <p>
                  Въпреки това никоя система за предаване или съхраняване на
                  информация чрез интернет не може да гарантира абсолютна
                  сигурност.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">06</div>

              <div className="privacy-section-content">
                <h2>Вашите права</h2>

                <p>
                  Съгласно приложимото законодателство можете, когато
                  съответното право е приложимо, да поискате:
                </p>

                <ul>
                  <li>достъп до личните си данни;</li>
                  <li>коригиране или изтриване на данните;</li>
                  <li>ограничаване на обработването;</li>
                  <li>да възразите срещу обработването;</li>
                  <li>преносимост на данните;</li>
                  <li>да оттеглите дадено съгласие.</li>
                </ul>

                <p>
                  Имате също право да подадете жалба до Комисията за защита
                  на личните данни (КЗЛД), ако считате, че личните Ви данни
                  се обработват незаконосъобразно.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">07</div>

              <div className="privacy-section-content">
                <h2>Бисквитки</h2>

                <p>
                  Сайтът може да използва технологии, необходими за правилното
                  и сигурно функциониране на услугата.
                </p>

                <p>
                  Ако бъдат използвани незадължителни аналитични,
                  маркетингови или други подобни технологии, ще бъде
                  предоставена необходимата информация и възможност за
                  управление на съгласието, когато това се изисква от закона.
                </p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-number">08</div>

              <div className="privacy-section-content">
                <h2>Промени в политиката</h2>

                <p>
                  Можем периодично да актуализираме настоящата Политика за
                  поверителност при промени в сайта, начина на обработване на
                  данни или приложимото законодателство.
                </p>

                <p>
                  Актуалната версия ще бъде публикувана на тази страница.
                </p>
              </div>
            </section>

            <section className="privacy-section privacy-contact-section">
              <div className="privacy-section-number">09</div>

              <div className="privacy-section-content">
                <h2>Контакт</h2>

                <p>
                  За въпроси относно настоящата Политика или за упражняване
                  на Вашите права можете да се свържете с нас:
                </p>

                <div className="privacy-contact-card">
                  <strong>Balkan Sip</strong>

                  <p>
                    Уебсайт:{" "}
                    <a href="https://balkansip.bg">balkansip.bg</a>
                  </p>

                  <p>
                    Имейл:{" "}
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
          <a href="/#about" className="footer-logo" aria-label="Balkan Sip">
            <img src="/balkan-sip-logo.png" alt="Balkan Sip" />
          </a>

          <nav className="footer-nav" aria-label="Навигация във футъра">
            <a href="/#about">За нас</a>
            <a href="/#menu">Меню</a>
            <a href="/#partners">Партньори</a>
            <a href="/#contact">Свържи се с нас</a>
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
    </main>
  );
}