import React from "react";
import "./exprence.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Exprence = () => {
  return (
    <section id="exprience">
      <h5>What Skills I Have </h5>
      <h2>My Exprience</h2>

      <div className="container exprience__container">
        <div className="exprience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediator</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>Nodejs </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>SASS </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Exprence;



//   <div className="exprience__backend">
// <h3>BackEnd Devlopment</h3>
// <div className="exprience__content">
//   <article className="exprience__details">
//     <BsPatchCheckFill className="exprience__details-icon" />
//     <div>
//       <h4>Node Js</h4>
//       <small className="text-light">Exprienced</small>
//     </div>
//   </article>
//   <article className="exprience__details">
//     <BsPatchCheckFill className="exprience__details-icon" />
//     <div>
//       <h4>MongoDB</h4>
//       <small className="text-light">Intermediator</small>
//     </div>
//   </article>
//   <article className="exprience__details">
//     <BsPatchCheckFill className="exprience__details-icon" />
//     <div>
//       <h4>PHP</h4>
//       <small className="text-light">Exprienced</small>
//     </div>
//   </article>
//   <article className="exprience__details">
//     <BsPatchCheckFill className="exprience__details-icon" />
//     <div>
//       <h4>MySQL</h4>
//       <small className="text-light">Intermediate</small>
//     </div>
//   </article>
//   <article className="exprience__details">
//     <BsPatchCheckFill className="exprience__details-icon" />
//     <div>
//       <h4> Pythone</h4>
//       <small className="text-light">Intermediate</small>
//     </div>
//   </article>
// </div>
// </div>