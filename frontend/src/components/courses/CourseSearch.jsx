import { useState, useContext } from 'react'
// import CourseContex from '../../context/CourseContex'
import BootcampContext from '../../context/BootcampContext'

function CourseSearch() {
  const [text, setText] = useState('')

  //   const { courses, searchCourses, clearResults } = useContext(CourseContex)
  const { setAlert } = useContext(BootcampContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter a course', 'error')
    } else {
      //   searchCourses(text)
      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search for courses"
                value={text}
                onChange={handleChange}
              />
              {/* <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button> */}
              <button
                type="submit"
                className="btn btn-square absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* {courses.length > 0 && (
        <div onClick={clearResults}>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )} */}
    </div>
  )
}

export default CourseSearch
