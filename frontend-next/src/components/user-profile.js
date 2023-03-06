import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/Fa'
import { toast } from 'react-toastify'

function UserProfile({ user }) {
  const [uploadImageClicked, setUploadImageClicked] = useState(false)
  const profilePicture = user.profilePic

  const [imageSrc, setImageSrc] = useState(profilePicture)
  // const [uploadData, setUPloadData] = useState()

  const handleUploadState = () => {
    setUploadImageClicked((current) => !current)
  }

  const handleUpdateImageForm = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'profilepic'
    )

    const formData = new FormData()
    for (const file of fileInput.files) {
      formData.append('file', file)
    }

    formData.append('upload_preset', 'bootcamp_website_images')

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dlyd6gs9k/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setImageSrc(data.secure_url)
        fetch('/api/profile/updateProfilePic', {
          method: 'PUT',
          body: JSON.stringify({
            profilePic: data.secure_url,
            email: user.email,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              toast.success('Image Updated!')
              console.log(data)
            } else {
              toast.error('Error Uploading Image!')
            }
          })
      })

    // setUPloadData(data)

    console.log(data)
  }

  return (
    <div className="flex  justify-center mt-32 mb-96">
      <div className="w-full relative  max-w-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10 pt-4">
          <div className="relative">
            <img
              className="w-24 h-24 mb-6 rounded-full shadow-lg"
              src={
                imageSrc !== 'defaultImg' ? imageSrc : '/img/avatar-richard.png'
              }
              alt="user image"
            />
            <FaCloudUploadAlt
              className="absolute left-20 top-20 cursor-pointer h-8 w-6"
              onClick={handleUploadState}
            />
          </div>
          <h5 className="mb-1 text-xl font-medium">{user.name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </span>
          <span className="text-sm italic text-gray-500 dark:text-gray-400">
            -{user.role}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 outline-none focus:ring-blue-300 ">
              Edit Profile
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-brightRedLight dark:bg-brightRed rounded-lg hover:bg-brightRed dark:hover:bg-brightRedLight">
              Delete Account
            </button>
          </div>
        </div>

        <div className="">
          <form
            onSubmit={handleUpdateImageForm}
            id="menu"
            className={
              uploadImageClicked
                ? 'absolute left-0 bottom-0 mx-auto flex flex-col items-center w-full h-40 py-8 space-y-8 mt-4 font-bold bg-gray-100 dark:bg-gray-500 z-50'
                : 'hidden'
            }
          >
            <input
              type="file"
              id="profilepic"
              name="profilepic"
              className="ml-10 text-sm text-grey-500
              file:mr-3 file:py-1 file:px-4
              file:rounded-lg 
              file:text-sm file:font-medium
              file:bg-blue-50 file:text-blue-700
              hover:file:cursor-pointer hover:file:bg-amber-50
              hover:file:text-amber-700
              border border-solid border-gray-400"
              required
            />
            <button
              type="submit"
              onClick={handleUploadState}
              className="text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-lg px-2 py-1"
            >
              Update Photo
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
