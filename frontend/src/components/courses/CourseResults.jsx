import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import CourseItem from './CourseItem'
import CourseContext from '../../context/CourseContext'

function UserResults() {
  const { courses, loading } = useContext(CourseContext)

  return loading ? (
    <Spinner />
  ) : courses.length === 0 ? (
    ''
  ) : (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          {courses.length}
          {courses.length > 1 ? ' Courses Found' : ' Course Found'}
        </h2>
        {courses.map((course) => (
          <CourseItem key={course._id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default UserResults
