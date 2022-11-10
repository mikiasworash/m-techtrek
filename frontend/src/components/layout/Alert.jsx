import { useContext } from 'react'
import BootcampContext from '../../context/BootcampContext'

function Alert() {
  const { alertData } = useContext(BootcampContext)

  return (
    alertData != null && (
      <div className="flex items-start mb-4 space-x-2">
        {alertData.type === 'error' && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3"
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
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alertData.msg}</strong>
        </p>
      </div>
    )
  )
}

export default Alert
