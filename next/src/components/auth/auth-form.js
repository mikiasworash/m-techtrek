import { useState, useRef } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
// import { route } from 'next/dist/next-server/server/router'
import { toast } from 'react-toastify'
import Link from 'next/link'

function AuthForm() {
  const { data: session } = useSession()
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

  const [selectedAccountType, setSelectedAccountType] = useState('user')

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
  const AcceptTermsRef = useRef()

  const router = useRouter()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  async function handleGoogleAuth() {
    signIn('google')
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
      const acceptTerms = AcceptTermsRef.current.checked

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email: SignUpemail,
          password: SignUpPassword,
          confirmPassword: confirmPassword,
          role: selectedAccountType,
        }),
      }

      if (!name) {
        toast.error('Please add a name')
      } else if (!SignUpemail) {
        toast.error('Please add an email')
      } else if (!SignUpPassword) {
        toast.error('Please add a password')
      } else if (SignUpPassword.trim().length < 6) {
        toast.error('Password must at least 6 characters')
      } else if (!confirmPassword) {
        toast.error('Please confirm your password')
      } else if (SignUpPassword != confirmPassword) {
        toast.error('Passwords must match')
      } else if (!acceptTerms) {
        toast.error('Please read and accept our terms and conditions')
      } else {
        fetch(
          `${process.env.REACT_APP_SERVER_URL}/auth/register`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              toast.success('User Registered!')
              setFormData({
                name: '',
                emailIn: '',
                emailUp: '',
                passwordIn: '',
                passwordUp: '',
                confirmPassword: '',
              })
              switchAuthModeHandler()
              setSelectedAccountType('user')
            } else {
              toast.err(data.error)
            }
            console.log(data)
          })
          .catch((err) => {
            console.log(err.message)
            toast.error('Something went wrong!')
          })
      }
    }
  }

  if (isLogin) {
    return (
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mb-40 mt-16">
          <div className="w-full bg-veryLightGray dark:bg-gray-700 dark:border-gray-700 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl pb-4 font-bold leading-tight tracking-tight md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailIn"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    // placeholder="name@company.com"
                    required=""
                    ref={loginEmailInputRef}
                    onChange={handleChange}
                    value={emailIn}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium "
                  >
                    Password
                  </label>
                  <input
                    type={showPasswordIn ? 'text' : 'password'}
                    name="password"
                    id="passwordIn"
                    // placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
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
                  <span className="absolute bg-white dark:bg-gray-300 dark:text-black px-4 text-gray-500">
                    or sign-in with
                  </span>
                  <div className="w-full bg-gray-200 m-3 h-px"></div>
                </div>

                {/* alternate sign-in  */}
                <div className="flex flex-row gap-2">
                  <button
                    onClick={handleGoogleAuth}
                    className="bg-brightRedSupLight2 dark:text-black dark:bg-gray-400 dark:hover:bg-gray-500 w-3/4 mx-auto p-2 flex flex-row justify-center gap-2 rounded-lg hover:bg-brightRedSupLight hover:cursor-pointer"
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
                        clipPath="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      />
                      <path
                        clipPath="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      />
                    </svg>
                    Google
                  </button>
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
          <div className="w-full bg-veryLightGray dark:bg-gray-700 dark:border-gray-700  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl pb-4 font-bold leading-tight tracking-tight  md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium "
                  >
                    Your full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    // placeholder="John Doe"
                    required=""
                    ref={nameInputRef}
                    onChange={handleChange}
                    value={name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailUp"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    // placeholder="name@company.com"
                    required=""
                    ref={signUpEmailInputRef}
                    onChange={handleChange}
                    value={emailUp}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium "
                  >
                    Password
                  </label>
                  <input
                    type={showPasswordUp ? 'text' : 'password'}
                    name="password"
                    id="passwordUp"
                    // placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                    className="block mb-2 text-sm font-medium "
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    id="confirmPassword"
                    // placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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

                <div className="flex justify-between">
                  <label class="block mt-2 mb-2 text-sm font-medium">
                    Account Type
                  </label>
                  <ul class="w-56 text-sm flex font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="list-radio-license"
                          type="radio"
                          value="user"
                          onChange={(e) =>
                            setSelectedAccountType(e.target.value)
                          }
                          name="list-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="list-radio-license"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Student{' '}
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="list-radio-id"
                          type="radio"
                          value="publisher"
                          onChange={(e) =>
                            setSelectedAccountType(e.target.value)
                          }
                          name="list-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="list-radio-id"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                          Teacher
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="acceptTerms"
                        aria-describedby="acceptTerms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                        ref={AcceptTermsRef}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="acceptTerms"
                        className="text-gray-500 dark:text-gray-400"
                      >
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
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
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
