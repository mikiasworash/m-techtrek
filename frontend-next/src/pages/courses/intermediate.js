import IntermediateCourses from '@/components/courses/IntermediateCourses'

export default function Home({ intermediateCourses }) {
  return <IntermediateCourses intermediateCourses={intermediateCourses} />
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
