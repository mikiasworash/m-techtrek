import React from 'react'
import { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import BootcampContext from '../context/BootcampContext'
import visibilityIcon from '../components/layout/assets/visibilityIcon.svg'

function Register() {
  const { logIn } = useContext(BootcampContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { name, email, password, confirmPassword } = formData

  const navigate = useNavigate()

  const createUser = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
        role: 'user',
      }),
    }
    fetch('auth/register', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data.success
          ? toast.success('User Registered!')
          : toast.error(data.error)
        if (data.success) {
          logIn()
          navigate('/')
        }
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
        toast.error('Something went wrong!')
      })
  }

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="bg-purple">
      <form onSubmit={createUser} className="grid place-items-center gap-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name *</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={name}
            id="name"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email *</span>
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={email}
            id="email"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password *</span>
          </label>
          <div className="passwordInputDiv">
            <input
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              className="input input-bordered w-full max-w-xs"
              value={password}
              id="password"
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Confirm Password *</span>
          </label>
          <div className="passwordInputDiv">
            <input
              onChange={handleChange}
              type={showConfirmPassword ? 'text' : 'password'}
              className="input input-bordered w-full max-w-xs"
              value={confirmPassword}
              id="confirmPassword"
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowConfirmPassword((prevState) => !prevState)}
            />
          </div>
        </div>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
