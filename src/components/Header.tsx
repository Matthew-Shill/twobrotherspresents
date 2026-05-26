import { useEffect, useState } from 'react'
import { images, navLinks } from '../data/content'
import { FloatingLogo } from './FloatingLogo'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="brand-mark" href="#home" aria-label="Two Brothers Presents home">
          <FloatingLogo
            src={images.brand.icon}
            alt=""
            variant="transparent"
            className="brand-mark__icon"
          />
          <span className="brand-mark__text">
            <span className="brand-mark__line">Two Brothers</span>
            <span className="brand-mark__line brand-mark__line--accent">Presents</span>
          </span>
        </a>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary site-nav__cta" href="#watch" onClick={() => setMenuOpen(false)}>
            Follow Along
          </a>
        </nav>
      </div>
    </header>
  )
}
