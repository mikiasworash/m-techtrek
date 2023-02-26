import React from 'react'

function Contact() {
  return (
    <div>
      <section id="contact">
        <div class="py-32 lg:py-20 px-4 mx-auto max-w-screen-md">
          <h2 class="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Our team is here to answer your questions, provide support and
            guidance, and help you get started on the path to achieving your
            goals. Send us a message!
          </p>
          <form action="#" class="space-y-8 text-center">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm text-left font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm text-left font-medium "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm text-left font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purplish sm:w-fit hover:bg-primary-700"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
