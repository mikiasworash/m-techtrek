import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/Fa'
import { toast } from 'react-toastify'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

function UserProfile({ user }) {
  const profilePicture = user.profilePic
  const [imageSrc, setImageSrc] = useState(profilePicture)

  const [uploadImageClicked, setUploadImageClicked] = useState(false)
  const [editProfileClicked, setEditProfileClicked] = useState(false)
  const [deleteProfileClicked, setDeleteProfileClicked] = useState(false)
  const [nameVisible, setNameVisible] = useState(user.name)
  const [emailVisible, setEmailVisible] = useState(user.email)

  const [editForm, setEditForm] = useState({
    name: user.name,
    email: user.email,
  })

  const { name, email } = editForm

  const handleChange = (e) => {
    setEditForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleUploadState = () => {
    setUploadImageClicked((current) => !current)
  }

  const handleEditState = () => {
    setEditProfileClicked((current) => !current)
  }

  const handleDeleteState = () => {
    setDeleteProfileClicked((current) => !current)
  }

  const handleEditProfile = async (event) => {
    event.preventDefault()

    if (name !== user.name || email !== user.email) {
      fetch('/api/profile/editProfile', {
        method: 'PUT',
        body: JSON.stringify({
          name: name,
          newEmail: email,
          email: user.email,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success('Profile Updated!')
            setNameVisible(name)
            setEmailVisible(email)
            if (email !== user.email) {
              toast.success(
                'Email Updated, You will be logged out in a momoment! Sign in with your new email.'
              )
              setTimeout(() => {
                signOut()
              }, 4000)
            }
          } else {
            toast.error('Error Updating Profile!')
          }
        })
        .catch((err) => {
          toast.error('Error Updating.')
          console.log(err)
        })
    }
  }

  const handleDeleteProfile = async (event) => {
    event.preventDefault()
    fetch('/api/profile/deleteProfile', {
      method: 'DELETE',
      body: JSON.stringify({
        email: user.email,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success('Profile deleted! You will be logged out in a moment!')
          setTimeout(() => {
            signOut()
          }, 4000)
        } else {
          toast.error('Error Deleting Profile!')
        }
      })
      .catch((err) => {
        toast.error('Error Deleting Profile!')
        console.log(err)
      })
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

    fetch('https://api.cloudinary.com/v1_1/dlyd6gs9k/image/upload', {
      method: 'POST',
      body: formData,
    })
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
            if (data.success) {
              toast.success('Image Updated!')
            } else {
              toast.error('Error Uploading Image!')
            }
          })
      })
  }

  return (
    <div className="flex  justify-center mt-32 mb-96">
      <div className="w-full relative  max-w-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10 pt-4">
          <div className="relative">
            <img
              className="w-24 h-24 mb-6 rounded-full shadow-lg"
              src={imageSrc !== 'defaultImg' ? imageSrc : '/img/user.png'}
              alt="user image"
            />
            <FaCloudUploadAlt
              className="absolute left-20 top-20 cursor-pointer h-8 w-6"
              onClick={handleUploadState}
            />
          </div>
          <h5 className="mb-1 text-xl font-medium">{nameVisible}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {emailVisible}
          </span>
          <span className="text-sm italic text-gray-500 dark:text-gray-400">
            -{user.role}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              onClick={handleEditState}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 outline-none focus:ring-blue-300 "
            >
              Edit Profile
            </button>
            <button
              onClick={handleDeleteState}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-brightRedLight dark:bg-brightRed rounded-lg hover:bg-brightRed dark:hover:bg-brightRedLight"
            >
              Delete Account
            </button>
          </div>
          {user.role === 'teacher' && (
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                href={'/courses/addCourse'}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg outline-none focus:ring-blue-300 "
              >
                Add Courses
              </Link>
              <Link
                href={'/courses/viewCourses'}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-blue-700 hover:bg-blue-800 rounded-lg"
              >
                View Courses
              </Link>
            </div>
          )}

          {user.role === 'user' && (
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                href={'/courses/viewCourses'}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-blue-700 hover:bg-blue-800 rounded-lg"
              >
                View Courses
              </Link>
            </div>
          )}
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

        <div className="">
          <form
            onSubmit={handleEditProfile}
            id="menu"
            className={
              editProfileClicked
                ? 'absolute left-0 -bottom-56 mx-auto flex flex-col items-center w-full h-56 py-8 space-y-2 mt-4 font-bold bg-gray-100 dark:bg-gray-500 z-50'
                : 'hidden'
            }
          >
            <label>Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="text-sm px-4 text-gray-700
              border border-solid border-gray-400 dark:bg-gray-100"
              required
            />

            <label>Your email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="text-sm px-4 text-gray-700
              border border-solid border-gray-400 dark:bg-gray-100"
              required
            />
            <button
              type="submit"
              onClick={handleEditState}
              className="text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-lg px-2 py-2"
            >
              Apply Edit
            </button>
          </form>
        </div>

        <div className="">
          <form
            onSubmit={handleDeleteProfile}
            id="menu"
            className={
              deleteProfileClicked
                ? 'absolute left-0 -bottom-40 mx-auto flex flex-col items-center w-full h-40 py-8 space-y-2 mt-4 font-bold bg-gray-100 dark:bg-gray-500 z-50'
                : 'hidden'
            }
          >
            <label className="">Are you sure?</label>

            <p
              onClick={handleDeleteState}
              className="text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-lg px-2 py-1"
            >
              NO, Go Back!
            </p>
            <button
              type="submit"
              onClick={handleDeleteState}
              className="text-white bg-brightRedLight dark:bg-brightRed rounded-lg hover:bg-brightRed dark:hover:bg-brightRedLight font-medium  px-2 py-1"
            >
              Yes, Delete!
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
