export const images = {
  brand: {
    icon: '/images/brand/icon.svg',
  },
  wayLessSad: {
    show: '/images/way-less-sad/the-show.svg',
    podcast: '/images/way-less-sad/the-podcast.svg',
    stacked: '/images/brand/way-less-sad.svg',
  },
  theJoystick: {
    logo: '/images/the-joystick/the-joystick.svg',
  },
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Mission', href: '#mission' },
  { label: 'Shows', href: '#content' },
  { label: 'Featured', href: '#featured' },
  { label: 'Watch', href: '#watch' },
  { label: 'Support', href: '#support' },
] as const

export const brandTags = [
  'Adventure',
  'Gaming',
  'Brotherhood',
  'Humor',
  'Vulnerability',
  'Mental health',
  'Real talk',
  'Way less sad',
] as const

export const brandValues = [
  {
    title: 'Adventure',
    description: 'Travel, outdoors, challenges, and shared experiences that pull you out of your head.',
  },
  {
    title: 'Honesty',
    description: 'Vulnerable conversations about the messy parts of adulthood, family, and feeling better.',
  },
  {
    title: 'Humor',
    description: 'Laughing through the hard stuff — because lightness and depth can coexist.',
  },
  {
    title: 'Brotherhood',
    description: 'Two brothers figuring it out together, and building a community along the way.',
  },
] as const

export const contentPillars = [
  {
    id: 'way-less-sad',
    title: 'Way Less Sad',
    subtitle: 'The Show',
    logo: images.wayLessSad.show,
    logoAlt: 'Two Brothers Presents: Way Less Sad — The Show',
    accent: 'show' as const,
    contentType: 'Documentary / adventure video series',
    tone: 'Emotional, funny, adventurous, real',
    description:
      'Two brothers pursue happiness through shared experiences — travel, family, outdoor adventures, challenges, and meaningful conversations.',
    cta: { label: 'Watch on YouTube', href: 'https://youtube.com/@twobrotherspresents' },
  },
  {
    id: 'podcast',
    title: 'Way Less Sad',
    subtitle: 'The Podcast',
    logo: images.wayLessSad.podcast,
    logoAlt: 'Two Brothers Presents: Way Less Sad — The Podcast',
    accent: 'podcast' as const,
    contentType: 'Podcast',
    tone: 'Vulnerable, positive, honest, brotherly',
    description:
      'Real conversations between two brothers about mental health, family, distance, adulthood, happiness, and the messy parts of life.',
    cta: { label: 'Listen Now', href: '#watch' },
  },
  {
    id: 'joy-stick',
    title: 'The Joy Stick',
    subtitle: 'Twitch / Gaming',
    logo: images.theJoystick.logo,
    logoAlt: 'Two Brothers Presents: The Joystick',
    accent: 'joystick' as const,
    contentType: 'Live stream & gaming content',
    tone: 'Light, funny, community-driven',
    description:
      'Matt and Mike play Nintendo Switch and PS5 games, banter, laugh, occasionally do mental health check-ins, and build community.',
    cta: { label: 'Join the Stream', href: '#watch' },
  },
] as const

export const heroCards = [
  {
    label: 'Way Less Sad',
    sublabel: 'The Show',
    logo: images.wayLessSad.show,
    alt: 'Way Less Sad — The Show',
    href: '#way-less-sad',
    accent: 'show' as const,
  },
  {
    label: 'Way Less Sad',
    sublabel: 'The Podcast',
    logo: images.wayLessSad.podcast,
    alt: 'Way Less Sad — The Podcast',
    href: '#podcast',
    accent: 'podcast' as const,
  },
  {
    label: 'The Joy Stick',
    sublabel: 'Live on Twitch',
    logo: images.theJoystick.logo,
    alt: 'The Joy Stick',
    href: '#joy-stick',
    accent: 'joystick' as const,
  },
] as const

export const featuredEpisode = {
  eyebrow: 'Featured episode · Coming soon',
  title: 'Missing Home: The Weight of Distance and Family',
  description:
    'A conversation about family, distance, homesickness, adulthood, and staying connected when life pulls everyone in different directions.',
  cta: { label: 'Notify Me', href: '#watch' },
} as const

export const platforms = [
  {
    name: 'YouTube',
    description: 'Watch adventures, episodes, and behind-the-scenes moments.',
    href: 'https://youtube.com/@twobrotherspresents',
    icon: 'youtube' as const,
  },
  {
    name: 'Podcast',
    description: 'Listen to honest brother-to-brother conversations on the go.',
    href: '#watch',
    icon: 'podcast' as const,
  },
  {
    name: 'Twitch',
    description: 'Catch live gaming streams, banter, and community hangouts.',
    href: '#watch',
    icon: 'twitch' as const,
  },
  {
    name: 'Instagram',
    description: 'Follow along for clips, updates, and everyday brother chaos.',
    href: 'https://instagram.com/twobrotherspresents',
    icon: 'instagram' as const,
  },
  {
    name: 'TikTok',
    description: 'Short-form laughs, moments, and highlights from the journey.',
    href: '#watch',
    icon: 'tiktok' as const,
  },
  {
    name: 'Threads',
    description: 'Join the conversation and stay in the loop with the community.',
    href: 'https://threads.net/@twobrotherspresents',
    icon: 'threads' as const,
  },
] as const

export const supportOptions = [
  {
    title: 'Patreon',
    description: 'Help us keep creating and get early access, bonus content, and community perks.',
    status: 'Coming soon',
  },
  {
    title: 'Merch',
    description: 'Wear the vibe — apparel and gear inspired by brotherhood and Way Less Sad.',
    status: 'Coming soon',
  },
  {
    title: 'Sponsors',
    description: 'Partner with a creator brand built on authenticity, humor, and heart.',
    status: 'Inquiries welcome',
  },
  {
    title: 'Live Events',
    description: 'Meetups, watch parties, and in-person adventures with the community.',
    status: 'Coming soon',
  },
] as const

export const disclaimer =
  'Two Brothers Presents is not therapy or medical advice — just two brothers having honest conversations and building community.'
