import React, { useState, useEffect } from 'react'
import { getSession } from 'next-auth/react'
import { connectToDatabase } from '@/lib/db'
import CourseItem from '@/components/courses/CourseItem'
import Spinner from '@/components/layout/Spinner'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

function viewCourses({ courses, role }) {
  const courseIds = JSON.parse(courses)
  const allCourses = []
  const [loading, setLoading] = useState(true)
  const [coursesToShow, setCoursesToShow] = useState([])

  useEffect(() => {
    async function fetchCourses() {
      for (const id of courseIds) {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/courses/${id}`
        )
        const course = await response.json()
        allCourses.push(course.data)
      }
    }

    fetchCourses().then(() => {
      setLoading(false)
      setCoursesToShow(allCourses)
      console.log(coursesToShow)
      console.log(allCourses)
    })
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div id="featured-courses" className="rounded-lg max-w-6xl px-5 mx-auto">
      <div className="text-center py-32 lg:py-20">
        <h2 className="text-4xl mb-2 font-bold">Your Courses</h2>

        {role === 'user' ? (
          <p className="font-light text-gray-500 mb-4 sm:text-xl dark:text-gray-400">
            Swipe and explore through courses you are currently taking{' '}
          </p>
        ) : (
          <p className="font-light text-gray-500 mb-4 sm:text-xl dark:text-gray-400">
            Swipe and explore through courses you are currently teaching
          </p>
        )}
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
          {coursesToShow.map((course) => {
            return (
              <SwiperSlide key={course._id}>
                <CourseItem key={course._id} course={course} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
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
      client.close()
      return {
        props: {
          session,
          courses: JSON.stringify(user.enrolledCourses),
          role: user.role,
        },
      }
    }

    const bootcampCollections = client.db().collection('bootcamps')
    const bootcamp = await bootcampCollections.findOne({ user: user._id })
    client.close()

    return {
      props: {
        session,
        courses: JSON.stringify(bootcamp.associatedCourses),
        role: user.role,
      },
    }
  }
}

export default viewCourses
