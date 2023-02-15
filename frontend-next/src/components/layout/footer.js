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
                E-Learning Platform
              </Link>
            </div>
            {/*  Social Links  */}
            <div className="flex justify-center space-x-4">
              {/*  Link 1  */}
              <a href="#">
                <img src="img/icon-facebook.svg" alt="" className="h-8" />
              </a>
              {/*  Link 2  */}
              <a href="#">
                <img src="img/icon-youtube.svg" alt="" className="h-8" />
              </a>
              {/*  Link 3  */}
              <a href="#">
                <img src="img/icon-twitter.svg" alt="" className="h-8" />
              </a>
              {/* Link 4  */}
              <a href="#">
                <img src="img/icon-pinterest.svg" alt="" className="h-8" />
              </a>
              {/*  Link 5  */}
              <a href="#">
                <img src="img/icon-instagram.svg" alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/*  List container  */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Courses
              </a>
              <a href="#" className="hover:text-brightRed">
                Profile
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Sign In
              </a>
              <a href="#" className="hover:text-brightRed">
                Sign Up
              </a>
              <a href="#" className="hover:text-brightRed">
                About Us
              </a>
            </div>
          </div>
          {/*  Input container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 text-center rounded-full focus:outline-none"
                  placeholder="Enter Email for Newsletter"
                />
                <button className="px-6 py-2 text-white rounded-full bg-lightPurplish hover:bg-brightRedLight hover:text-purplish focus:outline-none">
                  Go
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
