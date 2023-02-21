import '@/styles/globals.css'
import Layout from '../components/layout/layout'
import { CourseProvider } from '@/context/CourseContext'
import { BootcampProvider } from '@/context/BootcampContext'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <BootcampProvider>
        <CourseProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CourseProvider>
      </BootcampProvider>
    </SessionProvider>
  )
}
