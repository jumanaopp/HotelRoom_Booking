import React from 'react'
import UserNavM from '../../components/NavBar/UserNavM'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'
import Testimonial from '../../components/Testimonial/Testimonial'

export default function UserIndex() {
  return (
    <>
    <UserNavM/>
    <Slider/>
    <Services/>
    <About/>
    <Testimonial/>
    {/* <Blog/> */}
    <Footer/>
    </>
  )
}
