import { useContext, useEffect, useState } from 'react'
import CourseContext from '../../context/CourseContext'
import { FaSchool } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
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
      setAlert('Please enter a course title', 'error')
    } else if (coursesData.count > 0 || coursesData.success === false) {
      clearResults()
    } else {
      searchCourses(courseTitle)
    }
  }

  useEffect(() => {
    clearResults()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [hamburgerClicked, setHamburgerClicked] = useState(false)

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
          {/* <Link href={'/'} class="pt-2">
            <img src="" alt="m-bootcamp" />
          </Link> */}
          {/*  Menu Items*/}
          <div className="hidden lg:flex space-x-6">
            <a href="#featured-courses" className="hover:text-darkGrayishBlue">
              Courses
            </a>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Profile
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Sign In
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Sign Up
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              About
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Contact
            </Link>
          </div>
          {/* Search Form  */}
          <form onSubmit={handleSubmit}>
            <div className="hidden lg:flex space-x-3">
              <input
                type="text"
                className="flex-1 px-3 rounded-full text-center focus:outline-none border-2 border-gray-300"
                placeholder="Search for Courses"
                value={courseTitle}
                onChange={handleChange}
              />
              {coursesData.count == 0 && (
                <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none">
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
                ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
                : 'absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
            }
          >
            <Link href="#">Courses</Link>
            <Link href="#">Profile</Link>
            <Link href="#">Sign In</Link>
            <Link href="#">Sign Up</Link>
            <Link href="#">About</Link>
          </div>
        </div>
      </nav>

      {/* Search Form on Mobile View  */}
      <form onSubmit={handleSubmit}>
        <div className="text-center lg:hidden space-x-3">
          <input
            type="text"
            className="flex-1 px-3 py-2 rounded-full text-center focus:outline-none border-2 border-gray-300"
            placeholder="Search for Courses"
            value={courseTitle}
            onChange={handleChange}
          />
          {coursesData.count == 0 && (
            <button className="px-6 py-2 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none">
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
    </>
  )
}