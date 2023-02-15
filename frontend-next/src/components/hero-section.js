export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        {/* Search input for mobile mode */}
        <div class="text-center md:hidden space-x-3">
          <input
            type="text"
            class="flex-1 px-4 py-1 rounded-full text-center focus:outline-none border-2 border-gray-300"
            placeholder="Search for Course"
          />
          <button class="px-4 py-1 text-white rounded-full bg-purplish hover:bg-lightPurplish focus:outline-none">
            Go
          </button>
        </div>

        {/* Flex container  */}
        <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* Left Item  */}
          <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Unleash Your Potential with Our Bootcamp
            </h1>
            <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Transform Your Career with Our Comprehensive Bootcamp Curriculum
              Designed to Help You Unlock Your Full Potential. Enroll Now!
            </p>
            <div class="flex justify-center md:justify-start">
              <a
                href="#"
                class="p-3 px-6 pt-2 text-white bg-purplish rounded-full baseline hover:bg-lightPurplish"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image  */}
          <div class="md:w-1/2">
            <img src="img/illustration-into.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
