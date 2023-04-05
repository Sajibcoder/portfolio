import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sajib</h1>
        <h5 className="text-light">Front End Devloper</h5>
        <CTA/>
        <HeaderSocials/>
      
      </div>
    </header>
  )
}

export default Header



/*
 <img src={ME} alt="myImage" />



*/