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
            <div class="container px-4 my-5 py-3 text-center">
                <div class=" mb-5 text-center item">
                    <h3 class="display-5">Some technologies I have worked with</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 px-4 item">
                        <h4 class="fw-normal">Front End Development</h4>
                        <img src={frontend} height="200" alt="front end development" className="skillimg my-3"></img>
                        <div className="skill">
                            <img src={html} class="icon m-4"></img>
                            <img src={css} class="icon m-4"></img><br></br>
                            <img src={js} class="icon m-4"></img>
                            <img src={reactJS} class="icon m-4"></img>
                        </div>
                    </div>
                    <div class="col-lg-4 px-4">
                        
                        <h4 class="fw-normal">Back End Development</h4>
                        <img src={backend} height="200" alt="back-end development" className="skillimg my-3"></img>
                        <div className="skill">
                            <img src={sql} class="icon m-4"></img>
                            <img src={Api} class="icon m-4"></img><br></br>
                            <img src={Nodejs} class="icon m-4"></img>
                            <img src={github} class="icon m-4"></img>
                        </div>

                    </div>
                    <div class="col-lg-4 px-4">
                        
                        <h4 class="fw-normal ms-5">Programming</h4>
                        <img src={Programming} height="200" alt="Programming" className="skillimg my-3"></img>
                        <div className="skill">
                            <img src={Cpp} class="icon m-4"></img>
                            <img src={Python} class="icon m-4"></img><br></br>
                            <img src={Matlab} class="icon m-4"></img>
                            <img src={Arduino} class="icon m-4"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;