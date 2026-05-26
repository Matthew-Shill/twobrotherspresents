import { brandValues, images } from '../data/content'
import { FloatingLogo } from './FloatingLogo'

export function Mission() {
  return (
    <section className="mission section" id="mission">
      <div className="section-shell mission__layout">
        <div className="mission__visual">
          <div className="mission__visual-frame">
            <FloatingLogo
              src={images.brand.icon}
              alt="Two Brothers handshake mark"
              variant="transparent"
              className="mission__icon"
              delay={0.2}
            />
          </div>
        </div>

        <div className="mission__content">
          <p className="eyebrow">Our mission</p>
          <h2 className="section-title">
            Real talk. Real adventures. <span className="text-gradient">Real brotherhood.</span>
          </h2>
          <p className="section-lead">
            Two Brothers Presents explores men&apos;s mental health through shared experiences,
            humor, adventure, and honest conversations — not as a clinical program, but as two
            brothers figuring it out together.
          </p>
          <p className="section-body">
            Matt and Mike Shill built this brand around the idea that feeling better doesn&apos;t
            have to look perfect. Sometimes it looks like a road trip, a late-night podcast
            recording, a vulnerable conversation, or laughing too hard while losing at Mario Kart.
          </p>

          <ul className="values-grid">
            {brandValues.map((value) => (
              <li key={value.title} className="value-card">
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
