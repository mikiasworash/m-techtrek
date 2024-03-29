export default function Features() {
  return (
    <>
      {/* Features */}
      <section id="features">
        {/* Flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* What's different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's Different about our bootcamp?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue dark:text-gray-400 md:text-left">
              Our bootcamp is designed for real-world success, with personalized
              attention, project-based learning, and industry-expert
              instructors.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/#featured-courses"
                className="p-3 px-6 pt-2 text-white bg-purplish rounded-lg baseline hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-500"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading  */}
              <div className="rounded-l-full bg-brightRedSupLight dark:bg-gray-300  dark:md:bg-slate-800 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-purplish dark:bg-gray-500">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden dark:text-gray-800">
                    Personalized Attention
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold  md:block">
                  Personalized Attention
                </h3>
                <p className="text-darkGrayishBlue dark:text-gray-400">
                  Our bootcamp is designed to provide individualized attention
                  to each student. From day one, you'll work with our
                  experienced instructors and support staff to identify your
                  strengths and weaknesses and create a personalized plan for
                  success.
                </p>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading  */}
              <div className="rounded-l-full bg-brightRedSupLight dark:bg-gray-300  dark:md:bg-slate-800  md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-purplish dark:bg-gray-500">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden dark:text-gray-800">
                    Project-Based Learning
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Project-Based Learning
                </h3>
                <p className="text-darkGrayishBlue dark:text-gray-400">
                  At our bootcamp, we believe that the best way to learn is by
                  doing. That's why our curriculum is centered around
                  project-based learning, which enables you to apply the
                  concepts you learn to real-world scenarios.
                </p>
              </div>
            </div>

            {/* List Item 3  */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading  */}
              <div className="rounded-l-full bg-brightRedSupLight dark:bg-gray-300 dark:md:bg-slate-800 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-purplish dark:bg-gray-500">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden dark:text-gray-800">
                    Industry-Expert Instructors
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Industry-Expert Instructors
                </h3>
                <p className="text-darkGrayishBlue dark:text-gray-400">
                  Our instructors are industry experts with years of experience
                  working in their respective fields. They bring a wealth of
                  knowledge and practical insights into the latest trends and
                  best practices, and are committed to helping you develop the
                  skills and knowledge you need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
