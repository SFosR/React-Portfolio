import React from "react";
import ProjectCard from "../component/projectcard";

function Portfolio() {
    return (
      <div className="my-portfolio">
        My Portfolio
        <ProjectCard title="Project Picker" 
        img="./img/projectpicker.png"
        description="Project that helps future students find ideas for projects. 
        Users can share project ideas and search for projects." 
        github="https://github.com/SFosR/Project-Picker.git"
        livelink="https://project-picker-project-2.herokuapp.com/" />

        <ProjectCard title="Weather Dashboard" 
        img="jpeg"
        description="Allows users to pull up any city in the USA and find the current weather. 
        It will provide current temperature, humidity, UV index and a 5-day forecast." 
        github="https://github.com/SFosR/Weather-Dash.git"
        livelink="https://sfosr.github.io/Weather-Dash/" />

        <ProjectCard title="Note Taker" 
        img="./img/notetaker.png"
        description="" 
        github="https://github.com/SFosR/Note-Taker.git"
        livelink="https://note-taker-shf.herokuapp.com/" />  

        <ProjectCard title="Employee Management System" 
        img="Employee Management System"
        description="" 
        github="https://github.com/SFosR/Employee-Tracker.git"
        livelink="https://youtu.be/fuAlOvWEFho" /> 

        <ProjectCard title="Movie Search Engine" 
        img="moviepicker.png"
        description="" 
        github="https://github.com/SFosR/Project-1.git"
        livelink="" /> 

        <ProjectCard title="Coming Soon" />    

      </div>
    );
  }
  
  export default Portfolio;
  