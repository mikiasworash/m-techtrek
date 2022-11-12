import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

const CourseContext = createContext()

export const CourseProvider = ({ children }) => {
  const [courseTitle, setCourseTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const [courses, setCourses] = useState([])

  const [coursesData, setCoursesData] = useState({
    count: '',
    data: '',
    succes: null,
  })

  const [alertData, setAlertData] = useState({
    type: '',
    msg: '',
  })

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

  const clearResults = () => {
    setCourseTitle('')
    setCourses([])
    setCoursesData({
      count: '',
      data: '',
      succes: null,
    })
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
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export default CourseContext
