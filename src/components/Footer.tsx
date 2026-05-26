import { disclaimer, images, navLinks } from '../data/content'
import { FloatingLogo } from './FloatingLogo'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <FloatingLogo
              src={images.brand.icon}
              alt="Two Brothers handshake mark"
              variant="transparent"
              className="site-footer__icon"
              delay={0.4}
            />
            <div>
              <p className="site-footer__title">Two Brothers Presents</p>
              <p className="site-footer__tagline">
                Built around brotherhood, honesty, humor, and trying to be way less sad.
              </p>
            </div>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="site-footer__disclaimer">{disclaimer}</p>

        <p className="site-footer__copyright">
          &copy; {year} Two Brothers Presents. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
