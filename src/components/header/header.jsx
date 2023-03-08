import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assests/me.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
<header>
<div className="container header_container">
  <h5>Hello I am</h5>
  <h1>Namitha Jajur Chandrashekhar</h1>
  <h5 className='text-light'>Software Developer</h5>
  <CTA />

  <div className='me'>
    <img src={ME} alt=""/>
  </div>

  <a href="#contact" className='scroll_down'>Scroll Down</a>
</div>  

</header>
   
  )
}

export default Header