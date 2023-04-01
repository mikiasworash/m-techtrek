import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Spinner from '@/components/layout/Spinner'
import avatar from '../../../public/img/course.jpg'
import Image from 'next/image'
import { toast } from 'react-toastify'
import Head from 'next/head'

function CourseDetail(props) {
  const router = useRouter()
  const { id } = router.query

  const { courseDetail } = props
  if (!courseDetail) {
    return <Spinner />
  }

  const {
    title,
    description,
    tuition,
    bootcamp: { name, website } = { name: '', website: '' },
    weeks,
    minimumSkill,
    scholarshipAvailable,
  } = courseDetail

  const handleEnrollment = (e) => {
    e.preventDefault()

    getSession().then((session) => {
      if (session) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userEmail: session.user.email,
            courseId: id,
          }),
        }

        fetch('/api/course/enrollToCourse', requestOptions)
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              toast.success('Successfully enrolled to course', {
                autoClose: 2500,
              })
            } else if (data.message == 'invalid user') {
              toast.error('User not found')
            } else {
              toast.error('Failed to enroll')
            }
          })
      } else {
        router.replace('/auth')
      }
    })
  }

  return (
    <>
      <Head>
        <title>m-TechTrek | {title}</title>
        <meta
          name="description"
          content="A bootcamp directory where you can find various courses on technology"
        />
      </Head>
      <div className="mx-auto min-h-screen w-10/12 mt-20 lg:mt-32 z-0">
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
          <button
            // href={'/auth'}
            onClick={handleEnrollment}
            className="p-3 px-6 pt-2 text-white rounded-lg bg-purplish hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-500 focus:outline-none"
          >
            Enroll
          </button>
        </div>
      </div>
    </>
  )
}

export default CourseDetail

export async function getStaticProps(context) {
  const { params } = context
  const courseId = params.id
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/courses/${courseId}`
  )
  const courseDetail = await res.json()
  if (!courseDetail.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      courseDetail: courseDetail.data,
    },
  }
}

export async function getStaticPaths() {
  const featuredTitle = 'dev'
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/courses/title/${featuredTitle}`
  )
  const coursesData = await res.json()
  const featuredCourses = coursesData.data
  const ids = featuredCourses.map((course) => course._id)
  const pathsWithParams = ids.map((id) => ({ params: { id: id } }))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}
