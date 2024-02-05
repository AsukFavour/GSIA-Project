import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from './Banner'
import image from '../assets/image1.jpg'

function About() {
  return (
    <>
    <Navbar/>
    <Banner backgroundImage={image} text='About GSIA'/>
    </>
  )
}

export default About