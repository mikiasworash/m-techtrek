import IntermediateCourses from '@/components/courses/IntermediateCourses'
import Head from 'next/head'

export default function Home({ intermediateCourses }) {
  return (
    <>
      <Head>
        <title>m-TechTrek | Intermediate Courses</title>
        <meta
          name="description"
          content="A bootcamp directory where you can find various courses on technology"
        />
      </Head>
      <IntermediateCourses intermediateCourses={intermediateCourses} />
    </>
  )
}

export async function getStaticProps() {
  const level = 'intermediate'
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/courses/levels/${level}`
  )
  const coursesData = await res.json()
  const intermediateCourses = coursesData.data

  return {
    props: {
      intermediateCourses,
    },
    revalidate: 7200,
  }
}
