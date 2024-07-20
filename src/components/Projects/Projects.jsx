import React from "react";
import Dice from "../Images/Dice.png";
import Drum from "../Images/Drum.png";
import simon from "../Images/Simon.png";
import quotegen from "../Images/QuoteGen.png"
import keeper from "../Images/Keeper.png"
import miranda from "../Images/PaperPortfolio.png"
import coca from "../Images/Coca Cola.png"
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
            <a
              href="https://raw.githack.com/Spandan2405/Udemy_Projects/main/Drum%20Kit/index.html"
              target="_blank"
              className="link"
            >
              <img className="projects" src={Drum} alt="First slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <a
              href="https://raw.githack.com/Spandan2405/Udemy_Projects/main/Simon%20Game/index.html"
              target="_blank"
              className="link"
            >
              <img className="projects" src={simon} alt="Second slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://quote-generator-373vdmjja-spandan-guptas-projects.vercel.app/"
              target="_blank"
              className="link"
            >
              <img className=" projects" src={quotegen} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://raw.githack.com/Spandan2405/Udemy_Projects/main/Dicee%20Toss/dicee.html"
              target="_blank"
              className="link"
            >
              <img className="projects" src={Dice} alt="Fourth slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://keeper-lyvou2k07-spandan-guptas-projects.vercel.app/"
              target="_blank"
              className="link"
            >
              <img className=" projects" src={keeper} alt="Fifth slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://raw.githack.com/Spandan2405/Landing-pages/main/The%20Paper%20portfolio/index.html"
              target="_blank"
              className="link"
            >
              <img className=" projects" src={miranda} alt="Sixth slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href="https://raw.githack.com/Spandan2405/Landing-pages/main/Coca%20Cola/index.html"
              target="_blank"
              className="link"
            >
              <img className=" projects" src={coca} alt="Seventh slide" />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
