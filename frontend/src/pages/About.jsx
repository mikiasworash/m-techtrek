import React from 'react'

function About() {
  return (
    <div className="grid place-items-center gap-6">
      <h1 className="text-6xl mb-4">E-Learning Platform</h1>
      <p className="mb-4 text-2xl font-light">
        A bootcamps directory where users can search and register for courses.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Owner:
        <a
          className="text-white"
          href="https://twitter.com/mikiasworash"
          target="_blank"
          rel="noreferrer"
        >
          Mikias Worash
        </a>
      </p>
    </div>
  )
}

export default About
