import React from "react";
import "./contact.css";
import {AiOutlineMail} from 'react-icons/ai';
import {BsInstagram, BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    alert("Thank You For Sending Message , I'll Contact you soon")

    e.preventDefault();

    // emailjs.sendForm('service_ulm2ez6', 'template_z1tudug', form.current, 'bdd3VFK3B5pyGh9qs')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>sajib.brp@gmail.com</h5>
            <a href="mailto:sajib.brp@gmail.com" target={"_blank"}>Send a E-mail</a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>@sajibdas123</h5>
            <a href="https://www.instagram.com/sajibdas123/?igshid=OTJhZDVkZWE%3D" target={"_blank"}>Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 7550946098</h5>
            <a href="https://api.whatsapp.com/send?phone=7550946098" target={"_blank"}>WhatsApp Me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name="name" placeholder="Enter Your Name" required/>
          <input type="email" name="email" placeholder="Enter Your Email" required/>
          <textarea name="message" rows="7" placeholder="Enter Your Message"></textarea>
          <button type="submit" className="btn btn-primary btnSub">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
