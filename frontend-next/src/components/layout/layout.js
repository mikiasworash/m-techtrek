import { Fragment } from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}
