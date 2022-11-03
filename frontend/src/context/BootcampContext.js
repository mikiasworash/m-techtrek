import { createContext, useState } from 'react'

const BootcampContext = createContext()

export const BootcampProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  // login
  const logIn = async () => {
    setLoggedIn(true)
  }

  return (
    <BootcampContext.Provider
      value={{
        loggedIn,
        logIn,
      }}
    >
      {children}
    </BootcampContext.Provider>
  )
}

export default BootcampContext
