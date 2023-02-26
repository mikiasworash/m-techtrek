import { useState, useRef } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
// import { route } from 'next/dist/next-server/server/router'
import { toast } from 'react-toastify'

async function createUser(name, email, password, confirmPassword) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password, confirmPassword }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    toast.error('Sorry! Something went wrong. Try again later!')
    throw new Error(data.message || 'Something went wrong!')
  }

  return data
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  const [formData, setFormData] = useState({
    name: '',
    emailIn: '',
    emailUp: '',
    passwordIn: '',
    passwordUp: '',
    confirmPassword: '',
  })
  const { name, emailIn, emailUp, passwordIn, passwordUp, confirmPassword } =
    formData

  const [showPasswordIn, setShowPasswordIn] = useState(false)
  const [showPasswordUp, setShowPasswordUp] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const nameInputRef = useRef()
  const loginEmailInputRef = useRef()
  const signUpEmailInputRef = useRef()
  const loginPasswordInputRef = useRef()
  const SignUpPasswordInputRef = useRef()
  const ConfirmPasswordInputRef = useRef()

  const router = useRouter()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  async function submitHandler(e) {
    e.preventDefault()

    if (isLogin) {
      const Loginemail = loginEmailInputRef.current.value
      const Loginpassword = loginPasswordInputRef.current.value

      const result = await signIn('credentials', {
        redirect: false,
        Loginemail,
        Loginpassword,
      })

      if (!result.error) {
        toast.success('Login Success!')
        router.replace('/profile')
      } else {
        toast.error('Login Error! Wrong Credentials!')
      }
    } else {
      const name = nameInputRef.current.value
      const SignUpemail = signUpEmailInputRef.current.value
      const SignUpPassword = SignUpPasswordInputRef.current.value
      const confirmPassword = ConfirmPasswordInputRef.current.value
      try {
        const result = await createUser(
          name,
          SignUpemail,
          SignUpPassword,
          confirmPassword
        )
        console.log(result)
        toast.success('User Created!')
        switchAuthModeHandler()
      } catch (error) {
        if (error.message == 'empty name or email') {
          toast.error('Invalid Input! Please insert name & email.')
        } else if (error.message == 'invalid email') {
          toast.error('Invalid Input! Please insert a valid email.')
        } else if (error.message == 'password too short') {
          toast.error(
            'Invalid Input! Password must be at least 6 characters long.'
          )
        } else if (error.message == 'password mismatch') {
          toast.error('Invalid Input! Passwords must match.')
        } else if (error.message == 'User already exists!') {
          toast.error('Invalid Input! User already exists with that email.')
        }
        console.log(error)
      }
    }
  }

  if (isLogin) {
    return (
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mb-40 mt-16">
          <div className="w-full bg-veryLightGray rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailIn"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                    ref={loginEmailInputRef}
                    onChange={handleChange}
                    value={emailIn}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type={showPasswordIn ? 'text' : 'password'}
                    name="password"
                    id="passwordIn"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    ref={loginPasswordInputRef}
                    onChange={handleChange}
                    value={passwordIn}
                  />
                  <img
                    src="img/visibilityIcon.svg"
                    alt="Show password"
                    className="showPassword"
                    onClick={() => setShowPasswordIn((prevState) => !prevState)}
                  />
                </div>
                <div className="flex justify-end">
                  {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div> */}
                  <a href="#" className="text-sm  font-medium hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purplish hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don't have an account yet?{' '}
                  <a
                    className="font-medium hover:underline"
                    onClick={switchAuthModeHandler}
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-16">
          <div className="w-full bg-veryLightGray rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="John Doe"
                    required=""
                    ref={nameInputRef}
                    onChange={handleChange}
                    value={name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailUp"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                    ref={signUpEmailInputRef}
                    onChange={handleChange}
                    value={emailUp}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type={showPasswordUp ? 'text' : 'password'}
                    name="password"
                    id="passwordUp"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    ref={SignUpPasswordInputRef}
                    onChange={handleChange}
                    value={passwordUp}
                  />
                  <img
                    src="img/visibilityIcon.svg"
                    alt="Show password"
                    className="showPassword"
                    onClick={() => setShowPasswordUp((prevState) => !prevState)}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    ref={ConfirmPasswordInputRef}
                    onChange={handleChange}
                    value={confirmPassword}
                  />
                  <img
                    src="img/visibilityIcon.svg"
                    alt="Show password"
                    className="showPassword"
                    onClick={() =>
                      setShowConfirmPassword((prevState) => !prevState)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        I accept the{' '}
                        <a
                          className="font-medium hover:underline"
                          href="/terms-and-conditions"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purplish hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{' '}
                  <a
                    className="font-medium hover:underline"
                    onClick={switchAuthModeHandler}
                  >
                    Log In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AuthForm
