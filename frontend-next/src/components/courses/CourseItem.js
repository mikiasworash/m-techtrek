import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { GiLevelEndFlag } from 'react-icons/gi'
import Link from 'next/link'
import Image from 'next/image'
import courseImage from '../../../public/img/course.jpg'

function CourseItem({ course }) {
  const { _id, title, description, tuition, bootcamp, minimumSkill } = course

  return (
    <div className="w-5/6 md:w-1/2 mx-auto">
      <Link href={`/courses/${_id}`}>
        <div className="flex items-center flex-col mt-24 mb-12">
          <div className="flex flex-col items-center p-12 space-y-2 rounded-lg bg-veryLightGray hover:bg-veryPaleRed dark:bg-gray-700 dark:hover:bg-gray-600">
            {/* <img
              src="img/course.jpg"
              className="w-32 -mt-20 rounded-lg"
              alt="course image"
            /> */}
            <Image
              src={courseImage}
              className="w-32 -mt-20 rounded-lg"
              alt="course image"
            />
            <h5 className="text-lg font-bold">{title}</h5>
            <div className="mr-2 inline-flex">
              <GiTeacher className="mr-2 mt-1" /> {bootcamp.name}
            </div>
            <p className="text-sm text-darkGrayishBlue dark:text-gray-200">
              {description}
            </p>
            <div className="mr-2 inline-flex">
              <GiLevelEndFlag className="mr-2 mt-1 " /> {minimumSkill}
            </div>
            <div className="mr-2 inline-flex">
              <FaDollarSign className="mt-1" /> {tuition}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CourseItem
