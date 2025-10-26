import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import SizeGuide from './components/SizeGuide/SizeGuide'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title title='New Launch'/>
        <Programs/>
        <Title title='Size GUide'/>
        <SizeGuide/>
        <Title title='Gallery'/>
        <Gallery/>
        <Title title='Testimonials'/>
        <Testimonials/>
        <Title title='Contact Us'/>
        <Contact/>
        <Footer/>
      </div>
      

    </div>
  )
}

export default App