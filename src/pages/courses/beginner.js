import BeginnerCourses from '@/components/courses/BeginnerCourses'
import Head from 'next/head'

export default function Home({ beginnerCourses }) {
  return (
    <>
      <Head>
        <title>m-TechTrek | Beginner Courses</title>
        <meta
          name="description"
          content="A bootcamp directory where you can find various courses on technology"
        />
      </Head>
      <BeginnerCourses beginnerCourses={beginnerCourses} />
    </>
  )
}

export async function getStaticProps() {
  const level = 'beginner'
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/courses/levels/${level}`
  )
  const coursesData = await res.json()
  const beginnerCourses = coursesData.data

  return {
    props: {
      beginnerCourses,
    },
    revalidate: 7200,
  }
}
