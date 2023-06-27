import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome} from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
import { MdContactMail} from "react-icons/md";
import { HiInformationCircle} from "react-icons/hi";

const Header = () => {
  return (
    <>
    <nav className='NavbarItems'>
    <Link to='/' className="navbar-brand" >Demo App</Link>
    <div className='menu-icons' /*onClick={()=>setclicked(!clicked)}*/>
      {/* <i className={clicked?"fas fa-times":"fas fa-bars"}></i> */}
    </div>
    <ul /*className={clicked?"nav-menu active":"nav-menu"}*/ >
                <li className='nav-links'>
                  <NavLink to="/" className='nav-link'><FaHome className='flec'/><br/>Home</NavLink>
                </li>
                <li className="nav-links">
                  <NavLink to="/information" className='nav-link'><HiInformationCircle className='flec'/><br/>Information </NavLink>
                </li>
                <li className="nav-links">
                  <NavLink to="/contact" className='nav-link'><MdContactMail className='flec'/><br/> contact</NavLink>
                </li>
                <li className="nav-links">
                  <NavLink to="/guide" className="nav-link "><RiGuideFill className='flec'/><br/>Guide</NavLink>
                </li>     
          </ul>
            </nav>
    </>

  )
}

export default Header
