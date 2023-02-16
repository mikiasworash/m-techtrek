import Hero from '@/components/hero-section'
import Features from '@/components/features'
import CourseResults from '@/components/courses/CourseResults'
import CourseContext from '@/context/CourseContext'
import { useContext } from 'react'
import FeaturedCourses from '@/components/courses/FeaturedCourses'

export default function Home() {
  const { courses, coursesData } = useContext(CourseContext)

  return courses.length > 0 || coursesData.success === false ? (
    <CourseResults />
  ) : (
    <>
      <Hero />
      <Features />
      <FeaturedCourses />
    </>
  )
}
