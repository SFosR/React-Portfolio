import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

function Footer() {
    return (
      <div className='icons bg-dark py-3 container-fluid d-flex justify-content-center text-light'>
          <a href='https://www.linkedin.com/in/fostergroupohio/' target={"_blank"} className='icons'><SiLinkedin/></a>
          <a href='https://github.com/SFosR' target={"_blank"} className='icons'><SiGithub/></a>
      </div>
    )
  }
  
  export default Footer;