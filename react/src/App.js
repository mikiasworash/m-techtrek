import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import FeaturedCourses from './pages/FeaturedCourses'
import Courses from './pages/Courses'
import Alert from './components/layout/Alert'
import { BootcampProvider } from './context/BootcampContext'
import { CourseProvider } from './context/CourseContext'

function App() {
  return (
    <BootcampProvider>
      <CourseProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/courses/:id" element={<Courses />} />
                <Route path="/courses" element={<FeaturedCourses />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
        <ToastContainer />
      </CourseProvider>
    </BootcampProvider>
  )
}

export default App
