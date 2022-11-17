import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

const CourseContext = createContext()

export const CourseProvider = ({ children }) => {
  const [courseTitle, setCourseTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const [courses, setCourses] = useState([])
  const [course, setCourse] = useState({})

  const [coursesData, setCoursesData] = useState({
    count: '',
    data: '',
    success: null,
  })

  const [alertData, setAlertData] = useState({
    type: '',
    msg: '',
  })

  // Search for courses
  const searchCourses = (courseTitle) => {
    setLoading(true)
    fetch(`courses/title/${courseTitle}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        data.success ? setCourses(data.data) : console.log(data.error)
        console.log(data)
        setCoursesData({
          count: data.count,
          data: data.data,
          success: data.success,
        })
      })
      .catch((err) => {
        console.log(err.message)
        toast.error('Something went wrong!')
      })
  }

  // Get a single course
  const getCourse = (id) => {
    fetch(`${id}`)
      .then((response) => response.json())
      .then((data) => {
        data.success ? setCourse(data.data) : console.log(data.error)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  // Clear search results
  const clearResults = () => {
    setCourseTitle('')
    setCourses([])
    setCoursesData({
      count: '',
      data: '',
      success: null,
    })
    setLoading(false)
  }

  // set an alert
  const setAlert = (msg, type) => {
    setAlertData((prevState) => ({
      ...prevState,
      type,
      msg,
    }))

    setTimeout(() => setAlertData({ type: '', msg: '' }), 3000)
  }

  return (
    <CourseContext.Provider
      value={{
        courseTitle,
        setCourseTitle,
        courses,
        coursesData,
        searchCourses,
        clearResults,
        alertData,
        setAlert,
        loading,
        getCourse,
        course,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export default CourseContext
