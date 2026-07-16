# Yoga with Wiebke

A refreshed, dynamic website for [Yoga with Wiebke](https://yoga-with-wiebke.web.app),
rebuilt from her original site and hosted on Firebase.

**Live:** https://yoga-with-wiebke.web.app

## Stack
- Static HTML / CSS / vanilla JS (no build step)
- Firebase Hosting
- Content & photos carried over from her original WordPress site, restyled

## Project layout
```
public/          # the deployed site (Firebase hosting root)
  index.html     # single-page site
  css/styles.css # design system (sage / sand / sky / cream palette)
  js/main.js     # mobile nav + small enhancements
  assets/        # favicon + optimised photos
firebase.json    # hosting config
.firebaserc      # Firebase project: yoga-with-wiebke
ROADMAP.md       # scope + future ideas (reviews, booking form, schedule, admin)
```
> The original site is mirrored locally in `old-site/` for reference and is
> intentionally **not** committed (see `.gitignore`).

## Develop
Just open `public/index.html` in a browser — no build needed.

## Deploy
```bash
firebase deploy --only hosting
```

## Roadmap
See [ROADMAP.md](ROADMAP.md) for planned dynamic features and decisions.
