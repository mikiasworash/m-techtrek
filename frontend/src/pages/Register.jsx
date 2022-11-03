import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import visibilityIcon from '../components/layout/assets/visibilityIcon.svg'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { name, email, password, confirmPassword } = formData

  const [btnDisabled, setBtnDisabled] = useState(true)

  const createUser = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        role: 'user',
      }),
    }
    fetch('users', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data.success
          ? toast.success('User Registered!')
          : toast.error(data.error)
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
        toast.error('Something went wrong!')
      })
  }

  const handleTextChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))

    if (password && password === confirmPassword) {
      setBtnDisabled(false)
      console.log(password, confirmPassword)
    }
    if (password !== confirmPassword) {
      setBtnDisabled(true)
    }
  }

  return (
    <div className="bg-purple">
      <form onSubmit={createUser} className="grid place-items-center gap-4">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name *</span>
          </label>
          <input
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
              onChange={handleTextChange}
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
              onChange={handleTextChange}
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

        <button type="submit" className="btn glass" disabled={btnDisabled}>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
