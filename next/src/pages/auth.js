import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import AuthForm from '@/components/auth/auth-form'
import { useRouter } from 'next/router'
import Spinner from '@/components/layout/Spinner'
import Head from 'next/head'

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/profile')
      } else {
        setIsLoading(false)
      }
    })
  }, [router])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Head>
        <title>m-TechTrek | Authentication</title>
        <meta
          name="description"
          content="A bootcamp directory where you can find various courses on technology"
        />
      </Head>
      <AuthForm />
    </>
  )
}

export default AuthPage
