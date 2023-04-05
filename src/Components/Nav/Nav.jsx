import React, { useState } from 'react'
import "./nav.css"
// import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { BiBook,  BiNetworkChart, BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");


  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active' : ''}><FaHome /></a>

      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}><BiUser /></a>

      <a href="#exprience" onClick={() => setActiveNav("#exprience")} className={activeNav === "#exprience" ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ''}><BiNetworkChart/></a>

      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav