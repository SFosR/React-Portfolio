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

        <ProjectCard title="Another Project" 
        img="jpeg"
        description="" 
        github=""
        livelink="" /> 

        <ProjectCard title="Another Project" 
        img="jpeg"
        description="" 
        github=""
        livelink="" /> 

        <ProjectCard title="Another Project" 
        img="jpeg"
        description="" 
        github=""
        livelink="" />    

        {/* repeat for each project */}
      </div>
    );
  }
  
  export default Portfolio;
  