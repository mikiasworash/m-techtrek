import React from 'react'
import { useState } from 'react'

function Register() {
  const [bootcamps, setBootcamps] = useState([])
  const [bootcamp, setBootcamp] = useState([])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [bootcampname, setBootcampname] = useState('')
  const [description, setDescription] = useState('')
  const [website, setWebsite] = useState('')

  const getBootcamps = (e) => {
    e.preventDefault()
    fetch('/bootcamps')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setBootcamps(data.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const getBootcamp = (e) => {
    e.preventDefault()
    fetch('bootcamps/635a3e4548b8ddd421c65421')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setBootcamp(data.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const createBootcamp = (e) => {
    e.preventDefault()
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkN2E1MTRiNWQyYzEyYzc0NDliZTA0MiIsImlhdCI6MTY2NjYxMjc0NCwiZXhwIjoxNjY5MjA0NzQ0fQ.kafabY2voGSRQwcV36ugPz8xZxiyCTGXU1eYBeF86uY'
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: bootcampname,
        description: description,
        website: website,
      }),
    }
    fetch('/bootcamps', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message)
      })
  }

  const createUser = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Mikias Worash',
        email: 'mikias@gmail.com',
        password: '123456',
        role: 'user',
      }),
    }
    fetch('auth/register', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleTextChange = (e) => {
    if (e.target.id === 'uname') {
      setName(e.target.value)
    } else if (e.target.id === 'uemail') {
      setEmail(e.target.value)
    } else if (e.target.id === 'upass') {
      setPassword(e.target.value)
    } else if (e.target.id === 'bcname') {
      setBootcampname(e.target.value)
    } else if (e.target.id === 'bcdesc') {
      setDescription(e.target.value)
    } else if (e.target.id === 'bcws') {
      setWebsite(e.target.value)
    }
  }
  return (
    <div className="bg-purple">
      <div>
        <button onClick={getBootcamps} className="btn">
          Get bootcamps
        </button>
      </div>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              What is the name of bootcamp you want to find?
            </span>
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={bootcampname}
            id="bcname"
          />
        </div>
        <button onClick={getBootcamp} className="btn">
          Get a single bootcamp
        </button>
      </form>
      <form onSubmit={createBootcamp}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your bootcamp's name?</span>
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={bootcampname}
            id="bcname"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              What is your bootcamp's description?
            </span>
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={description}
            id="bcdesc"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your bootcamp's website?</span>
          </label>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={website}
            id="bcws"
          />
        </div>

        <button type="submit" className="btn">
          Create a new bootcamp
        </button>
      </form>

      <form onSubmit={createUser}>
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="name"
          value={name}
          id="uname"
        />
        <input
          onChange={handleTextChange}
          type="email"
          placeholder="email"
          value={email}
          id="uemail"
        />
        <input
          onChange={handleTextChange}
          type="password"
          placeholder="password"
          value={password}
          id="upass"
        />
        <button type="submit" className="btn mx-auto">
          Create a new user
        </button>
      </form>

      {bootcamps.map((bootcamp) => (
        <div key={bootcamp.id}>
          <div>{bootcamp.name}</div>
          <div>{bootcamp.description}</div>
          <div>{bootcamp.website}</div>
        </div>
      ))}

      {
        <div>
          <div>{bootcamp.name}</div>
          <div>{bootcamp.website}</div>
        </div>
      }
    </div>
  )
}

export default Register
