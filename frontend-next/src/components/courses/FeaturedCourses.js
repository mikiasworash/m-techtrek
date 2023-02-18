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
      <div className="text-center">
        <h2 className="text-3xl  mt-16 mb-8 font-bold">Featured Courses</h2>
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
