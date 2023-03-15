import { FaHome } from 'react-icons/fa'
import Link from 'next/link'

function NotFoundPage() {
  return (
    <div className="flex justify-center mx-auto h-screen mt-16">
      <div className="text-center mt-16">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page not found!</p>
          <Link
            className="btn btn-primary btn-lg bg-primary-600 dark:border-none text-white hover:bg-primary-500"
            href={'/'}
          >
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
