import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Works from './components/Works/Works'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Films from './components/Films/Films'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle={'Our Works'} title={'What We Offer'} />
      <Works />
      </div>
      <About />
      <Title subtitle={'Gallery'} title={'Photos From Shoots'} />
      <Gallery />
      <Title title={'Films'} />
      <Films />
      <Title subtitle={"Contact Us"} title={"Get in Touch"} />
      <Contact />
      <Footer />



      

    </div>
    
  )
}

export default App