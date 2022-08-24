import React from "react";
import "./Jsprojects.css";
import ProjectData from "../Data/Jsprojects.json";
import githubImg from "../assets/img/github.png";
import pf1 from "../assets/img/loginglas.jpeg";
import pf2 from "../assets/img/logindark.jpeg";
import pf3 from "../assets/img/lojaplane.jpeg";
import pf4 from "../assets/img/lojacoffe.jpeg";
import pf5 from "../assets/img/dash1.jpeg";
import pf6 from "../assets/img/dash2.jpeg";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projetos</h2>    
            <br />
            <h2>Telas de login | HTML, CSS e Javascript </h2>
            
            
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://github.com/Suubiprabaxo/Login-3" target="_blank">
                    <img src={pf1} alt="Ecommerce Small Project" />
                  </a>
                  <br />
                  <a
                    href="https://github.com/Suubiprabaxo/Login-3"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://github.com/Suubiprabaxo/login-dark"
                    target="_blank"
                  >
                    <img src={pf2} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/Suubiprabaxo/login-dark"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
                <br />
                <h2>Lojas comerciais de vendas | HTML, CSS e Javascript </h2>

                <div className="col-sm-6">
                  <a
                    href="https://github.com/Suubiprabaxo"
                    target="_blank"
                  >
                    <img src={pf3} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/Suubiprabaxo"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://github.com/Suubiprabaxo"
                    target="_blank"
                  >
                    <img src={pf4} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/Suubiprabaxo"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
                <h2>Dashboards | HTML, CSS e Javascript </h2>

                <div className="col-sm-6">
                  <a
                    href="https://github.com/Suubiprabaxo"
                    target="_blank"
                  >
                    <img src={pf5} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/Suubiprabaxo"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://github.com/Suubiprabaxo"
                    target="_blank"
                  >
                    <img src={pf6} alt="Ecommerce Small Project" />
                  </a>
                  <a
                    href="https://github.com/Suubiprabaxo"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
