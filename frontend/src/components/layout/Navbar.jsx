import { useContext } from 'react'
import { FaSchool } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BootcampContext from '../../context/BootcampContext'

function Navbar({ title }) {
  const { loggedIn } = useContext(BootcampContext)

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaSchool className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/courses" className="btn btn-ghost btn-sm rounded-btn">
              Courses
            </Link>
            {loggedIn ? (
              <Link to="/profile" className="btn btn-ghost btn-sm rounded-btn">
                Profile
              </Link>
            ) : (
              <Link to="/signin" className="btn btn-ghost btn-sm rounded-btn">
                Sign In
              </Link>
            )}
            {loggedIn ? (
              ''
            ) : (
              <Link to="/register" className="btn btn-ghost btn-sm rounded-btn">
                Register
              </Link>
            )}

            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'E-Learning Platform',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
