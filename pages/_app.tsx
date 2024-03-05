import React from 'react'
import type { AppProps } from 'next/app'
import { Inter as Font } from 'next/font/google'
import Head from 'next/head'
import { I18nProvider } from '@/locales'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

import id from '@/locales/id'

import '@/styles/globals.css'

const font = Font({
  subsets: ['latin'],
})

// Create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>My Awesome App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Toaster gutter={12} />

        <I18nProvider locale={pageProps.locale} fallbackLocale={id}>
          <Component {...pageProps} />
        </I18nProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
