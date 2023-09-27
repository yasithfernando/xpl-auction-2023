import Topbar from '@/components/shared/Topbar'
import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'XPL 2023',
  description: 'An auction platform for XPL 2023',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
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
