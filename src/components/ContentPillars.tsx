import { contentPillars } from '../data/content'
import { FloatingLogo } from './FloatingLogo'

export function ContentPillars() {
  return (
    <section className="pillars section" id="content">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Content pillars</p>
          <h2 className="section-title">Three ways to hang with the brothers</h2>
          <p className="section-lead section-lead--centered">
            Watch the journey, listen to the conversations, or jump into the stream — however you
            show up, you&apos;re part of the crew.
          </p>
        </div>

        <div className="pillar-showcase">
          {contentPillars.map((pillar, index) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className={`pillar-feature pillar-feature--${pillar.accent}${index % 2 === 1 ? ' pillar-feature--reverse' : ''}`}
            >
              <div className="pillar-feature__visual">
                <div className={`pillar-feature__frame pillar-feature__frame--${pillar.accent}`}>
                  <FloatingLogo
                    src={pillar.logo}
                    alt={pillar.logoAlt}
                    variant="transparent"
                    delay={index * 0.45}
                    className="pillar-feature__logo"
                  />
                </div>
              </div>

              <div className="pillar-feature__body">
                <p className="pillar-feature__eyebrow">{pillar.contentType}</p>
                <h3 className="pillar-feature__title">{pillar.title}</h3>
                <p className="pillar-feature__subtitle">{pillar.subtitle}</p>
                <p className="pillar-feature__description">{pillar.description}</p>

                <dl className="pillar-feature__meta">
                  <div>
                    <dt>Tone</dt>
                    <dd>{pillar.tone}</dd>
                  </div>
                </dl>

                <a
                  className="btn btn--secondary pillar-feature__cta"
                  href={pillar.cta.href}
                  {...(pillar.cta.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  {pillar.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
