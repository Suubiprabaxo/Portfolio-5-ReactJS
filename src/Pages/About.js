import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>Sobre mim</h2>
              <p>
              Sou apaixonado por tecnologia, uma pessoa que está sempre se desafiando e evoluindo, gosto de aprender e trabalhar em equipe.
              Estudando a linguagem React JS atualmente, tenho preferencia pelo Front End mas não corro de um desafio seja em Back ou Full stack!!!
              <br></br>
              <br></br>
              Possuo experiência em desenvolvimento com as tecnologias HTML5, CSS3, JavaScript, React JS, Node Js, Jquery, Bootstrap e SASS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
