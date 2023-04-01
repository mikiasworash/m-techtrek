import '@/styles/globals.css'
import Layout from '../components/layout/layout'
import { CourseProvider } from '@/context/CourseContext'
import { BootcampProvider } from '@/context/BootcampContext'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <BootcampProvider>
        <CourseProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <Layout>
              <Head>
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
              </Head>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
          <ToastContainer />
        </CourseProvider>
      </BootcampProvider>
    </SessionProvider>
  )
}
