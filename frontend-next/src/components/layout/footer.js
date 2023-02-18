import { FaSchool } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-veryDarkBlue">
        {/* Flex container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto mt-32 space-y-8 lg:flex-row lg:space-y-0">
          {/*  Logo and social links container  */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start">
            <div className="mx-auto my-6 text-center text-white lg:hidden">
              Copyright &copy; 2022 All Rights Reserved!
            </div>
            {/*  Logo  */}
            <div>
              {' '}
              <FaSchool className="inline pr-2 text-3xl text-white" />
              <Link
                href={'/'}
                className="text-white text-lg font-bold align-middle"
              >
                m-bootcamp
              </Link>
            </div>
            {/*  Social Links  */}
            <div className="flex justify-center space-x-4">
              {/*  Link 1  */}
              <a href="https://www.facebook.com" target="_blank">
                <img src="img/icon-facebook.svg" alt="" className="h-8" />
              </a>
              {/*  Link 2  */}
              <a href="https://www.youtube.com" target="_blank">
                <img src="img/icon-youtube.svg" alt="" className="h-8" />
              </a>
              {/*  Link 3  */}
              <a href="https://www.twitter.com" target="_blank">
                <img src="img/icon-twitter.svg" alt="" className="h-8" />
              </a>
              {/* Link 4  */}
              <a href="https://www.pinterest.com" target="_blank">
                <img src="img/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              {/*  Link 5  */}
              <a href="https://www.instagram.com" target="_blank">
                <img src="img/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/*  List container  */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#featured-courses" className="hover:text-brightRed">
                Courses
              </a>
              <Link href="#" className="hover:text-brightRed">
                Profile
              </Link>
              <Link href="#" className="hover:text-brightRed">
                Sign In
              </Link>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link href="#" className="hover:text-brightRed">
                Sign Up
              </Link>
              <Link href="#" className="hover:text-brightRed">
                About
              </Link>
              <Link href="#" className="hover:text-brightRed">
                Contact
              </Link>
            </div>
          </div>
          {/*  Input container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 text-center rounded-full focus:outline-none"
                  placeholder="Enter email for newsletter"
                />
                <button className="px-6 py-2 text-black rounded-full bg-brightRedLight hover:bg-brightRedSupLight hover:text-purplish focus:outline-none">
                  Register
                </button>
              </div>
            </form>
            <div className="hidden text-white lg:block">
              Copyright &copy; 2023 All Rights Reserved!
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}