import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cropion - AI Farming Companion | Autonomous Weed Detection Rover',
  description: 'Revolutionizing agriculture with AI-powered rovers that detect and remove weeds autonomously. Making farming accessible to everyone.',
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