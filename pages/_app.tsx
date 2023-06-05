import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import Layout from '@/layouts/docs'
import { SSRProvider } from 'react-aria'
import { ToastProvider } from '@/components/toast'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
})

// Create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <title>Starterkit</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToastProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <div id="radix-portal"></div>

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    </SSRProvider>
  )
}

export default MyApp
