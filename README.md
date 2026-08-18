# woyomi-website

Official website for [woyomi](https://github.com/JeanRGW/woyomi), served at
[woyomi.rgw.app](https://woyomi.rgw.app).

Single landing page built with **Astro 5 + Tailwind CSS 4** (via
`@tailwindcss/vite`), shipping near-zero JavaScript.

## Commands

Requires Node >= 22 and pnpm 11.8.0.

```sh
pnpm install
pnpm dev        # dev server, http://localhost:4321
pnpm build      # static build -> dist/
pnpm preview    # serve the built site locally
pnpm typecheck  # astro check
```

## Brand consistency

Styling, logo, and icons are shared with the main app — change them in both
places together:

- **Design tokens:** `src/styles/global.css` mirrors the `@theme` block from
  `apps/app/src/styles.css` (Manrope, deep navy `#071224` surfaces, `#0874FF`
  accent, shared radii, scrollbars, focus rings, `rise-in` motion).
- **Logo:** `src/assets/woyomi-logo-horizontal-reverse.svg` is a copy of
  `apps/app/src/assets/woyomi-logo-horizontal-reverse.svg`. The favicon /
  touch icon in `public/` come from `apps/app/src-tauri/icons/`.
- **Icons:** `src/components/Icon.astro` ports the stroke icon set from
  `apps/app/src/icons.tsx` (Lucide-style, 24×24, `stroke="currentColor"`,
  width 2, round caps/joins). Website-only icons (`shield`, `github`, `heart`)
  follow the same conventions.
- **Screenshots:** `src/assets/*.png` are copies of
  `assets/screenshots/*.png` in the main repo; refresh them together.

## Structure

```text
src/pages/index.astro        landing page
src/layouts/Base.astro       HTML shell + SEO/OG meta
src/components/              Header, Hero, Features, Screenshots, Plugins,
                             Download, Footer, Icon
src/styles/global.css        Tailwind v4 theme (brand tokens)
public/                      favicon + touch icon
```

## Deployment

`pnpm build` outputs a static site to `dist/` — hostable on any static
provider behind the `woyomi.rgw.app` domain.
