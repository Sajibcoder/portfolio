import React from 'react'
import {BsLinkedin,BsInstagram,BsGithub,BsFacebook} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sajib-das-358794229/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/sajibdas123/?igshid=OTJhZDVkZWE%3D" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/Sajibcoder" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/sajib.das.9655806" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials