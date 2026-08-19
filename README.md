# O Nanna Chetana Charitable Trust — Website

The public website for **O Nanna Chetana Charitable Trust** (ಓ ನನ್ನ ಚೇತನ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್), companion to [onctrust.in](https://onctrust.in). Bilingual (English / Kannada), built with Next.js, exported as a fully static site so it can be hosted anywhere.

This is **Phase 1** of the trust's digital plan (public website). Phase 2 adds an
operations portal for daily work tracking; Phase 3 adds automation and reporting.

## Pages

- `/` — home: mission, programs, volunteer call
- `/about` — mission, objectives, trustees, transparency
- `/programs` — the trust's programs
- `/gallery` — photo gallery (placeholders until photos are added)
- `/donate` — UPI and bank transfer details
- `/contact` — contact details and volunteer sign-up

## Editing content

**All text lives in one file: [`src/content/site.ts`](src/content/site.ts)**, with English and Kannada side by side. Search for `TODO` in that file — those items are placeholders that must be replaced with the trust's real details:

- Mission and objectives text (from onctrust.in / the trust deed)
- Real programs
- UPI ID and bank account details (`/donate`)
- Contact email, phone, and address
- Trustee names, registration / 80G details

To add gallery photos: put images in `public/gallery/` and update
`src/components/pages/GalleryPage.tsx`.

## Development

```bash
npm install
npm run dev      # local dev server at http://localhost:3000
npm run build    # static export into out/
```

The `out/` folder produced by `npm run build` is the whole site — upload it to any
static host (Vercel, Netlify, GitHub Pages, or the existing onctrust.in hosting).
