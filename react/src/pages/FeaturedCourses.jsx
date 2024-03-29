import { useContext, useEffect } from 'react'
import Spinner from '../components/layout/Spinner'
import CourseItem from '../components/courses/CourseItem'
import CourseContext from '../context/CourseContext'

function UserResults() {
  const { courses, loading, searchCourses } = useContext(CourseContext)

  useEffect(() => {
    searchCourses('dev')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading ? (
    <Spinner />
  ) : (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Featured Courses</h2>
        {courses.map((course) => (
          <CourseItem key={course._id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default UserResults
