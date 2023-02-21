import CourseItem from './CourseItem'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function FeaturedCourses({ featuredCourses }) {
  return (
    <div id="featured-courses" className="rounded-lg">
      <div className="text-center py-8 lg:py-16">
        <h2 className="text-3xl mb-2 font-bold">Featured Courses</h2>
        <p className="font-light text-gray-500 mb-4 sm:text-xl">
          Swipe and explore our exclusive courses
        </p>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {featuredCourses.map((course) => {
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
