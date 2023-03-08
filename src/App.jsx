import React from 'react'
import Header from './components/header/header.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Nav from './components/Nav/nav.jsx'
import Experience from './components/Experience/Experience.jsx'
import Services from './components/Services/services.jsx'
import Portfolio from './components/Portfolio/portfolio.jsx'
import Testimonials from './components/Testimonials/testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/footer.jsx'

const App = () => {
  return (
    // <div>App</div>
    <>
        <Header />
        <Nav />
        <AboutMe/>
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </>
  )
}

export default App