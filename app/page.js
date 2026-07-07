import { site, waLink } from "../lib/config";
import GitHubProjects from "../components/GitHubProjects";
import {
  WhatsAppIcon,
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  ExternalIcon,
  SendIcon,
} from "../components/Icons";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="site">
        <div className="container">
          © {new Date().getFullYear()} {site.name} · Built with Next.js ·{" "}
          {site.location}
        </div>
      </footer>
      <a
        className="wa-float"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          shazaniyu<span>.tech</span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a
            className="nav-cta"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message me
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Available for work · {site.location}</span>
          <h1>
            Hi, I’m {site.firstName}. I build <em>mobile & web apps</em> that
            solve real problems.
          </h1>
          <p className="lede">{site.bio}</p>
          <div className="hero-actions">
            <a
              className="btn btn-green"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} /> Chat on WhatsApp
            </a>
            <a className="btn btn-outline" href="#projects">
              See my work
            </a>
          </div>
        </div>

        <div className="chat-card" aria-hidden="true">
          <div className="chat-head">
            <div className="chat-avatar">S</div>
            <div>
              <div className="chat-head-name">{site.name}</div>
              <div className="chat-head-status">online · replies fast</div>
            </div>
          </div>
          <div className="chat-body">
            <div className="bubble them">
              Hey! I need a developer for my app idea 👋
            </div>
            <div className="bubble me">
              You’re in the right place. Flutter, React, Next.js  I ship it.
            </div>
            <div className="bubble them">How do we start?</div>
            <div className="bubble me">Just send a message. Let’s build. 🚀</div>
          </div>
          <div className="chat-reply">
            <div className="chat-reply-field">Type a message…</div>
            <a
              className="chat-reply-send"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me a WhatsApp message"
            >
              <SendIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2>Featured projects</h2>
          <p>
            Handpicked builds  mobile apps in Flutter and web apps in
            JavaScript. Every card links to the code, and to a live demo where
            one is deployed.
          </p>
        </div>

        <div className="project-grid">
          {site.featured.map((p) => (
            <article className="project-card" key={p.repo}>
              <h3 className="project-title">{p.name}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="tech-row">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.live && (
                  <a
                    className="plink plink-live"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalIcon /> Live Demo
                  </a>
                )}
                <a
                  className="plink plink-code"
                  href={`${site.links.github}/${p.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={15} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: 72 }}>
          <span className="eyebrow">Live from GitHub</span>
          <h2>Everything else I’ve shipped</h2>
          <p>
            Pulled straight from my GitHub in real time this list updates
            itself whenever I push something new.
          </p>
        </div>
        <GitHubProjects />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Toolbox</span>
          <h2>Skills & technologies</h2>
        </div>
        <div className="skills-cloud">
          {site.skills.map((s) => (
            <span className="skill-chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="inner">
        <span className="eyebrow" style={{ color: "var(--amber)" }}>
          Let’s talk
        </span>
        <h2>Got a project in mind?</h2>
        <p>
          The fastest way to reach me is WhatsApp  send a message and let’s
          turn your idea into a working product.
        </p>
        <a
          className="btn btn-green"
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={20} /> Message me on WhatsApp
        </a>
        <div className="socials">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
