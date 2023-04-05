import React from 'react';
import "./footer.css";
import {BsInstagram,BsFacebook, BsGithub,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sajib</a>


      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exprience">Exprience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/sajibdas123/?igshid=OTJhZDVkZWE%3D" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/Sajibcoder" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/sajib-das-358794229/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.facebook.com/sajib.das.9655806" target="_blank"><BsFacebook/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Sajib </small>
      </div>
    </footer>
  )
}

export default Footer



// <a href="https://youtube.com"><BsYoutube/></a>