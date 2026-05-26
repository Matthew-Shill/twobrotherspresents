import { supportOptions } from '../data/content'

export function Support() {
  return (
    <section className="support section" id="support">
      <div className="section-shell">
        <div className="support-banner">
          <div className="support-banner__copy">
            <p className="eyebrow">Support the journey</p>
            <h2 className="section-title">Help us keep building</h2>
            <p className="section-lead">
              We&apos;re building something meaningful — and there will be more ways to support
              the mission soon.
            </p>
          </div>
        </div>

        <ul className="support-grid">
          {supportOptions.map((option) => (
            <li key={option.title} className="support-card">
              <article>
                <span className="support-card__status">{option.status}</span>
                <h3 className="support-card__title">{option.title}</h3>
                <p className="support-card__description">{option.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
