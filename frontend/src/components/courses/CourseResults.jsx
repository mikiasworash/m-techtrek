import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import CourseItem from './CourseItem'
import CourseContext from '../../context/CourseContext'

function UserResults() {
  const { courses, loading } = useContext(CourseContext)

  // Get initial sample users (testing purpose)
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {courses.map((course) => (
        <CourseItem key={course._id} course={course} />
      ))}
    </div>
  )
}

export default UserResults
