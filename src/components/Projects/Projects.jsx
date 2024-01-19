import React from "react";
import uni from "../Images/Uni.png";
import Dice from "../Images/Dice.png";
import Drum from "../Images/Drum.png";
import simon from "../Images/Simon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../Projects/Projects.css";

function Projects() {
  return (
    <section id="Projects">
      <div>
        <h1 className="text-center display-4 my-5 p-3">My Work</h1>
      </div>
      <div className="proj mx-5 pb-5 ">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="projects" src={Drum} alt="First slide" />
            <Carousel.Caption>
              <h3>
                <a href="https://raw.githack.com/Spandan2405/Udemy_Projects/main/Drum%20Kit/index.html" target="_blank" className ="link">
                  Drum kit
                </a>
              </h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="projects" src={simon} alt="Second slide" />
            <Carousel.Caption>
              <h3>
                <a href="https://raw.githack.com/Spandan2405/Udemy_Projects/main/Simon%20Game/index.html" target="_blank" className ="link">
                  Simon Game
                </a>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="projects" src={Dice} alt="Third slide" />
            <Carousel.Caption>
              <h3>
                <a href="https://raw.githack.com/Spandan2405/Udemy_Projects/main/Dicee%20Toss/dicee.html" target="_blank" className ="link">
                  Dice Toss
                </a>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className=" projects" src={uni} alt="Fourth slide" />
            <Carousel.Caption>
              <h3>
                <a href="https://raw.githack.com/Spandan2405/Udemy_Projects/main/University%20Website/UNIVERSITY.html" target="_blank" className ="link">
                  University Website
                </a>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
