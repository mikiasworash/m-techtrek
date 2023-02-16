import React from 'react'
import { useContext, useEffect, useState } from 'react'
import CourseContext from '@/context/CourseContext'
import CourseItem from './CourseItem'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

function FeaturedCourses() {
  const [courses, setCourses] = useState([])

  // Search for courses
  const searchCourses = async (courseTitle) => {
    await fetch(`http://localhost:5000/courses/title/${courseTitle}`)
      .then((response) => response.json())
      .then((data) => {
        data.success ? setCourses(data.data) : console.log(data.error)
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    searchCourses('dev')
  }, [])

  return (
    <div id="featured-courses" className="rounded-lg card bg-base-100">
      <div className="card-body text-center">
        <h2 className="text-3xl  mt-16 mb-8 font-bold card-title">
          Featured Courses
        </h2>
        {/* {courses.map((course) => (
          <CourseItem key={course._id} course={course} />
        ))} */}

        <Swiper
          className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
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
  )
}

export default FeaturedCourses
