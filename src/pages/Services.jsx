import React from 'react'
import "./Services.css"

import Navbar from '../components/navbar/Navbar'
import Location from '../components/location/Location'
import Footer from '../components/footer/Footer'

import ServicePage from '../components/servicePage/ServicePage'
const Services = () => {
  return (
    <>  
    <Navbar/>
    <ServicePage/>
    <Location/>
    <Footer/>
    </>
  )
}

export default Services