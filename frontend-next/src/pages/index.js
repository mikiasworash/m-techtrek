import Hero from '@/components/hero-section'
import Features from '@/components/features'
import CourseResults from '@/components/courses/CourseResults'
import CourseContext from '@/context/CourseContext'
import { useContext } from 'react'
import FeaturedCourses from '@/components/courses/FeaturedCourses'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import MeetTeam from '@/components/meet-the-team'
import CourseLevels from '@/components/courses/CourseLevels'

export default function Home({ featuredCourses }) {
  const { courses, coursesData } = useContext(CourseContext)

  return courses.length > 0 || coursesData.success === false ? (
    <CourseResults />
  ) : (
    <>
      <Hero />
      <Features />
      <CourseLevels />
      <FeaturedCourses featuredCourses={featuredCourses} />
      <Testimonials />
      <MeetTeam />
      <Contact />
    </>
  )
}

export async function getStaticProps() {
  const featuredTitle = 'dev'
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/courses/title/${featuredTitle}`
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
