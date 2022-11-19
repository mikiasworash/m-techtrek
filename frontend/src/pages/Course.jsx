import { useContext, useEffect } from 'react'
import CourseContext from '../context/CourseContext'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import avatar from '../components/layout/assets/bram-naus-n8Qb1ZAkK88-unsplash.jpg'

function Course({ id }) {
  const params = useParams()
  const { course, getCourse, loading } = useContext(CourseContext)
  const { title, description, tuition, bootcamp, weeks, minimumSkill } = course
  useEffect(() => {
    getCourse(params.id)
    // setTimeout(() => getCourse(params.id), 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="w full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar} alt="" />
              </figure>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">{title}</h1>
              {/* <p>{bootcamp.name}</p> */}
              <div className="mt-4 card-actions">
                {/* <a
                  href={bootcamp.website}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Bootcamp Website
                </a> */}
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {tuition && (
                <div className="stat">
                  <div className="stat-title text-md">Tutition Fee</div>
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
                  <div className="stat-title text-md">Skill Level</div>
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
      </div>
    </>
  )
}

export default Course
