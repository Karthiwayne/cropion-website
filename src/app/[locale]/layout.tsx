import {NextIntlClientProvider} from 'next-intl';
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cropion - AI Farming Companion | Autonomous Weed Detection Rover',
  description: 'Revolutionizing agriculture with AI-powered rovers that detect and remove weeds autonomously. Making farming accessible to everyone.',
};

export default async function LocaleLayout({children, params: {locale}}: {children: React.ReactNode, params: {locale: string}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback or custom 404 logic can be here
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

