"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/portfolio/cat-chestpiece.jpg", title: "Feral Study", detail: "Illustrative chest piece" },
  { src: "/portfolio/pierced-heart.jpg", title: "Three of Swords", detail: "Black & grey study" },
  { src: "/portfolio/compass-bird.jpg", title: "True North", detail: "Custom back piece" },
  { src: "/portfolio/neck-lettering.jpg", title: "Vertical Type", detail: "Blackletter study" },
  { src: "/portfolio/gengar.jpg", title: "Pocket Ghost", detail: "Fine-line character" },
  { src: "/portfolio/script-arm.jpg", title: "Private Language", detail: "Custom script" },
  { src: "/portfolio/nineteen-ninety-seven.jpg", title: "1997", detail: "Old English lettering" },
];

const archive = [
  ["/portfolio/gengar.jpg", "Pocket Ghost", "Fine line / 01"],
  ["/portfolio/cat-chestpiece.jpg", "Feral Study", "Illustrative / 02"],
  ["/portfolio/compass-bird.jpg", "True North", "Custom / 03"],
  ["/portfolio/heart-detail.jpg", "Three of Swords", "Black & grey / 04"],
  ["/portfolio/script-arm.jpg", "Private Language", "Script / 05"],
  ["/portfolio/numbering.jpg", "1997", "Lettering / 06"],
  ["/portfolio/neck-lettering.jpg", "Vertical Type", "Blackletter / 07"],
  ["/portfolio/pierced-heart.jpg", "Anatomy of Courage", "Black & grey / 08"],
];

const sections = [
  { id: "intro", number: "01", label: "opening", color: "pink" },
  { id: "artist", number: "02", label: "artist", color: "orange" },
  { id: "works", number: "03", label: "archive", color: "blue" },
  { id: "book", number: "04", label: "booking", color: "yellow" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      4800,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const folio = document.querySelector<HTMLElement>(".folio");
    if (!folio) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      {
        root: folio,
        rootMargin: "-22% 0px -68% 0px",
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <main className="site-shell">
      <p className="side-wordmark">Emir Casil</p>

      <aside className="index-tabs" aria-label="Folder index">
        {sections.map(({ id, number, label, color }) => (
          <a
            className={`index-tab tab-${color} ${activeSection === id ? "is-active" : ""}`}
            href={`#${id}`}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => setActiveSection(id)}
            key={id}
          >
            <span>{number}</span> {label}
          </a>
        ))}
      </aside>

      <div className="folio">
        <section className="spread opening-spread" id="intro">
          <div className="slideshow" aria-label="Featured tattoo work slideshow">
            <div className="slide-stack">
              {slides.map((slide, index) => (
                <figure
                  className={`slide ${index === activeSlide ? "is-active" : ""}`}
                  aria-hidden={index !== activeSlide}
                  key={slide.src}
                >
                  <img src={slide.src} alt={index === activeSlide ? slide.title : ""} />
                </figure>
              ))}
              <p className="slide-stamp">FIELD NOTES<br />ES—26</p>
            </div>

            <div className="slide-controls">
              <button type="button" onClick={showPrevious} aria-label="Previous image">←</button>
              <div className="slide-caption" aria-live="polite">
                <p>{slides[activeSlide].title}</p>
                <span>{slides[activeSlide].detail}</span>
              </div>
              <p className="slide-count">{String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
              <button type="button" onClick={showNext} aria-label="Next image">→</button>
            </div>

            <div className="slide-dots" aria-label="Choose an image">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  className={index === activeSlide ? "is-active" : ""}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${slide.title}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  key={slide.src}
                />
              ))}
            </div>
          </div>

          <div className="opening-copy">
            <p className="eyebrow">Custom pieces / one body at a time</p>
            <h1>Marks made<br />to <span className="marker">live with.</span></h1>
            <p className="lede">
              Personal drawings built around memory, instinct and the shape of the body.
              Every tattoo begins with a conversation and ends as something only you can carry.
            </p>
            <a className="text-link" href="#artist">Meet the artist <span>↓</span></a>
            <img className="calligraphy calligraphy--opening" src="/name-cursive.png" alt="" aria-hidden="true" />
            <p className="pencil-note">original work only<br />no repeats →</p>
          </div>
        </section>

        <section className="spread artist-spread" id="artist">
          <div className="artist-portrait">
            <figure className="portrait-print">
              <img src="/portfolio/artist-profile.jpg" alt="Emir Soria beside a motorcycle at Agas-Agas Bridge" />
              <figcaption>Artist portrait · On the road · 2026</figcaption>
            </figure>
            <figure className="artist-detail-print" aria-hidden="true">
              <img src="/portfolio/artist-img-secondary.jpg" alt="" />
            </figure>
            <p className="portrait-tape">PERSONAL FILE / 02</p>
          </div>

          <div className="artist-copy">
            <p className="eyebrow">Behind the needle</p>
            <h2>Meet<br />Emir.</h2>
            <p className="artist-lede">
              A tattoo artist drawn to bold symbols, lived-in lettering and images that feel
              personal before they feel polished.
            </p>
            <div className="artist-columns">
              <p>
                Emir’s practice moves between black-and-grey illustration, fine line, custom
                script and expressive one-off pieces. The work is direct, curious and made to
                settle naturally into the body—not sit on top of it.
              </p>
              <p>
                Each session is collaborative and unhurried. References are welcomed, but the
                final drawing is always rebuilt from scratch around the client, placement and story.
              </p>
            </div>
            <dl className="artist-facts">
              <div><dt>Based</dt><dd>Quezon City, PH</dd></div>
              <div><dt>Working in</dt><dd>Black & grey · Fine line · Lettering</dd></div>
              <div><dt>Studio</dt><dd>Private · By appointment</dd></div>
            </dl>
            <img className="calligraphy calligraphy--artist" src="/name-cursive.png" alt="" aria-hidden="true" />
          </div>
        </section>

        <section className="archive-section" id="works">
          <div className="archive-heading">
            <div>
              <p className="eyebrow">Selected work · Real client pieces</p>
              <h2>From the<br />archive</h2>
            </div>
            <p>A working folder of recent tattoos—small marks, bold lettering and larger custom compositions.</p>
          </div>

          <div className="archive-grid">
            {archive.map(([src, title, detail], index) => (
              <article className={`archive-card archive-card--${index + 1}`} key={src}>
                <div className="archive-photo"><img src={src} alt={title} /></div>
                <div className="archive-caption"><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
            <img className="calligraphy calligraphy--archive" src="/name-cursive.png" alt="" aria-hidden="true" />
          </div>
        </section>

        <section className="booking" id="book">
          <p className="eyebrow">Books open · Limited monthly sessions</p>
          <h2>Bring me your<br /><span>strange idea.</span></h2>
          <p>Include the concept, placement, approximate size and preferred dates.</p>
          <a className="booking-button" href="mailto:hello@emirsoria.studio?subject=Tattoo%20project%20inquiry">Start a project <span>↗</span></a>
          <img className="calligraphy calligraphy--booking" src="/name-cursive.png" alt="" aria-hidden="true" />
        </section>

        <footer className="footer">
          <div><strong>Emir Soria®</strong><p>Custom tattooing & original artwork</p></div>
          <nav aria-label="Footer"><a href="#artist">Artist</a><a href="#works">Work</a><a href="#intro">Top ↑</a></nav>
          <p className="copyright">© 2026 · All artwork and photography from the artist’s archive.</p>
        </footer>
      </div>
    </main>
  );
}
