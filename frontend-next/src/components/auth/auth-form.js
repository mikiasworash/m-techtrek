import { useState, useRef } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
// import { route } from 'next/dist/next-server/server/router'
import { toast } from 'react-toastify'
import Link from 'next/link'

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

                {/* seperator  */}
                <div className="flex flex-row justify-center mb-8">
                  <span className="absolute bg-white px-4 text-gray-500">
                    or sign-in with
                  </span>
                  <div className="w-full bg-gray-200 m-3 h-px"></div>
                </div>

                {/* alternate sign-in  */}
                <div className="flex flex-row gap-2">
                  <Link
                    href={'#'}
                    className="bg-brightRedSupLight2 w-3/4 mx-auto p-2 flex flex-row justify-center gap-2 rounded-lg hover:bg-brightRedSupLight hover:cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-5"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible" />
                      </clipPath>
                      <path
                        clip-path="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      />
                    </svg>
                    Google
                  </Link>
                </div>
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
