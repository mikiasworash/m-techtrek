import React from 'react'
import { useRef, useState } from 'react'

function addCourse() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    weeks: '',
    tuition: '',
    minimumSkill: '',
    scholarship: '',
  })

  const { title, description, weeks, tuition, minimumSkill, scholarship } =
    formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleAddCourese = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        weeks,
        tuition,
        minimumSkill,
        scholarshipAvailable: scholarship,
        bootcamp,
        user,
      }),
    }
  }

  return (
    <div className="py-20 lg:py-20 px-4 mx-auto max-w-screen-md">
      <h2 className="text-4xl font-bold text-center mb-8">Add Course</h2>
      <form className="space-y-8 text-center" onSubmit={handleAddCourese}>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm text-left font-medium dark:text-gray-400"
          >
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter title of course"
            required
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm text-left font-medium dark:text-gray-400"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter course description"
            onChange={handleChange}
            value={description}
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="weeks"
            className="block mb-2 text-sm text-left font-medium dark:text-gray-400"
          >
            Weeks
          </label>
          <input
            type="number"
            min="1"
            id="weeks"
            name="weeks"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter average duration of course in weeks"
            required
            onChange={handleChange}
            value={weeks}
          />
        </div>

        <div>
          <label
            htmlFor="tuition"
            className="block mb-2 text-sm text-left font-medium dark:text-gray-400"
          >
            Tuition
          </label>
          <input
            type="number"
            min="1"
            id="tuition"
            name="tuition"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter Tuition Fee"
            required
            onChange={handleChange}
            value={tuition}
          />
        </div>

        <div>
          <label
            htmlFor="minimumSkill"
            className="block mb-2 text-sm text-left font-medium dark:text-gray-400"
          >
            Minimum Skill
          </label>
          <select
            id="minimumSkill"
            name="minimumSkill"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            defaultValue={'beginner'}
            required
            onChange={handleChange}
            value={minimumSkill}
          >
            <option value="beginner">Begineer</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="scholarship"
            className="block mb-2 text-sm text-left font-medium dark:text-gray-400"
          >
            Scholarship Availability
          </label>
          <select
            id="scholarship"
            name="scholarship"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            defaultValue={'available'}
            onChange={handleChange}
            value={scholarship}
          >
            <option value="available">Available</option>
            <option value="notavailable">Not Available</option>
          </select>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purplish dark:bg-primary-700 dark:hover:bg-primary-500 sm:w-fit hover:bg-primary-700"
        >
          Add Course
        </button>
      </form>
    </div>
  )
}

export default addCourse
