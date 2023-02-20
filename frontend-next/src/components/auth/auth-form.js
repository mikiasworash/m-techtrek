import { useState, useRef } from 'react'
// import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
// import { route } from 'next/dist/next-server/server/router'

async function createUser(email, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }

  return data
}

function AuthForm() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  async function submitHandler(e) {
    e.preventDefault()

    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (!result.error) {
        router.replace('/profile')
      }
    } else {
      try {
        const result = await createUser(email, password)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  if (isLogin)
    return (
      <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mb-40 md:mt-16 lg:py-0">
          <div class="w-full bg-veryLightGray rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#" class="text-sm font-medium hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-purplish hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500">
                  Don’t have an account yet?{' '}
                  <a
                    class="font-medium hover:underline"
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
  else
    return (
      <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:mt-8 md:mt-2 lg:py-0">
          <div class="w-full bg-veryLightGray rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="John Doe"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirmPassword"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">
                        I accept the{' '}
                        <a class="font-medium hover:underline" href="#">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-purplish hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
                <p class="text-sm font-light text-gray-500">
                  Already have an account?{' '}
                  <a
                    class="font-medium hover:underline"
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

export default AuthForm
