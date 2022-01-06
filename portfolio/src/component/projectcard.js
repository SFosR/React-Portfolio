import React from "react";

function ProjectCard(props) {
    return (
      <div className="card">
       <h4>{props.title}</h4>
       <img src={props.img}/>
       <p>{props.description}</p>
       <a href={props.github}>GitHub</a>
       <a href={props.livelink}>Live</a>


      </div>
    );
  }
  
  export default ProjectCard;