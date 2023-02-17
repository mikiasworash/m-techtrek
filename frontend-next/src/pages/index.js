import Hero from '@/components/hero-section'
import Features from '@/components/features'
import CourseResults from '@/components/courses/CourseResults'
import CourseContext from '@/context/CourseContext'
import { useContext } from 'react'
import FeaturedCourses from '@/components/courses/FeaturedCourses'
import Testimonials from '@/components/testimonials'

export default function Home({ featuredCourses }) {
  const { courses, coursesData } = useContext(CourseContext)

  return courses.length > 0 || coursesData.success === false ? (
    <CourseResults />
  ) : (
    <>
      <Hero />
      <Features />
      <FeaturedCourses featuredCourses={featuredCourses} />
      <Testimonials />
    </>
  )
}

export async function getStaticProps() {
  const featuredTitle = 'dev'
  const res = await fetch(
    `http://localhost:5000/courses/title/${featuredTitle}`
  )
  const coursesData = await res.json()
  const featuredCourses = coursesData.data

  return {
    props: {
      featuredCourses,
    },
    revalidate: 3600,
  }
}
