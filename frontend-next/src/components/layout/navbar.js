import { FaSchool } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav class="relative container mx-auto p-6">
        {/* Flex Container */}
        <div class="flex items-center justify-between">
          {/*  Logo */}
          <div>
            {' '}
            <FaSchool className="inline pr-2 text-3xl" />
            <Link href={'/'} className="text-lg font-bold align-middle">
              E-Learning Platform
            </Link>
          </div>
          {/* <Link href={'/'} class="pt-2">
            <img src="" alt="m-bootcamp" />
          </Link> */}
          {/*  Menu Items*/}
          <div class="hidden md:flex space-x-6">
            <a href="#" class="hover:text-darkGrayishBlue">
              Courses
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Profile
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Sign In
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Sign Up
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              About Us
            </a>
          </div>
          {/* Button  */}
          <div class="hidden md:flex space-x-3">
            <input
              type="text"
              class="flex-1 px-3 rounded-full text-center focus:outline-none border-2 border-gray-300"
              placeholder="Search for Course"
            />
            <button class="px-6 py-2 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none">
              Go
            </button>
          </div>
          {/*  Hamburger Icon  */}
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
        {/*  Mobile Menu  */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    </>
  )
}
