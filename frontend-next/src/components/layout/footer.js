import { FaSchool } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer class="bg-veryDarkBlue">
        {/* Flex container */}
        <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto mt-32 space-y-8 md:flex-row md:space-y-0">
          {/*  Logo and social links container  */}
          <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden">
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
            <div class="flex justify-center space-x-4">
              {/*  Link 1  */}
              <a href="#">
                <img src="img/icon-facebook.svg" alt="" class="h-8" />
              </a>
              {/*  Link 2  */}
              <a href="#">
                <img src="img/icon-youtube.svg" alt="" class="h-8" />
              </a>
              {/*  Link 3  */}
              <a href="#">
                <img src="img/icon-twitter.svg" alt="" class="h-8" />
              </a>
              {/* Link 4  */}
              <a href="#">
                <img src="img/icon-pinterest.svg" alt="" class="h-8" />
              </a>
              {/*  Link 5  */}
              <a href="#">
                <img src="img/icon-instagram.svg" alt="" class="h-8" />
              </a>
            </div>
          </div>
          {/*  List container  */}
          <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Home
              </a>
              <a href="#" class="hover:text-brightRed">
                Courses
              </a>
              <a href="#" class="hover:text-brightRed">
                Profile
              </a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Sign In
              </a>
              <a href="#" class="hover:text-brightRed">
                Sign Up
              </a>
              <a href="#" class="hover:text-brightRed">
                About Us
              </a>
            </div>
          </div>
          {/*  Input container */}
          <div class="flex flex-col justify-between">
            <form>
              <div class="flex space-x-3">
                <input
                  type="text"
                  class="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Sign Up for Newsletter"
                />
                <button class="px-6 py-2 text-white rounded-full bg-lightPurplish hover:bg-brightRedLight hover:text-purplish focus:outline-none">
                  Sign Up
                </button>
              </div>
            </form>
            <div class="hidden text-white md:block">
              Copyright &copy; 2023 All Rights Reserved!
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
