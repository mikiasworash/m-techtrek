import Hero from '@/components/hero-section'
import Features from '@/components/features'
import CourseResults from '@/components/courses/CourseResults'
import CourseContext from '@/context/CourseContext'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { courses, loading, coursesData } = useContext(CourseContext)

  return courses.length > 0 || coursesData.success === false ? (
    <CourseResults />
  ) : (
    <>
      <Hero />
      <Features />
    </>
  )
}
