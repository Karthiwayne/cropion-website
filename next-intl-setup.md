# next-intl setup for Next.js 15 App Router

1. `next-intl` is installed. No separate types package is needed (there is no @types/next-intl). Types are bundled.
2. `next.config.js` configured for usage with next-intl plugin.
3. Layout is restructured to support locale-based routing through `[locale]/layout.tsx`.
4. Basic messages file in `src/messages/en.json`.
5. Minimal middleware for supported locales.

**Next steps:**
- Add more translations by creating more JSON files in `src/messages`, e.g. `fr.json`, `es.json`.
- Adjust logic in `[locale]/layout.tsx` for error handling or fallback.
- Start your app; URLs should include the locale, e.g. `/en`.

Docs: https://next-intl-docs.vercel.app/getting-started/app-router

