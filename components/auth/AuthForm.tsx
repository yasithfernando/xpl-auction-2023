'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'
import { useSupabase } from './supabase-provider'

export default function AuthForm() {
  //const supabase = createClientComponentClient<Database>()

  const isBrowser = typeof window !== 'undefined';
  const origin = isBrowser ? window.location.origin : 'http://localhost:3000';
  const redirectUrl = `${origin}/auth/callback`;

  const { supabase } = useSupabase();

  
  return (
    <Auth
      onlyThirdPartyProviders={true}
      supabaseClient={supabase}
      appearance={{ 
        theme: ThemeSupa,
        variables: {
            default: {
                colors: {
                    brand:'darkblue',
                    brandAccent:'darkblue',
                },
                fonts: {
                    bodyFontFamily: 'Radley, serif',
                    buttonFontFamily: 'Radley, serif',
                    labelFontFamily: 'Radley, serif',
                    inputFontFamily: 'Radley, serif',
                },
         }
        }
        }}
      theme="default"
      showLinks={false}
      providers={["azure"]}
      redirectTo={redirectUrl}
    />
  )
}