import Link from 'next/link'
import Spinner from '@/components/layout/Spinner'
import avatar from '../../../public/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg'
import Image from 'next/image'

function CourseDetail(props) {
  const {
    title,
    description,
    tuition,
    bootcamp: { name, website } = { name: '', website: '' },
    weeks,
    minimumSkill,
    scholarshipAvailable,
  } = props.courseDetail.data

  if (!props.courseDetail.data) {
    return <Spinner />
  }

  return (
    <>
      <div className="mx-auto min-h-screen w-10/12 mt-6 z-0">
        <div className="mb-4">
          <Link href={'/'} className="btn btn-ghost">
            Back To Home
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <Image src={avatar} alt="" />
              </figure>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {title}
                {scholarshipAvailable ? (
                  <div className="mx-1 badge badge-info">Scholarship ✔</div>
                ) : (
                  <div className="mx-1 badge badge-info">Scholarship ❌</div>
                )}
              </h1>

              <p>By {name}</p>
              <a href={website} target="_blank" rel="noreferrer">
                <div className="italic">{website}</div>
              </a>
            </div>

            <div className="w-full rounded-lg shadow-md stats">
              {tuition && (
                <div className="stat">
                  <div className="stat-title text-md">Tuition Fee</div>
                  <div className="text-lg-stat-value">{tuition} Birr</div>
                </div>
              )}
              {weeks && (
                <div className="stat">
                  <div className="stat-title text-md">Duration</div>
                  <div className="text-lg-stat-value">{weeks} Weeks</div>
                </div>
              )}
              {minimumSkill && (
                <div className="stat">
                  <div className="stat-title text-md">Level</div>
                  <div className="text-lg-stat-value">
                    {minimumSkill.charAt(0).toUpperCase() +
                      minimumSkill.slice(1)}
                  </div>
                </div>
              )}
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {description && (
                <div className="stat">
                  <div className="stat-title text-md">Description</div>
                  <div className="text-lg-stat-value">{description}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-4 text-center">
          <Link
            href={'/register'}
            className="px-6 py-2 text-white rounded-xl bg-purplish hover:bg-greenish hover:text-black focus:outline-none"
          >
            Enroll
          </Link>
        </div>
      </div>
    </>
  )
}

export default CourseDetail

export async function getStaticProps(context) {
  const { params } = context
  const courseId = params.id
  const res = await fetch(`http://localhost:5000/courses/${courseId}`)
  const courseDetail = await res.json()

  return {
    props: {
      courseDetail,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '5d725cb9c4ded7bcb480eaa1' } }],
    fallback: true,
  }
}
