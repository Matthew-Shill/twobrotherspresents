import { heroCards, images } from '../data/content'
import { FloatingLogo } from './FloatingLogo'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__glow hero__glow--cyan" />
        <div className="hero__glow hero__glow--gold" />
        <div className="hero__grain" />
      </div>

      <div className="hero__shell section">
        <div className="hero__intro">
          <FloatingLogo
            src={images.wayLessSad.stacked}
            alt="Two Brothers Presents: Way Less Sad"
            variant="transparent"
            className="hero__brand-logo"
            delay={0.2}
          />
          <p className="eyebrow">Matt &amp; Mike Shill · Two Brothers Presents</p>
          <h1 className="hero__title">
            Two brothers on a quest to feel <em>way less sad</em>.
          </h1>
          <p className="hero__subtitle">
            Men&apos;s mental health through adventure, gaming, brotherhood, humor, and
            conversations that are honest enough to actually help.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="https://youtube.com/@twobrotherspresents"
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
            </a>
            <a className="btn btn--secondary" href="#podcast">
              Listen to the Podcast
            </a>
            <a className="btn btn--ghost" href="#joy-stick">
              Join the Stream
            </a>
          </div>
        </div>

        <div className="hero__bento" aria-label="Content pillars preview">
          {heroCards.map((card, index) => (
            <a
              key={card.href}
              href={card.href}
              className={`hero-card hero-card--${card.accent}`}
              style={{ ['--card-index' as string]: index }}
            >
              <FloatingLogo
                src={card.logo}
                alt={card.alt}
                variant="transparent"
                delay={index * 0.6}
                className="hero-card__logo"
              />
              <div className="hero-card__meta">
                <span className="hero-card__label">{card.label}</span>
                <span className="hero-card__sublabel">{card.sublabel}</span>
              </div>
              <span className="hero-card__arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
