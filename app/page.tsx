const locations = [
  ["01", "Manila", "Jul 18—24"],
  ["02", "Cebu", "Aug 07—12"],
  ["03", "Singapore", "Sep 19—23"],
];

const work = [
  {
    src: "/tattoo-session.jpg",
    alt: "Tattoo artist working on a client's arm in a dark studio",
    number: "No. 021",
    title: "The Serpent",
    note: "Blackwork · Forearm · 2026",
    className: "work-card work-card--wide",
  },
  {
    src: "/tattoo-process.jpg",
    alt: "Close detail of a tattoo machine creating blackwork",
    number: "No. 017",
    title: "Night Garden",
    note: "Ornamental · Upper arm · 2026",
    className: "work-card work-card--portrait",
  },
  {
    src: "/tattoo-detail.jpg",
    alt: "Close view of a tattoo artist drawing a detailed line tattoo",
    number: "No. 009",
    title: "Soft Armor",
    note: "Fine line · Leg · 2025",
    className: "work-card work-card--small",
  },
  {
    src: "/tattoo-portrait.jpg",
    alt: "Tattoo machine adding linework to a colorful sleeve",
    number: "No. 013",
    title: "Old Flame",
    note: "Illustrative · Sleeve · 2025",
    className: "work-card work-card--landscape",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="index-tabs" aria-label="Section index">
        <a className="index-tab tab-pink" href="#intro"><span>I.</span> intro</a>
        <a className="index-tab tab-orange" href="#works"><span>II.</span> works</a>
        <a className="index-tab tab-blue" href="#approach"><span>III.</span> approach</a>
        <a className="index-tab tab-yellow" href="#book"><span>IV.</span> book a session</a>
      </aside>

      <div className="folio">
        <header className="masthead">
          <a className="artist-name" href="#intro" aria-label="Emir Soria, home">
            Emir Soria<span className="registered">®</span>
          </a>
          <p className="folio-label">Independent tattoo artist · MNL</p>
          <a className="small-link" href="mailto:hello@emirsoria.studio">Inquiries ↗</a>
        </header>

        <section className="tour-strip" aria-label="Upcoming guest spots">
          <p className="tour-heading">Upcoming locations</p>
          <div className="tour-list">
            {locations.map(([number, city, date]) => (
              <div className="tour-stop" key={city}>
                <span className="tour-number">{number}</span>
                <span>{city}</span>
                <i>•</i>
                <span>{date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="hero" id="intro">
          <div className="hero-copy">
            <p className="eyebrow">Custom pieces / one body at a time</p>
            <h1>Marks made<br />to <span className="marker">live with.</span></h1>
            <p className="hero-intro">
              I translate memory, instinct and strange little ideas into
              <span className="marker marker--thin"> permanent, personal artwork.</span>
              Every piece begins as a conversation and ends as something only you can carry.
            </p>
            <a className="text-cta" href="#works">Open the archive <span>↓</span></a>
          </div>

          <p className="scribble scribble--hero" aria-hidden="true">made by hand, worn by heart</p>
          <p className="margin-note margin-note--one">obsessed with contrast<br />& quiet details →</p>

          <figure className="polaroid polaroid--hero-small">
            <img src="/tattoo-process.jpg" alt="Tattoo needle drawing an intricate blackwork design" />
            <figcaption>process / 05:42 PM</figcaption>
          </figure>
          <figure className="polaroid polaroid--hero-large">
            <img src="/tattoo-session.jpg" alt="Black and white portrait of an artist tattooing a client" />
            <figcaption>studio study no. 24</figcaption>
          </figure>
          <div className="catalog-stamp" aria-hidden="true">ARCHIVE<br />ES—26</div>
        </section>

        <section className="archive" id="works">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected works · 2025—2026</p>
              <h2>Living<br />archive</h2>
            </div>
            <p className="section-note">
              A collection of custom blackwork, fine line and illustrative pieces.
              No repeats. No copies. Each drawing belongs to one person.
            </p>
          </div>

          <div className="work-grid">
            {work.map((item) => (
              <article className={item.className} key={item.number}>
                <div className="photo-mat">
                  <img src={item.src} alt={item.alt} />
                  <span className="photo-index">{item.number}</span>
                </div>
                <div className="work-caption">
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
            <p className="scribble scribble--works" aria-hidden="true">skin remembers everything</p>
            <p className="margin-note margin-note--two">not trends.<br />not templates.<br />just yours.</p>
          </div>
        </section>

        <section className="process" id="approach">
          <div className="process-intro">
            <p className="eyebrow">How it happens</p>
            <h2>Slow craft.<br /><span className="marker">Clear intent.</span></h2>
            <p>
              The best tattoos feel inevitable—like they were always meant to be there.
              My process protects the time needed to get there.
            </p>
          </div>

          <ol className="steps">
            <li>
              <span>01 / Exchange</span>
              <h3>Tell me the feeling</h3>
              <p>Send references, placement, scale and the story underneath it all.</p>
            </li>
            <li>
              <span>02 / Drawing</span>
              <h3>Built for your body</h3>
              <p>I draw a singular composition around your anatomy and movement.</p>
            </li>
            <li>
              <span>03 / Session</span>
              <h3>Make it permanent</h3>
              <p>We refine placement, settle in, and create the piece at an unhurried pace.</p>
            </li>
          </ol>

          <div className="studio-card">
            <img src="/tattoo-detail.jpg" alt="Tattoo artist at work in a warm, quiet studio" />
            <div>
              <p className="eyebrow">Private studio · Quezon City</p>
              <p>One client per day. Calm room. Sterile practice. Good music.</p>
            </div>
          </div>
        </section>

        <section className="booking" id="book">
          <p className="booking-kicker">Books open / August—October 2026</p>
          <h2>Have a strange<br />idea in mind?</h2>
          <a className="booking-button" href="mailto:hello@emirsoria.studio?subject=Tattoo%20project%20inquiry">
            Start a project <span>↗</span>
          </a>
          <p className="booking-note">Include your idea, placement, approximate size and preferred dates.</p>
          <p className="scribble scribble--booking" aria-hidden="true">let’s make it yours</p>
        </section>

        <footer className="footer">
          <div>
            <p>Emir Soria®</p>
            <p>Custom tattooing & original artwork</p>
          </div>
          <div className="footer-links">
            <a href="mailto:hello@emirsoria.studio">Email</a>
            <a href="#works">Archive</a>
            <a href="#intro">Back to top ↑</a>
          </div>
          <p className="copyright">© 2026 · All pieces are one of one. Photography via Unsplash.</p>
        </footer>
      </div>
    </main>
  );
}
