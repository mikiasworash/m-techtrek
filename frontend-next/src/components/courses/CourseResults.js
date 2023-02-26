import { useContext, useEffect } from 'react'
import CourseContext from '@/context/CourseContext'
import CourseItem from './CourseItem'
import Spinner from '../layout/Spinner'

export default function CourseResults() {
  const { courses, loading, coursesData, courseTitle } =
    useContext(CourseContext)
  return loading ? (
    <Spinner />
  ) : courses.length === 0 ? (
    coursesData.success === false ? (
      <div className="h-screen text-center">
        <h2 className="text-3xl my-4 font-bold">
          Sorry, we couldn't find any results for "{courseTitle}"
        </h2>
        <h3 className="text-2xl my-4 ">
          Try adjusting your search. Here are some ideas:
        </h3>
        <ul className="list-disc list-inside">
          <li>Make sure all words are spelled correctly</li>
          <li>Try different search terms or titles</li>
          <li>Try more general search titles</li>
        </ul>
      </div>
    ) : (
      ''
    )
  ) : (
    <div className="rounded-lg max-w-6xl px-5 mx-auto min-h-screen">
      <div className="text-center">
        <h2 className="text-3xl  my-4 mb-8 font-bold">
          {courses.length}
          {courses.length > 1 ? ' results for ' : ' result for '}"{courseTitle}"
        </h2>
        {courses.map((course) => (
          <CourseItem key={course._id} course={course} />
        ))}
      </div>
    </div>
  )
}
