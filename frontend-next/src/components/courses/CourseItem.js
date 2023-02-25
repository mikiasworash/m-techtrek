import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import Link from 'next/link'

function CourseItem({ course }) {
  const { _id, title, description, tuition, bootcamp } = course

  return (
    <div className="w-5/6 md:w-1/2 mx-auto">
      <Link href={`/courses/${_id}`}>
        <div className="flex items-center flex-col mt-24 mb-12">
          <div className="flex flex-col items-center p-12 space-y-2 rounded-lg bg-veryLightGray hover:bg-veryPaleRed">
            <img
              src="img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
              className="w-32 -mt-20"
              alt=""
            />
            <h5 className="text-lg font-bold">{title}</h5>
            <div className="mr-2 inline-flex">
              <GiTeacher className="mr-2" /> {bootcamp.name}
            </div>
            <p className="text-sm text-darkGrayishBlue">{description}</p>
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
