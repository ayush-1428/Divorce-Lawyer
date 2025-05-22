
import './home.css'

import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/Hero'
import Project from '../components/projects/Project'
import About from '../components/about/About'
import Why from '../components/whyus/Why'
import Location from '../components/location/Location'

import Footer from '../components/footer/Footer'

const Home = () => {
  return (


    
      <div className='body_cont'>
        
        <Navbar />
        <Hero />
        <Project/>
        <About/>
        <Why/>
        <Location/>
        <Footer/>


      </div>

  )
}


export default Home