import AdvancedCourses from '@/components/courses/AdvancedCourses'

export default function Home({ advancedCourses }) {
  return <AdvancedCourses advancedCourses={advancedCourses} />
}

export async function getStaticProps() {
  const level = 'advanced'
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/courses/levels/${level}`
  )
  const coursesData = await res.json()
  const advancedCourses = coursesData.data

  return {
    props: {
      advancedCourses,
    },
    revalidate: 7200,
  }
}
