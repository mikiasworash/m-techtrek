import './App.css'
import { useState } from 'react'

function App() {
  const [bootcamps, setBootcamps] = useState([])
  const [bootcamp, setBootcamp] = useState([])

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
    fetch('bootcamps/5d713995b721c3bb38c1f5d0')
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
        name: 'Devcentral Bootcamp2',
        description:
          'Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in front end and full stack web development',
        website: 'https://devcentral.com',
        phone: '(444) 444-4444',
        email: 'enroll@devcentral.com',
        address: '45 Upper College Rd Kingston RI 02881',
        careers: [
          'Mobile Development',
          'Web Development',
          'Data Science',
          'Business',
        ],
        housing: false,
        jobAssistance: true,
        jobGuarantee: true,
        acceptGi: true,
        averageCost: 5000,
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

  return (
    <div className="App">
      <div>
        <button onClick={getBootcamps}>Get bootcamps</button>
      </div>
      <div>
        <button onClick={getBootcamp}>Get a single bootcamp</button>
      </div>
      <form onSubmit={createBootcamp}>
        {/* <input
          onChange={handleTextChange}
          type="text"
          placeholder="Write a review"
          value={text}
        /> */}
        <button type="submit">Create a new bootcamp</button>
      </form>
      <form onSubmit={createUser}>
        {/* <input
          onChange={handleTextChange}
          type="text"
          placeholder="Write a review"
          value={text}
        /> */}
        <button type="submit">Create a new user</button>
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

export default App
