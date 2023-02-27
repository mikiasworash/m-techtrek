import Image from 'next/image'
import bootcampImage from '../../public/img/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="hero bg-[url('../../public/img/bg-tablet-pattern.svg')] bg-no-repeat bg-left dark:bg-[url('')]"
      >
        {/* Flex container  */}
        <div className="container  flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 lg:flex-row ">
          {/* Left Item  */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-40 lg:mt-24">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl lg:text-left">
              Unleash Your Potential with Our Platform
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue dark:text-gray-400 md:text-left">
              Transform Your Career with Our Comprehensive Bootcamp Curriculum
              Designed to Help You Unlock Your Full Potential. Enroll Now!
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/auth"
                className="p-3 px-6 pt-2 text-white bg-purplish rounded-lg baseline hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-500"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image for bootcamp  */}
          <div className="hidden lg:flex flex-col lg:w-1/2 items-center ">
            <Image
              src={bootcampImage}
              alt="bootcamp img"
              width={680}
              className="rounded-3xl mb-24 mt-24"
            />
          </div>
        </div>
      </section>
    </>
  )
}
