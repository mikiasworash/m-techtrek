import { FaSchool } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function Navbar({ title }) {
  const token = Cookies.get('token')

  const navigate = useNavigate()

  const handleLogOut = () => {
    Cookies.remove('token')
    navigate('/signin')
  }

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
            {token ? (
              <>
                <Link
                  to="/profile"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogOut}
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="btn btn-ghost btn-sm rounded-btn">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Register
                </Link>
              </>
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
