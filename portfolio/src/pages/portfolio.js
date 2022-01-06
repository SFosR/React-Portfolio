import React from "react";
import ProjectCard from "../component/projectcard";

function Portfolio() {
    return (
      <div className="my-portfolio">
        My Portfolio
        <ProjectCard title="Weather Dashboard" 
        img="jpeg"
        description="text for desc goes here" 
        github="insert github link"
        livelink="insert live link" />

        <ProjectCard title="Weather Dashboard" 
        img="jpeg"
        description="text for desc goes here" 
        github="insert github link"
        livelink="insert live link" />

        {/* repeat for each project */}
      </div>
    );
  }
  
  export default Portfolio;
  