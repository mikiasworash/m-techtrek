import Link from 'next/link'

function Testimonials() {
  return (
    //  Testimonials -
    <section id="testimonials">
      {/* Container to heading and testimonial blocks  */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What makes out bootcamp special?
        </h2>
        {/* Testimonials Container  */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1  */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Pheobe Buffay</h5>
            <p className="text-sm text-darkGrayishBlue">
              "This bootcamp was a game-changer for me. I had been struggling to
              transition to a new career, but after completing this program, I
              was able to land a job in my new field within weeks. The skills
              and confidence I gained here were invaluable."
            </p>
          </div>
          {/* Testimonial 2  */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Regina Falange</h5>
            <p className="text-sm text-darkGrayishBlue">
              "I was hesitant to enroll in a bootcamp, but this one came highly
              recommended by a friend. I'm so glad I took the plunge - I learned
              more in a few months than I did in years of trying to teach
              myself. The support and guidance from the staff was invaluable."
            </p>
          </div>
          {/* Testimonial 3  */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src="img/avatar-richard.png" className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Ken Adams</h5>
            <p className="text-sm text-darkGrayishBlue">
              "I was impressed by the quality of the instructors and the level
              of support I received throughout this bootcamp. The curriculum was
              challenging but well-structured, and the hands-on projects helped
              me to build a portfolio that I'm proud of. I would highly
              recommend this program to anyone looking to break into the tech
              industry."
            </p>
          </div>
        </div>
        {/* Button  */}
        <div className="my-16">
          <Link
            href="/register"
            className="p-3 px-6 pt-2 text-white bg-purplish rounded-full baseline hover:bg-lightPurplish"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
