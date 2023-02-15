import '@/styles/globals.css'
import Layout from '../components/layout/layout'
import { CourseProvider } from '@/context/CourseContext'
import { BootcampProvider } from '@/context/BootcampContext'

export default function App({ Component, pageProps }) {
  return (
    <BootcampProvider>
      <CourseProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CourseProvider>
    </BootcampProvider>
  )
}
