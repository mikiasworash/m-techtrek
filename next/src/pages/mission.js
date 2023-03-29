import Head from 'next/head'

export default function mission() {
  return (
    <>
      <Head>
        <title>m-TechTrek | Mission</title>
        <meta
          name="description"
          content="A bootcamp directory where you can find various courses on technology"
        />
      </Head>
      <div className="min-h-screen flex flex-col space-y-5 w-2/3 lg:w-1/2 mx-auto mt-16 lg:mt-20">
        <div className="text-center mx-auto flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Mission</h3>
          <p>
            Our mission at our bootcamp is to empower individuals to achieve
            their full potential by providing high-quality education and
            training. We believe that everyone should have access to the tools
            and resources they need to succeed, and we're committed to providing
            a supportive and engaging learning environment that fosters growth,
            creativity, and collaboration.
          </p>
          <p>
            We believe in the power of education to transform lives and
            communities, and we're dedicated to providing the skills and
            knowledge that our students need to succeed in today's fast-paced
            and constantly evolving economy. Our goal is to help our students
            develop the critical thinking, problem-solving, and technical skills
            that are in high demand in a wide range of industries.
          </p>
          <p>
            We also believe in the importance of diversity, equity, and
            inclusion, and we're committed to creating an inclusive and
            welcoming learning environment for everyone. We believe that our
            differences are what make us strong, and we're dedicated to
            promoting diversity and inclusion in all aspects of our work.
          </p>
          <p>
            At our bootcamp, our mission is to help our students achieve their
            dreams and build the future they want to see. We believe that
            education is the key to unlocking a world of possibilities, and
            we're committed to providing the best possible education and
            training to everyone who comes through our doors.
          </p>
        </div>

        <div className="title">
          <h1 className="font-bold text-center text-xl">Values</h1>
        </div>
        <div className="text-center mx-auto">
          <p>
            At our bootcamp, we're dedicated to providing high-quality education
            and training for anyone who wants to learn new skills and advance
            their career. Our team of experienced instructors and industry
            professionals are passionate about sharing their knowledge and
            expertise with others, and we're committed to providing a supportive
            and engaging learning environment.
          </p>
        </div>
        {/* <div className="text-center mx-auto">
     <p>
       In this page, you can read more about our mission and values, as well
       as our approach to education and training. You'll also find
       information about our team, including bios and photos of our
       instructors and staff. We're proud to have a diverse and talented team
       of professionals who are dedicated to helping our students succeed.
     </p>
   </div> */}
        <div className="text-center mx-auto">
          <p>
            Finally, we invite you to get in touch with us if you have any
            questions or would like to learn more about our bootcamp. Our team
            is always happy to answer your questions and provide more
            information about our courses and programs. We look forward to
            hearing from you!
          </p>
        </div>
      </div>
    </>
  )
}
