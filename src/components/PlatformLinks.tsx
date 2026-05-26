import { platforms } from '../data/content'
import { PlatformIcon } from './PlatformIcon'

export function PlatformLinks() {
  return (
    <section className="platforms section" id="watch">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Watch, listen &amp; follow</p>
          <h2 className="section-title">Find us wherever you hang out</h2>
          <p className="section-lead section-lead--centered">
            New episodes, streams, and updates are on the way. Tap in and follow along.
          </p>
        </div>

        <ul className="platform-grid">
          {platforms.map((platform) => (
            <li key={platform.name}>
              <a
                className="platform-card"
                href={platform.href}
                {...(platform.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <span className="platform-card__icon">
                  <PlatformIcon name={platform.icon} />
                </span>
                <h3 className="platform-card__name">{platform.name}</h3>
                <p className="platform-card__description">{platform.description}</p>
                <span className="platform-card__link-label">
                  {platform.href.startsWith('http') ? 'Visit →' : 'Coming soon'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
