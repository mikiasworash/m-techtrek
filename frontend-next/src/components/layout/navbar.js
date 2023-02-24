import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import CourseContext from '../../context/CourseContext'
import { FaSchool } from 'react-icons/fa'
import Link from 'next/link'
import Alert from './Alert'
import { toast } from 'react-toastify'

export default function Navbar() {
  const router = useRouter()
  const currentPath = router.pathname

  const { data: session, status } = useSession()

  const {
    courseTitle,
    setCourseTitle,
    coursesData,
    searchCourses,
    clearResults,
    setAlert,
  } = useContext(CourseContext)

  const handleChange = (e) => {
    setCourseTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (courseTitle === '' && coursesData.success == null) {
      setAlert('Please enter a title', 'error')
    } else if (coursesData.count > 0 || coursesData.success === false) {
      clearResults()
    } else {
      if (currentPath != '/') {
        router.push('/')
      }
      searchCourses(courseTitle)
    }
  }

  useEffect(() => {
    clearResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [hamburgerClicked, setHamburgerClicked] = useState(false)

  function logoutHandler() {
    if (hamburgerClicked) {
      setHamburgerClicked((current) => !current)
    }
    signOut()
  }

  return (
    <>
      <nav className="relative container mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/*  Logo */}
          <div>
            {' '}
            <FaSchool className="inline pr-2 text-3xl" />
            <Link
              href={'/'}
              className="text-lg font-bold align-middle"
              onClick={clearResults}
            >
              m-bootcamp
            </Link>
          </div>
          {/* Logo Images
          <Link href={'/'} class="pt-2">
            <img src="" alt="m-bootcamp" />
          </Link> */}

          {/* Search Form  */}
          <form onSubmit={handleSubmit}>
            <div className="hidden lg:flex space-x-3">
              <Alert />
              <input
                type="text"
                className="flex-1 px-3 rounded-lg lg:w-72 text-center focus:outline-none border-2 border-gray-300"
                placeholder="Search for Courses"
                value={courseTitle}
                onChange={handleChange}
              />
              {coursesData.count == 0 && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-primary-700 focus:outline-none">
                  Go
                </button>
              )}
              {(coursesData.count > 0 || coursesData.success === false) && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none">
                  Clear
                </button>
              )}
            </div>
          </form>

          {/*  Menu Items*/}
          <div className="hidden lg:flex space-x-6">
            <a href="/#featured-courses" className="hover:text-primary-700">
              Courses
            </a>
            {session && status === 'authenticated' && (
              <Link href="/profile" className="hover:text-primary-700">
                Profile
              </Link>
            )}
            {!session && (
              <Link href="/auth" className="hover:text-primary-700">
                Log In
              </Link>
            )}
            <Link href="/#meet-the-team" className="hover:text-primary-700">
              About
            </Link>
            <Link href="/#contact" className="hover:text-primary-700">
              Contact
            </Link>
            {session && (
              <button
                onClick={logoutHandler}
                className="text-white bg-brightRed hover:bg-red-800 font-medium rounded-lg text-sm px-2 py-1"
              >
                Log Out
              </button>
            )}
          </div>

          {/*  Hamburger Icon  */}
          <button
            id="menu-btn"
            className={
              hamburgerClicked
                ? 'block hamburger lg:hidden focus:outline-none open'
                : 'block hamburger lg:hidden focus:outline-none'
            }
            onClick={() => setHamburgerClicked((current) => !current)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/*  Mobile Menu  */}
        <div className="lg:hidden">
          <div
            id="menu"
            className={
              hamburgerClicked
                ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50'
                : 'hidden'
            }
          >
            <Link
              href="/#featured-courses"
              onClick={() => setHamburgerClicked((current) => !current)}
              className="hover:hover:text-primary-700"
            >
              Courses
            </Link>
            {session && status === 'authenticated' && (
              <Link
                href="/profile"
                onClick={() => setHamburgerClicked((current) => !current)}
                className="hover:hover:text-primary-700"
              >
                Profile
              </Link>
            )}
            {!session && (
              <Link
                href="/auth"
                onClick={() => setHamburgerClicked((current) => !current)}
                className="hover:hover:text-primary-700"
              >
                Log In
              </Link>
            )}
            <Link
              href="/#meet-the-team"
              onClick={() => setHamburgerClicked((current) => !current)}
              className="hover:hover:text-primary-700"
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={() => setHamburgerClicked((current) => !current)}
              className="hover:hover:text-primary-700"
            >
              Contact
            </Link>
            {session && (
              <button
                onClick={logoutHandler}
                className="text-white bg-brightRed hover:bg-red-800 font-medium rounded-lg text-sm px-2 py-1"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Search Form on Mobile View  */}
      {currentPath == '/' ? (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="text-center lg:hidden space-x-3">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg md:w-64 text-center focus:outline-none border-2 border-gray-300"
                placeholder="Search for Courses"
                value={courseTitle}
                onChange={handleChange}
              />
              {coursesData.count == 0 && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-primary-700 focus:outline-none">
                  Go
                </button>
              )}
              {(coursesData.count > 0 || coursesData.success === false) && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none">
                  Clear
                </button>
              )}
            </div>
          </form>
          <div className="max-w-md mx-auto lg:hidden">
            <Alert />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
