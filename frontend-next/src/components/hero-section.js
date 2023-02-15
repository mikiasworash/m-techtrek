export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        {/* Flex container  */}
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* Left Item  */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Unleash Your Potential with Our Bootcamp
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Transform Your Career with Our Comprehensive Bootcamp Curriculum
              Designed to Help You Unlock Your Full Potential. Enroll Now!
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-purplish rounded-full baseline hover:bg-lightPurplish"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image for bootcamp  */}
          <div className="md:w-1/2">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
