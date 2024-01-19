import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import frontend from "../Images/Frontend.jpg"
import "../Skills/Skills.css"
import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/JS.png"
import sql from "../Images/Mysql.png"
import github from "../Images/Github.png"
import Api from "../Images/Api.jpg"
import Nodejs from "../Images/nodeJS.png"
import Cpp from "../Images/C++.png"
import Python from "../Images/Python.jpeg"
import Arduino from "../Images/arduino.jpeg"
import Matlab from "../Images/Matlab.jpg"
import reactJS from "../Images/REACTJS.png"
import backend from "../Images/backend development.webp"
import Programming from "../Images/Programming.webp"

function Skills(){
    return (
    <section id="Skills">
            <div class="container px-4 my-5 py-3 text-start">
                <div class="mb-5 text-center">
                    <h2 class="display-4">Skills I Have</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 px-4">
                        <h4 class="fw-normal">Front End Development</h4>
                        <img src={frontend} height="150" alt="front end development" className="my-3"></img>
                        <div className="skill">
                            <h5><img src={html} class="icon me-4"></img>HTML</h5>
                            <h5><img src={css} class="icon me-3"></img>CSS</h5>
                            <h5><img src={js} class="icon me-4"></img>JS</h5>
                            <h5><img src={reactJS} class="icon me-3"></img>React JS</h5>
                        </div>
                    </div>
                    <div class="col-lg-4 px-4">
                        
                        <h4 class="fw-normal">Back End Development</h4>
                        <img src={backend} height="150" alt="back-end development" className="my-3"></img>
                        <div className="skill">
                            <h5><img src={sql} class="icon me-3"></img>SQL</h5>
                            <h5><img src={Api} class="icon me-5"></img>API</h5>
                            <h5><img src={Nodejs} class="icon me-4"></img>Express</h5>
                            <h5><img src={github} class="icon me-5"></img>Github</h5>
                        </div>

                    </div>
                    <div class="col-lg-4 px-4">
                        
                        <h4 class="fw-normal ms-5">Programming</h4>
                        <img src={Programming} height="150" alt="Programming" className="my-3"></img>
                        <div className="skill">
                            <h5><img src={Cpp} class="icon me-4"></img>C++</h5>
                            <h5><img src={Python} class="icon me-4"></img>Python</h5>
                            <h5><img src={Matlab} class="icon me-3"></img>Matlab</h5>
                            <h5><img src={Arduino} class="icon me-4"></img>Arduino</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;