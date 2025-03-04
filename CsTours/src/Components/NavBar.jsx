import 'react'
import CsToursLogo from "../assets/CsToursLogo.jpeg"
import Links from '../Links/Links'
import './NavBar.css' 

function NavBar() {
  return (
    <div className="NavBar">
        <div className="NavBar-logo">
            <img src={CsToursLogo}></img>
        </div>
        <div className="NavBar-links">
            <Links linkname="Home" linkurl="/Home"/>
            <Links linkname="Services" linkurl="/Services"/>
            <Links linkname="AboutUs" linkurl="/AboutUs"/>
            <Links linkname="Gallery" linkurl="/Gallery"/>
            <Links linkname="ContactUs" linkurl="/ContactUs"/>
            
        </div>
    </div>
  )
}

export default NavBar