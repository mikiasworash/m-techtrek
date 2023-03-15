import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import AuthForm from '@/components/auth/auth-form'
import { useRouter } from 'next/router'
import Spinner from '@/components/layout/Spinner'

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

  return <AuthForm />
}

export default AuthPage
