import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

import NavBar from '@/components/navBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'DnD Studio',
  description: 'Transmedia & Gamification Studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className='px-4 sm:px-0 bg-zinc-900'>
        <NavBar />
        <div className="mx-auto">
          {children}  
        </div>
        <Footer />
      </body>
    </html>
  )
}
