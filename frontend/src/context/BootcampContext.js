import { createContext, useState } from 'react'

const BootcampContext = createContext()

export const BootcampProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)

  const [alertData, setAlertData] = useState({
    type: '',
    msg: '',
  })

  // set login true
  const logIn = async () => {
    setLoggedIn(true)
  }

  // set an alert
  const setAlert = (msg, type) => {
    setAlertData((prevState) => ({
      ...prevState,
      type,
      msg,
    }))

    setTimeout(() => setAlertData({ type: '', msg: '' }), 3000)
  }

  return (
    <BootcampContext.Provider
      value={{
        loggedIn,
        logIn,
        alertData,
        setAlert,
      }}
    >
      {children}
    </BootcampContext.Provider>
  )
}

export default BootcampContext
