import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import CourseContext from '../../context/CourseContext'
import { FaSchool } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'
import Alert from './Alert'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const router = useRouter()
  const currentPath = router.pathname

  const { data: session, status } = useSession()

  const [hamburgerClicked, setHamburgerClicked] = useState(false)

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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  function logoutHandler() {
    if (hamburgerClicked) {
      setHamburgerClicked((current) => !current)
    }
    signOut()
  }

  return (
    <div className="fixed top-0 mb-80 mx-auto bg-veryLightGray border-b-solid border-b border-b-blue-100 dark:bg-veryDarkBlue dark:border-b-gray-600 w-full z-50 bg-opacity-95 dark:bg-opacity-90">
      <nav className="relative container mx-auto p-2 lg:p-4">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/*  Logo */}
          <div className="flex justify-between">
            {' '}
            <FaSchool className="inline pr-2 text-3xl" />
            <Link
              href={'/'}
              className="text-lg font-bold align-middle inline"
              onClick={clearResults}
            >
              m-bootcamp
            </Link>
            {currentTheme === 'dark' ? (
              <SunIcon
                className="mt-1 h-5 w-5 cursor-pointer ml-2 self-center lg:hidden"
                onClick={() => setTheme('light')}
              />
            ) : (
              <MoonIcon
                className="mt-1 h-4 w-4 cursor-pointer ml-2 self-center lg:hidden"
                onClick={() => setTheme('dark')}
              />
            )}
          </div>
          {/* Logo Images
          <Link href={'/'} class="pt-2">
            <img src="" alt="m-bootcamp" />
          </Link> */}

          {/* Search Form  */}
          <form onSubmit={handleSubmit}>
            <div className="hidden lg:flex space-x-3 relative">
              <Alert />
              <BsSearch className="absolute left-56 top-3" />
              <input
                type="text"
                className="flex-1 px-3 rounded-lg lg:w-72 text-center focus:outline-none border-2 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Search for Courses"
                value={courseTitle}
                onChange={handleChange}
              />
              {coursesData.count == 0 && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-primary-700 focus:outline-none dark:bg-gray-600 dark:hover:bg-primary-500">
                  Go
                </button>
              )}
              {(coursesData.count > 0 || coursesData.success === false) && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-400 dark:hover:text-black">
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

            {currentTheme === 'dark' ? (
              <SunIcon
                className="mt-1 h-5 w-5 cursor-pointer "
                onClick={() => setTheme('light')}
              />
            ) : (
              <MoonIcon
                className="mt-1 h-4 w-4 cursor-pointer"
                onClick={() => setTheme('dark')}
              />
            )}
          </div>

          {/*  Hamburger Icon  */}
          <button
            id="menu-btn"
            className={
              hamburgerClicked
                ? 'block hamburger lg:hidden focus:outline-none mt-4 mr-2 open'
                : 'block hamburger lg:hidden focus:outline-none mt-4 mr-2'
            }
            onClick={() => setHamburgerClicked((current) => !current)}
          >
            <span className="hamburger-top dark:bg-white"></span>
            <span className="hamburger-middle dark:bg-white"></span>
            <span className="hamburger-bottom dark:bg-white"></span>
          </button>
        </div>
        {/*  Mobile Menu  */}
        <div className="lg:hidden">
          <div
            id="menu"
            className={
              hamburgerClicked
                ? 'absolute flex flex-col items-center w-48 md:w-64 self-end py-8 mt-4 space-y-6 font-bold bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-600  right-0 drop-shadow-md z-50'
                : 'hidden'
            }
          >
            <Link
              href="/#featured-courses"
              onClick={() => setHamburgerClicked((current) => !current)}
              className="hover:hover:text-primary-700 dark:hover:text-primary-500"
            >
              Courses
            </Link>
            {session && status === 'authenticated' && (
              <Link
                href="/profile"
                onClick={() => setHamburgerClicked((current) => !current)}
                className="hover:hover:text-primary-700 dark:hover:text-primary-500"
              >
                Profile
              </Link>
            )}
            {!session && (
              <Link
                href="/auth"
                onClick={() => setHamburgerClicked((current) => !current)}
                className="hover:hover:text-primary-700 dark:hover:text-primary-500"
              >
                Log In
              </Link>
            )}
            <Link
              href="/#meet-the-team"
              onClick={() => setHamburgerClicked((current) => !current)}
              className="hover:hover:text-primary-700 dark:hover:text-primary-500"
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={() => setHamburgerClicked((current) => !current)}
              className="hover:hover:text-primary-700 dark:hover:text-primary-500"
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
                className="flex-1 px-3 py-2 rounded-lg md:w-64 text-center focus:outline-none border-2 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Search for Courses"
                value={courseTitle}
                onChange={handleChange}
              />
              {coursesData.count == 0 && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-primary-700 focus:outline-none dark:bg-gray-600 dark:hover:bg-primary-500">
                  Go
                </button>
              )}
              {(coursesData.count > 0 || coursesData.success === false) && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-400 dark:hover:text-black">
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
    </div>
  )
}
