import { useContext, useEffect } from 'react'
import CourseContext from '../context/CourseContext'
import { useParams } from 'react-router'

function Course({ id }) {
  const params = useParams()
  const { course, getCourse } = useContext(CourseContext)
  const { title, description } = course
  useEffect(() => {
    getCourse(params.id)
    // setTimeout(() => getCourse(params.id), 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}

export default Course
