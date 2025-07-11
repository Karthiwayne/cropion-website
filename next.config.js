/**
 * next-intl configuration for Next.js 15 App Router
 */

/** @type {import('next-intl/plugin').NextIntlPlugin} */
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  experimental: {
    serverActions: true
  },
  // Add your Next.js and next-intl config below
  i18n: {
    locales: ['en', 'ta', 'hi'],
    defaultLocale: 'en',
    localeDetection: true
  }
});

