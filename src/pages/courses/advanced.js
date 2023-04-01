import AdvancedCourses from '@/components/courses/AdvancedCourses'
import Head from 'next/head'

export default function Home({ advancedCourses }) {
  return (
    <>
      <Head>
        <title>m-TechTrek | Advanced Courses</title>
        <meta
          name="description"
          content="A bootcamp directory where you can find various courses on technology"
        />
      </Head>
      <AdvancedCourses advancedCourses={advancedCourses} />
    </>
  )
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
