/**
 * next-intl configuration for Next.js 15 App Router
 */

/** @type {import('next-intl/plugin').NextIntlPlugin} */
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  experimental: {
    // Remove or specify as an object according to Next.js requirements
  },
  // Removed i18n config for App Router as it's unsupported
});

