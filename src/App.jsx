import React, { useState } from 'react';

const ArrowIcon = ({ diagonal = false }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    className="arrow-icon"
  >
    {diagonal ? (
      <path d="M5 15 15 5M6 5h9v9" />
    ) : (
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    )}
  </svg>
);

const Mark = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <path d="M20 3.5 36.5 13v14L20 36.5 3.5 27V13L20 3.5Z" />
    <path d="m20 11 9 5.2v7.6L20 29l-9-5.2v-7.6L20 11Z" />
    <path d="M20 11v18m9-12.8-18 10.4m0-10.4 18 10.4" />
  </svg>
);

const services = [
  {
    number: '01',
    title: 'Find your direction',
    description:
      'Turn a big idea into a clear, confident path forward. Start with the right questions, then build a plan that moves.',
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Build what matters',
    description:
      'Bring people and technology together to create thoughtful solutions for the challenges that count.',
    icon: 'layers',
  },
  {
    number: '03',
    title: 'Make progress real',
    description:
      'Go from promising first step to lasting momentum with the right support at every stage.',
    icon: 'spark',
  },
];

function ServiceIcon({ name }) {
  if (name === 'compass') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="13" />
        <path d="m25.5 14.5-3.2 7.8-7.8 3.2 3.2-7.8 7.8-3.2Z" />
        <path d="M20 4v3m0 26v3M4 20h3m26 0h3" />
      </svg>
    );
  }
  if (name === 'layers') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="m20 7 14 7.5-14 7.5L6 14.5 20 7Z" />
        <path d="m6 20 14 7.5L34 20M6 25.5 20 33l14-7.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="m21.5 4-13 19h10l-1 13 14-21h-11l1-11Z" />
      <path d="m8 7-1.5 3.5L3 12l3.5 1.5L8 17l1.5-3.5L13 12l-3.5-1.5L8 7Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RLV Nexus home" onClick={closeMenu}>
          <Mark className="brand-mark" />
          <span>RLV<span className="brand-light">NEXUS</span></span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#work" onClick={closeMenu}>What we do</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A better way forward</p>
            <h1>Make the<br />right <span>connection.</span></h1>
            <p className="hero-description">
              Big things happen when the right people, ideas, and technology come together. We&apos;re here to help you find that connection.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Discover RLV Nexus <ArrowIcon />
              </a>
              <a className="text-link" href="#approach">Get to know us <span>↓</span></a>
            </div>
          </div>

          <div className="hero-art" aria-label="A preview of the RLV Nexus project workspace" role="img">
            <div className="canvas-window">
              <div className="canvas-topbar"><span className="window-dots"><i /><i /><i /></span><span>RLV NEXUS <b>/</b> PROJECT SPACE</span><span className="window-avatar">RN</span></div>
              <div className="canvas-body">
                <div className="canvas-heading"><div><span className="canvas-kicker">YOUR NEXT CHAPTER</span><h3>Ideas, meet direction.</h3></div><span className="canvas-date">FIELD NOTES <b>01 / 03</b></span></div>
                <div className="canvas-map"><div className="map-line map-line-one" /><div className="map-line map-line-two" /><div className="map-node map-node-one"><span>01</span><strong>Find the signal</strong><small>Insight</small></div><div className="map-node map-node-two"><span>02</span><strong>Choose a direction</strong><small>Strategy</small></div><div className="map-node map-node-three"><span>03</span><strong>Make it matter</strong><small>Momentum</small></div><span className="map-spark">✳</span></div>
                <div className="canvas-footer"><span><i /> ONE SHARED POINT OF VIEW</span><span>IN GOOD COMPANY <ArrowIcon diagonal /></span></div>
              </div>
            </div>
            <div className="canvas-note note-top"><span className="note-avatar">RL</span><span><strong>A fresh perspective</strong><small>Good ideas take shape together</small></span><span className="note-check">↗</span></div>
            <div className="canvas-note note-bottom"><span className="note-spark">✳</span><span><strong>Clear eyes, next steps</strong><small>A little progress goes a long way</small></span></div>
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
          </div>

          <div className="hero-bottom">
            <span>Independent thinking. Shared momentum.</span>
            <span className="scroll-note">SCROLL TO EXPLORE <span>↓</span></span>
          </div>
        </section>

        <section className="intro-section" id="approach">
          <div className="section-kicker"><span>01</span><span className="kicker-line" /> THE NEXUS EFFECT</div>
          <div className="intro-content">
            <h2>Progress isn&apos;t a<br />straight line. It&apos;s a <span>connection.</span></h2>
            <div className="intro-aside">
              <p>
                The next chapter starts when you see things differently. RLV Nexus brings fresh perspectives and practical thinking together—so your next move feels less like a leap and more like a natural step.
              </p>
              <a className="underlined-link" href="#work">See how we work <ArrowIcon diagonal /></a>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading">
            <div>
              <div className="section-kicker"><span>02</span><span className="kicker-line" /> WHAT WE BRING</div>
              <h2>From “what if”<br />to <span>what&apos;s next.</span></h2>
            </div>
            <p>Every challenge is different. Our way of meeting it is built around the people, possibilities, and potential in front of us.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon"><ServiceIcon name={service.icon} /></div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow"><ArrowIcon diagonal /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-section" id="about">
          <div className="statement-mark"><Mark /></div>
          <p className="statement-overline">GOOD THINGS CONNECT</p>
          <h2>Not another<br />voice in the room.<br /><span>A new way to see it.</span></h2>
          <p className="statement-copy">
            We believe the best answers live at the intersection of different perspectives. That&apos;s where RLV Nexus begins.
          </p>
          <a className="button button-light" href="#contact">A little more about us <ArrowIcon /></a>
          <div className="statement-decoration decoration-one" />
          <div className="statement-decoration decoration-two" />
        </section>

        <section className="contact-section" id="contact">
          <div className="section-kicker"><span>03</span><span className="kicker-line" /> YOUR NEXT MOVE</div>
          <div className="contact-content">
            <div>
              <h2>Let&apos;s find<br />your <span>connection.</span></h2>
              <p>Have a question, an idea, or just want to say hello? We&apos;re always up for a good conversation.</p>
            </div>
            <a className="contact-link" href="mailto:hello@rlvnexus.com">
              <span>Start a conversation</span><ArrowIcon diagonal />
              <small>hello@rlvnexus.com</small>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="RLV Nexus home">
          <Mark className="brand-mark" />
          <span>RLV<span className="brand-light">NEXUS</span></span>
        </a>
        <span className="footer-note">Independent thinking. Shared momentum.</span>
        <span className="copyright">© {new Date().getFullYear()} RLV Nexus</span>
        <a className="back-top" href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default App;
