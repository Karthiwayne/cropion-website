// app/layout.tsx

import './globals.css' // or your global styles
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
