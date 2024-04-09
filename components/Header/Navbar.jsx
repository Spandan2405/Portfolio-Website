import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


function Navbar(){
    return <header class="d-flex justify-content-center py-3 bg-dark ">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#About" class="nav-link mx-2 navbar-button" >About Me</a></li>
        <li class="nav-item"><a href="#Skills" class="nav-link mx-2 navbar-button">Skills</a></li>
        <li class="nav-item"><a href="#Workex" class="nav-link mx-2 navbar-button">Work Ex</a></li>
        <li class="nav-item"><a href="#Projects" class="nav-link mx-2 navbar-button">Projects</a></li>
        <li class="nav-item"><a href="https://drive.google.com/file/d/1TRzA1qF701mZCR7FKjk6aSKhUj4gqe9E/view?usp=drive_link" target="_blank" class="nav-link mx-2 navbar-button">My Resume</a></li>
        <li class="nav-item"><a href="#Contact" class="nav-link mx-2 navbar-button">Contact</a></li>
      </ul>
    </header>
}
export default Navbar;