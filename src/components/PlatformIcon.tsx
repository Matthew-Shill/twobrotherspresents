type PlatformIconName =
  | 'youtube'
  | 'podcast'
  | 'twitch'
  | 'instagram'
  | 'tiktok'
  | 'threads'

type PlatformIconProps = {
  name: PlatformIconName
}

export function PlatformIcon({ name }: PlatformIconProps) {
  switch (name) {
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5V8.5L15.8 12l-6 3.5Z"
          />
        </svg>
      )
    case 'podcast':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-7 9v1a7 7 0 0 0 14 0v-1h2v1a9 9 0 0 1-8 8.9V22h4v2H7v-2h4v-1.1a9 9 0 0 1-8-8.9v-1h2Z"
          />
        </svg>
      )
    case 'twitch':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 2 2 6v14h5v2h2l2-2h3l5-5V2H4Zm15 11-3 3h-3l-2 2v-2H7V4h12v9Zm-3-7h2v6h-2V6Zm-5 0h2v6h-2V6Z"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM17.8 6.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z"
          />
        </svg>
      )
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.5 3c.4 2.8 1.8 4.5 4.5 4.7V11c-2.2 0-4.1-.7-5.7-2v7.2a6.8 6.8 0 1 1-6.8-6.8c.3 0 .7 0 1 .1v3.4a3.4 3.4 0 1 0 2.4 3.2V3h4.6Z"
          />
        </svg>
      )
    case 'threads':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.2c3.4 0 6.1 1.1 8 3.2-1.4 1.2-3 2-4.8 2.4-.9-1.3-2.1-2-3.6-2-2.5 0-4.3 1.7-4.3 4.1 0 .5.1 1 .3 1.4-3.6-.2-6.5-2.5-6.5-6.2C1.1 3.5 5.8 2.2 12 2.2Zm7.2 6.5c2.5.6 4.3 2.4 4.8 5.1-2.2 2.5-5.4 4-9.2 4-1.5 0-2.9-.3-4.1-.8.8-1.5 2.3-2.4 4.2-2.4 2.8 0 4.8 1.5 5.6 3.8 1.2-.9 2.2-2.1 2.9-3.5-.5-.2-1-.4-1.6-.5l.4-1.7Z"
          />
        </svg>
      )
  }
}
