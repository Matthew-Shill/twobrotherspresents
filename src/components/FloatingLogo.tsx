type FloatingLogoProps = {
  src: string
  alt: string
  className?: string
  /** PNG with alpha channel, or navy-bg JPG with shadow only */
  variant?: 'transparent' | 'navy'
  delay?: number
}

export function FloatingLogo({
  src,
  alt,
  className = '',
  variant = 'transparent',
  delay = 0,
}: FloatingLogoProps) {
  return (
    <div
      className={`floating-logo floating-logo--${variant} ${className}`.trim()}
      style={{ '--float-delay': `${delay}s` } as React.CSSProperties}
    >
      <img src={src} alt={alt} draggable={false} />
    </div>
  )
}
