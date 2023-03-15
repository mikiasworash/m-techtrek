import Link from 'next/link'
import Image from 'next/image'
import { BsLinkedin } from 'react-icons/bs'

function MeetTeam() {
  return (
    <section id="meet-the-team">
      <div className="px-4 lg:px-6 py-32 lg:py-20 mx-8 lg:mx-auto max-w-screen-xl lg:w-2/3">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-bold">Our Team</h2>
          <p className="font-light text-gray-500 mb-4 sm:text-xl dark:text-gray-400">
            We're proud to have a team of individuals who are dedicated to
            providing the best possible experience for our students, and we
            believe that their expertise and passion is a key factor in our
            success.
          </p>
          <Link
            href={'/mission'}
            className="badge badge-info italic text-veryDarkBlue dark:text-gray-400"
          >
            Read our mission here
          </Link>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-veryLightGray hover:bg-veryPaleRed dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow sm:flex ">
            <div>
              <Image
                className="w-full rounded-full"
                src="/img/team/mikias2.jpg"
                alt="Mikias Worash"
                width={200}
                height={200}
              />
            </div>
            <div className="p-5 ">
              <h3 className="text-xl font-bold">
                <a href="#">Mikias W.</a>
              </h3>
              <span>MERN Stack Instructor </span>
              <p className="mt-3 mb-4 text-darkGrayishBlue dark:text-gray-300">
                Experienced MERN instructor who is dedicated to guiding students
                through the complexities of building full-stack web apps.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mikiasworash/"
                    className="text-gray-500"
                    target="_blank"
                  >
                    <BsLinkedin className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/mikiasworash"
                    className="text-gray-500"
                    target="_blank"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/mikiasworash"
                    className="text-gray-500"
                    target="_blank"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="items-center bg-veryLightGray hover:bg-veryPaleRed dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow sm:flex ">
            <div>
              <Image
                className="w-full rounded-full"
                src="/img/team/henok.jpg"
                alt="Henok Setegne"
                width={200}
                height={200}
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">
                <a href="#">Henok S.</a>
              </h3>
              <span>Data Science Instructor</span>
              <p className="mt-3 mb-4 text-darkGrayishBlue dark:text-gray-300">
                Accomplished data science instructor with a wealth of experience
                in the field, with both engaging and interactive style.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <BsLinkedin className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="items-center bg-veryLightGray hover:bg-veryPaleRed dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow sm:flex ">
            <div>
              <img
                class="w-full rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="Khalil Abdurehman"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold">
                <a href="#">Khalil A.</a>
              </h3>
              <span>Python Instructor</span>
              <p className="mt-3 mb-4 text-darkGrayishBlue dark:text-gray-300">
                Skilled and experienced instructor with extensive knowledge in
                Python programming language.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <BsLinkedin className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="items-center bg-veryLightGray hover:bg-veryPaleRed dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow sm:flex ">
            <div>
              <img
                className="w-full rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="Ismail"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold">
                <a href="#">Ismail Y.</a>
              </h3>
              <span>UI/UX & MERN Instructor</span>
              <p className="mt-3 mb-4 text-darkGrayishBlue dark:text-gray-300">
                Highly skilled UI/UX instructor who has a deep understanding of
                how to create intuitive and user-friendly interfaces.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <BsLinkedin className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500" target="_blank">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTeam
