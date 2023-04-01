import { useSession, signOut } from 'next-auth/react'
import { FaSchool } from 'react-icons/fa'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useState } from 'react'

import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'

export default function Footer() {
  const { data: session, status } = useSession()
  const [email, setEmail] = useState('')

  function logoutHandler() {
    signOut()
  }

  function handleChange(e) {
    setEmail(e.target.value)
  }

  function handleSubscribe(e) {
    e.preventDefault()

    if (!email) {
      toast.error('Please enter your email')
    } else {
      // Subsribe to newsletter to be implemented / stored on mongodb
      //for now show a thank you message
      toast.success('Thanks for subscribing.')
      setEmail('')
    }
  }

  return (
    <>
      <footer className="bg-veryDarkBlue">
        {/* Flex container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto mt-32 space-y-8 lg:flex-row lg:space-y-0">
          {/*  Logo and social links container  */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start">
            <div className="mx-auto  my-6 text-center text-white lg:hidden">
              Copyright &copy; 2022 All Rights Reserved!
            </div>
            {/*  Logo  */}
            <div>
              {' '}
              <FaSchool className="inline pr-2 text-3xl text-white" />
              <Link
                href={'/'}
                className="text-white text-2xl font-bold align-middle"
              >
                m-TechTrek
              </Link>
            </div>
            {/*  Social Links  */}
            <div className="flex justify-center space-x-4">
              {/*  Link 1  */}
              <a href="https://www.linkedin.com" target="_blank">
                <BsLinkedin className="h-6 w-6 text-white" />
              </a>
              {/*  Link 2  */}
              <a href="https://www.twitter.com" target="_blank">
                <BsTwitter className="h-6 w-6 text-white" />
              </a>
              {/*  Link 3  */}
              <a href="https://www.github.com" target="_blank">
                <BsGithub className="h-6 w-6 text-white" />
              </a>
              {/* Link 4  */}
              <a href="https://www.telegram.com" target="_blank">
                <BsTelegram className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
          {/*  List container  */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#featured-courses" className="hover:text-brightRed">
                Courses
              </a>
              <a
                href="https://blog-teal-alpha.vercel.app/"
                target="_blank"
                className="hover:text-brightRed"
              >
                Blog
              </a>
              {session && status === 'authenticated' && (
                <Link href="/profile" className="hover:text-brightRed">
                  Profile
                </Link>
              )}
              {!session && (
                <Link href="/auth" className="hover:text-brightRed">
                  Log In
                </Link>
              )}
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link href="/#meet-the-team" className="hover:text-brightRed">
                About
              </Link>
              <Link href="/#contact" className="hover:text-brightRed">
                Contact
              </Link>
              {session && (
                <button
                  onClick={logoutHandler}
                  className="text-brightRedLight hover:text-brightRed"
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
          {/*  Input container */}
          <div className="flex flex-col justify-between space-y-4">
            <h3 className="text-white sm:text-xl font-semibold text-center">
              Subscribe to our newsletter.
            </h3>
            <form onSubmit={handleSubscribe}>
              <div className="flex space-x-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="flex-1 px-4 text-center rounded-lg focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400"
                  placeholder="Enter your email"
                  value={email}
                />
                <button
                  type="submit"
                  className="px-6 py-2  rounded-full bg-primary-700 font-semibold  text-white  hover:bg-primary-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="hidden text-white text-center lg:block">
              Copyright &copy; 2023 All Rights Reserved!
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
