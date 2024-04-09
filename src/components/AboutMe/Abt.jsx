import React from "react";
import mypic from "../Images/IMG_20230115_113145690.jpg"
import "./Abt.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function About(){
    return(
        <section id="About">
        <div className="container">
        <div className="row">
        <div className="text col-lg-6 col-sm-12 text-center">
        <h1>Hi! I am Spandan Gupta</h1>
        <p className="p-3">A motivated 3rd-year ECE student passionate about Full Stack Web Development,actively pursuing an
        internship to further refine skills in front-end technologies. Dedicated to continuous learning and
        presently focused on enhancing proficiency in back-end development </p>
        </div>
        <div className="img col-lg-6 col-sm-12">
        <img src={mypic} alt="myimage" className="mypic"></img>
        </div>
        </div>
        </div>
    </section> 
    );
}
export default About;