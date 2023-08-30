import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Inter as Font } from 'next/font/google'

import '@/styles/globals.css'
import Layout from '@/layouts/docs'
import { ToastProvider } from '@/components/toast'

// If loading a variable font, you don't need to specify the font weight
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
        <ToastProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToastProvider>
          
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
