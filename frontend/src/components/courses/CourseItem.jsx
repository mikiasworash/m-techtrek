import React from 'react'
import {
  FaDollarSign,
  FaChalkboardTeacher,
  FaRegCalendarCheck,
} from 'react-icons/fa'

import { SiGooglescholar } from 'react-icons/si'
import { GiLevelEndFlag, GiTeacher } from 'react-icons/gi'

function CourseItem({ course }) {
  const {
    title,
    description,
    minimumSkill,
    tuition,
    scholarshipAvailable,
    bootcamp,
    weeks,
  } = course

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href="/course" target="_blank" rel="noreferrer">
            <FaChalkboardTeacher className="inline mr-1" /> {title}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <GiTeacher className="mr-2" /> {bootcamp.name}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaDollarSign className="mr-2" />
            {tuition}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <SiGooglescholar className="mr-2" />
            {scholarshipAvailable ? 'Yes' : 'No'}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <GiLevelEndFlag className="mr-2" />{' '}
            {minimumSkill.charAt(0).toUpperCase() + minimumSkill.slice(1)}
          </div>
          <div className="mr-2 badge badge-primary badge-lg">
            <FaRegCalendarCheck className="mr-2" /> {weeks} Weeks
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseItem
