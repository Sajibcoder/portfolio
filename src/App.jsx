import React from 'react'
import Header from './Components/Header/Header';
import Nav from "./Components/Nav/Nav";
import About from "./Components/aboutComponent/About";
import Exprience from "./Components/Exprience/Exprence";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from './Components/Footer/Footer';




const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Exprience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App  