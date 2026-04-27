import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio - Web Developer',
  description: 'Transform data into clarity. Custom dashboards and reporting systems for modern businesses.',
  icons: {
    icon: [
      {
        url: '/apple-icon2.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/apple-icon2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/apple-icon2.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-slate-950">
      <body className="font-sans antialiased bg-slate-950 text-slate-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
