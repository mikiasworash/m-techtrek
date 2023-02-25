import React from 'react'
import Link from 'next/link'

function CourseLevels() {
  return (
    <div
      id="course_levels"
      className="rounded-lg max-w-6xl px-16 md:px-5 mx-auto"
    >
      <div className="text-center py-8 lg:py-16">
        <h2 className="text-4xl mb-2 font-bold">Learning Path</h2>
        <p className="font-light text-gray-500 mb-4 sm:text-xl">
          Discover Your Learning Level: Explore Our Bootcamp Options
        </p>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Beginner */}
          <Link
            href={'/courses/beginner'}
            className="flex flex-col items-center p-2 space-y-6 rounded-lg bg-veryLightGray hover:bg-veryPaleRed md:w-1/3"
          >
            <img src="img/beginner.jpg" className="w-ful mt-2" alt="" />
            <h5 className="text-lg font-bold pb-6 bor">Beginner ⭐</h5>
          </Link>
          {/* Intermediate */}
          <Link
            href={'/courses/intermediate'}
            className="flex flex-col items-center p-2 space-y-6 rounded-lg bg-veryLightGray hover:bg-veryPaleRed md:w-1/3"
          >
            <img src="img/intermediate.jpg" className="w-ful mt-2" alt="" />
            <h5 className="text-lg font-bold pb-6">Intermediate ⭐⭐</h5>
          </Link>
          {/* Advanced */}
          <Link
            href={'/courses/advanced'}
            className="flex flex-col items-center p-2 space-y-6 rounded-lg bg-veryLightGray hover:bg-veryPaleRed md:w-1/3"
          >
            <img src="img/advanced.jpg" className="w-ful mt-2" alt="" />
            <h5 className="text-lg font-bold pb-6">Advanced ⭐⭐⭐</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseLevels
