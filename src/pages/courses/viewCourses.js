import { getSession } from 'next-auth/react'
import { connectToDatabase } from '@/lib/db'
import CourseItem from '@/components/courses/CourseItem'
import Spinner from '@/components/layout/Spinner'
import Head from 'next/head'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

function viewCourses({ courses, role }) {
  if (!courses) {
    return <Spinner />
  }

  return (
    <>
      <Head>
        <title>m-TechTrek | View Courses</title>
        <meta
          name="description"
          content="A bootcamp directory where you can find various courses on technology"
        />
      </Head>
      <div id="featured-courses" className="rounded-lg max-w-6xl px-5 mx-auto">
        <div className="text-center py-24">
          <h2 className="text-4xl mb-2 font-bold">Your Courses</h2>
          <p className="font-light text-gray-500 mb-4 sm:text-xl dark:text-gray-400">
            Swipe through the courses you are currently{' '}
            {role == 'user' ? 'taking' : 'teaching'}
          </p>
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{
              '--swiper-pagination-color': 'blue',
              '--swiper-pagination-bullet-inactive-color': '#999999',
              '--swiper-pagination-bullet-inactive-opacity': '1',
            }}
          >
            {courses.map((course) => {
              return (
                <SwiperSlide key={course._id}>
                  <CourseItem key={course._id} course={course} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  } else {
    const client = await connectToDatabase()

    const usersCollection = client.db().collection('users')
    const user = await usersCollection.findOne({
      email: session.user.email,
    })
    if (!user) {
      client.close()
      return {
        redirect: {
          destination: '/profile',
          permanent: false,
        },
      }
    }

    if (user.role === 'user') {
      const courses = []
      for (const id of user.enrolledCourses) {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/courses/${id}`
        )
        const course = await response.json()
        courses.push(course.data)
      }
      client.close()
      return {
        props: {
          session,
          courses,
          role: user.role,
        },
      }
    }

    const bootcampCollections = client.db().collection('bootcamps')
    const bootcamp = await bootcampCollections.findOne({ user: user._id })

    const courses = []
    for (const id of bootcamp.associatedCourses) {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/courses/${id}`
      )
      const course = await response.json()
      courses.push(course.data)
    }
    client.close()

    return {
      props: {
        session,
        courses,
        role: user.role,
      },
    }
  }
}

export default viewCourses
