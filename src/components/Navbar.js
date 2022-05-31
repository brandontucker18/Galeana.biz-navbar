import React, {useState} from 'react';
import { Button } from './Button';
import './Navbar.css';
import { Link  } from 'react-router-dom';
import Dropdown from './Dropdown';




function Navbar() {
 const [click, setClick] = useState(false);
 const [dropdown, setDropdown] = useState(false);

 const handleClick = () => setClick(!click)
 const closeMobileMenu = () =>setClick(false);

 const onMouseEnter = () => {
     if(window.innerWidth < 960) {
         setDropdown(false);
     } else {
         setDropdown(true);
     }
 }


 const onMouseLeave = () => {
    if(window.innerWidth < 960) {
        setDropdown(false);
    } else {
        setDropdown(false);
    }
}


  return (
    <>
     <nav className="navbar">
        <Link to="/" className="navbar-logo">
            Galeanabiz
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
               <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                   home
               </Link>
            </li>
            <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                   services <i className="fa fa-caret-down" />
               </Link>
               {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
               <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                   contact us
               </Link>
            </li>
            <li className='nav-item'>
               <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                   sign up
               </Link>
            </li>
        </ul>
        <Button />
     </nav>
    </>
  )
}

export default Navbar;