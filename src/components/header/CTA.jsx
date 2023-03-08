import React from 'react'
import Resume from '../../Assests/Resume.pdf'
import HeaderSocials from './HeaderSocials'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        <HeaderSocials/>
    </div>
  )
}

export default CTA