import { featuredEpisode } from '../data/content'

export function FeaturedEpisode() {
  return (
    <section className="featured section" id="featured">
      <div className="section-shell">
        <div className="featured-card">
          <div className="featured-card__content">
            <p className="eyebrow">{featuredEpisode.eyebrow}</p>
            <h2 className="featured-card__title">{featuredEpisode.title}</h2>
            <p className="featured-card__description">{featuredEpisode.description}</p>
            <a className="btn btn--primary" href={featuredEpisode.cta.href}>
              {featuredEpisode.cta.label}
            </a>
          </div>

          <div className="featured-card__player" aria-hidden="true">
            <div className="podcast-player">
              <div className="podcast-player__header">
                <span className="podcast-player__dot" />
                <span className="podcast-player__dot" />
                <span className="podcast-player__dot" />
              </div>
              <div className="podcast-player__body">
                <div className="podcast-player__art">
                  <span className="podcast-player__play">▶</span>
                </div>
                <div className="podcast-player__wave" />
                <p className="podcast-player__label">Episode preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
