import '@/styles/globals.css'
import Layout from '../components/layout/layout'
import { CourseProvider } from '@/context/CourseContext'
import { BootcampProvider } from '@/context/BootcampContext'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <BootcampProvider>
        <CourseProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </CourseProvider>
      </BootcampProvider>
    </SessionProvider>
  )
}
