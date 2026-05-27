# Two Brothers Presents

Marketing site for [Two Brothers Presents](https://github.com/Matthew-Shill/twobrotherspresents) — Matt and Mike Shill's creator brand focused on men's mental health through adventure, gaming, brotherhood, and honest conversation.

**Flagship content:** Way Less Sad (The Show & Podcast) and The Joystick (Twitch/gaming).

## Development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Production output is written to `dist/`.

## Project structure

- `src/components/` — Page sections (hero, mission, pillars, etc.)
- `src/data/content.ts` — Copy, links, and image paths
- `public/images/` — Brand logos and assets

## Deploy

Build with `npm run build` and host the `dist/` folder on any static host (GitHub Pages, Netlify, Vercel, etc.).
