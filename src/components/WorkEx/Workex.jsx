import React from "react";
import ethnus from "../Images/ethnus.png"
import "../WorkEx/Workex.css"
import seds from "../Images/seds.jpeg"

function Workex() {
    return(
        <section id="Workex">
            <div className="container">
            <h1 className="text-center display-4 my-3 p-3">Work Experience</h1>
            <div className="row">
                <div className="work1 col-lg-3 col-sm-12">
                <img src={ethnus} className="exp1_img mt-5" alt="workex-1"></img>
                </div>
                <div className="exp1 col-lg-9 col-sm-12">
                <h2 className="py-2 "> Web development Intern</h2>
                <h5>MERN Full Stack Web Dev - Ethnus</h5>
                <p>09/2023 - 11/2023</p>
                <p>Learned a lot of new technologies and improved my skillset by
                    performing the tasks and projects assigned
                    <ul type="square">
                    <li>Bootstrap Framework</li>
                    <li>CSS HTML</li>
                    <li>React JS</li>
                    <li>Express JS</li>
                    <li>Mongodb</li>
                    </ul>
                    </p>
                    </div> 
                <div className="work2 col-lg-3 col-sm-12">
                <img src={seds} className="exp1_img mt-5" alt="workex-1"></img>
                </div>
                <div className="exp1 col-lg-9 col-sm-12 ">
                <h2 className="py-2">Outreach Member</h2>
                <h5>SEDS Antariksh chapter ,VIT chennai</h5>
                <p>03/2022 - Present</p>
                <p>An active member of SEDS antariksh chapter
                    <ul type="square">
                    <li>Marketing</li>
                    <li>Teaching </li>
                    <li>Problem Solving</li>
                    <li>Presentation Design</li>
                    <li>Microsoft PowerPoint skills</li>
                    </ul>
                    </p>
                    </div> 
            </div>
            </div>
        </section>
    );
}

export default Workex;