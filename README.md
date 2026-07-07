# Shazaniyu Gbadamosi — Portfolio

A professional portfolio built with **Next.js 14** (App Router). It showcases featured projects, pulls the rest of your repos **live from the GitHub API**, shows a **Live Demo** button for any repo with a website set, and lets visitors **message you on WhatsApp** from the hero, contact section, and a floating button.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize everything in one file

All your info lives in `lib/config.js`:

- Name, role, bio, location
- WhatsApp number and the pre-filled greeting message
- GitHub / LinkedIn / Instagram links
- Skills list
- Featured projects (add a `live: "https://..."` URL to any of them to show a Live Demo button)

## How "Live Demo" buttons appear automatically

The "Everything else I've shipped" section fetches your repos from
`api.github.com/users/Shazaniyu55/repos`. Any repo where you've filled in the
**Website** field (repo page → ⚙️ next to About → Website) automatically gets a
green **Live Demo** button. Add your Vercel URLs there and the portfolio updates
itself — no code changes needed.

## Deploy free on Vercel

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Click **Deploy** — no configuration needed.

You'll get a live URL like `https://shazaniyu-portfolio.vercel.app`.
