import Topbar from '@/components/shared/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XPL Auction',
  description: 'An auction platform for XPL 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Topbar />
        <main className='flex flex-row'>

          <section className='main-container'>
            <div className='w-full'>
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
