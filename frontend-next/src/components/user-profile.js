import React from 'react'

function UserProfile({ user }) {
  return (
    <div className="flex justify-center mt-16 mb-96">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10 pt-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="/img/avatar-richard.png"
            alt="user image"
          />
          <h5 className="mb-1 text-xl font-medium">{user.name}</h5>
          <span className="text-sm text-gray-500 ">{user.email}</span>
          <span className="text-sm text-gray-500 ">{user.role}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Edit Profile
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-brightRedLight border rounded-lg hover:bg-brightRed">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
