import { useContext } from 'react'
import CourseContext from '@/context/CourseContext'

function Alert() {
  const { alertData } = useContext(CourseContext)

  return (
    alertData != null && (
      <div className="flex items-center mb-4">
        {alertData.type === 'error' && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3 text-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="red"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
        )}
        <p className="flex-1 font-semibold leading-7 text-black">
          <strong>{alertData.msg}</strong>
        </p>
      </div>
    )
  )
}

export default Alert
