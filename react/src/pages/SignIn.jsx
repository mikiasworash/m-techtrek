import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import visibilityIcon from '../components/layout/assets/visibilityIcon.svg'

function Register() {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const singIn = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }

    if (!email) {
      toast.error('Please add an email')
    } else if (!password) {
      toast.error('Please add a password')
    } else {
      fetch('/auth/login', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          data.success
            ? toast.success('Successfully Signed In!')
            : toast.error(data.error)
          if (data.success) {
            navigate('/')
          }
          console.log(data)
        })
        .catch((err) => {
          console.log(err.message)
          toast.error('Something went wrong!')
        })
    }
  }

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <div className="bg-purple">
      <form onSubmit={singIn} className="grid place-items-center gap-8">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email *</span>
          </label>
          <input
            onChange={handleChange}
            type="email"
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

        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Register
