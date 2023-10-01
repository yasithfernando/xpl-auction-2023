import Topbar from '@/components/shared/Topbar'
import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import SupabaseProvider from '@/components/auth/supabase-provider'

export const metadata: Metadata = {
  title: 'XPL 2023',
  description: 'An auction platform for XPL 2023',
}


export const dynamic = 'force-dynamic'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <SupabaseProvider>
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
          <Toaster />
        </body>
      </html>
    </SupabaseProvider>
  )
}
