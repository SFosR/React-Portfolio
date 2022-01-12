import React from "react";
import Resume from '../Assets/Resume_Sheri Foster.pdf';


const Header = ({currentPage, pageChangeHandler}) => {
  return(
    <div className='d-flex container-fluid bg-secondary align-items-center py-2'>
      <h1 className='text-light px-4 me-5'>Sheri Foster</h1>

      <ul className='nav navbar-custom justify-content-end'>
        <li classname='nav-item nav-item-custom'><a href="#About" onClick={() => pageChangeHandler('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
        <li classname='nav-item nav-item-custom'><a href="#Portfolio" onClick={() => pageChangeHandler('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a></li>
        <li classname='nav-item nav-item-custom'><a href="#Contact" onClick={() => pageChangeHandler('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a></li>
        <li classname='nav-item nav-item-custom'><a href={Resume} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a></li>

      </ul>
    </div>
  )

}
  
  export default Header;