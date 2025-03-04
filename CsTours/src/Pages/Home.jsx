import 'react'
import Carousel from '../Carousel'
import NavBar from '../Components/NavBar'
import Services from './Services'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import ContactUs from './ContactUs'
import "../Css/Home.css"
import Form from '../Forms/form'
function Home() {
  return (

    <div className='body'> 
      <NavBar/>
      <Carousel/>
      <Services/>
      <AboutUs/>
      <Gallery/>
      <ContactUs/>
      </div>
         
  )
}

export default Home