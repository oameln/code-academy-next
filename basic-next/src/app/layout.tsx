import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Academy Next.js App',
  description: 'Learning Next.js fundamentals',
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