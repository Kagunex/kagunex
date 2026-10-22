# Kagunex — Developer Portfolio

Premium personal developer portfolio for **Kagunex**.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide React.

## Features

- Dark premium aesthetic with restrained lime-green accents
- Responsive split-layout hero with real profile photo
- Fully interactive terminal console (commands, history, suggestions)
- Configurable project cards and profile data
- Accessible navigation and reduced-motion support
- Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit these files to customize:

| File | Purpose |
|------|---------|
| `src/data/profile.ts` | Name, tagline, bio, GitHub, profile image path |
| `src/data/projects.ts` | Project list, status, tags, optional links |
| `src/data/skills.ts` | Technology groups |

### Profile Image

Place your photo at:

```
public/images/profile.jpg
```

Update the path in `src/data/profile.ts` if needed (`profileImage`).

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Deploy — no extra configuration required.

Or use the CLI:

```bash
npx vercel
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## License

Personal portfolio — © Kagunex
