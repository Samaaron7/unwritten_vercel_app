# Unwritten Events

Next.js 16 / React 19 website for Unwritten Events. The original Desktop project has been updated in place.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Next.js. For a production preview:

```sh
npm run build
npm start
```

## Content and images

- `public/images/`: 53 optimized WebP copies of the supplied event photographs. The full-resolution originals remain untouched in the original image folder.
- `lib/image-manifest.json`: photograph paths and descriptions.
- `lib/photos.ts`: featured photo selections and gallery categories.
- `lib/journal.ts`: four editable journal articles and their images.
- `app/services/page.tsx`: service descriptions; `app/testimonials/page.tsx`: approved testimonials.
- `components/Header.tsx` and `components/Footer.tsx`: navigation and social/contact links.

## Contact and consultation requests

Business email: **unwrittenev@gmail.com**. Phone: **516-673-7943**.

Both forms validate the visitor’s details and prepare an email addressed to the business. Visitors must choose **Open email app** and send the email, or copy the prepared message into their email service. The website does not send automatically, store submissions, or claim that a booking has been confirmed.

A live booking provider/calendar and automatic form delivery are not configured. Replace the consultation request flow with your actual booking link when your booking service is ready. Do not put email credentials or provider secrets in browser code.

## Verification

Production build and TypeScript checks pass. Browser checks covered desktop/mobile layouts, mobile navigation, gallery filtering and photo viewer controls, form validation, and email-draft generation. No test emails were sent.

## Scrolling and motion

The site now uses Lenis for gentle wheel momentum, animated same-page chapter links, subtle photo parallax, reveal transitions, and a page progress indicator. The homepage includes a photo story that supports mouse dragging with release momentum, touch swiping, arrow buttons, keyboard arrows, and horizontal snap points.

The footer’s **Motion** control offers **Use device setting**, **Full motion**, and **Reduced motion**. The default respects the visitor’s reduced-motion preference; Full motion is an explicit opt-in. Touch scrolling remains native. Opening a gallery photo pauses page momentum and restores it when the viewer closes.

All 19 original services remain visible. Dhol & Dholak Players and Henna / Mehndi Artists lead the music, culture, and beauty section, reachable from the services page’s chapter links. Those two services and transportation use designed typographic cards until matching original photographs are supplied.



The current website uses decor-only photographs. Images containing guests or printed portraits have been removed from the public assets and the gallery. Full-resolution originals remain untouched in their original Desktop folder.
