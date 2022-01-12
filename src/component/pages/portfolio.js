import React from "react";
import ProjectPicker from '../../assets/projectpicker.png';
import WeatherDashboard from '../../assets/weatherdash.png';
import NoteTaker from '../../assets/notetaker.png';
import EmployeeMgntSys from '../../assets/EmployeeMgntSys.png';
import MovieSearchEngine from '../../assets/moviepicker.png';
// import backgroundImage from './img/greenglobe.jpeg';

function Portfolio() {
    return (
      <div className='container-fluid justify-content-center'>

      <div className='row row-col-2 justify-content-center border bg-greenglobe-photo py-2 align-items-start'>
        
      <div className='col-md-4 col-md-2 text-center m-3 border app-bg'>
        <h3 className='text-center'>Project Picker</h3>
        <p className='text-center'>Project Picker helps students find and share project ideas.</p>
        <img src={ProjectPicker} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3' href="https://project-picker-project-2.herokuapp.com" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3' href="https://github.com/SFosR/Project-Picker.git" target='_blank'> GitHub</a>
        </div>  

        <div className='col-md-4 col-md-2 text-center m-3 border app-bg'>
        <h3 className='text-center'>Weather Dashboard</h3>
        <p className='text-center'>Project Picker helps students find and share project ideas.</p>
        <img src={WeatherDashboard} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3' href="https://sfosr.github.io/Weather-Dash/" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3' href="https://github.com/SFosR/Weather-Dash.git" target='_blank'> GitHub</a>
        </div>  
        
        </div>  
      </div>
     

      //   <ProjectCard title="Weather Dashboard" 
      //   img="jpeg"
      //   description="Allows users to pull up any city in the USA and find the current weather. 
      //   It will provide current temperature, humidity, UV index and a 5-day forecast." 
      //   github="https://github.com/SFosR/Weather-Dash.git"
      //   livelink="https://sfosr.github.io/Weather-Dash/" />

      //   <ProjectCard title="Note Taker" 
      //   img="./img/notetaker.png"
      //   description="" 
      //   github="https://github.com/SFosR/Note-Taker.git"
      //   livelink="https://note-taker-shf.herokuapp.com/" />  

      //   <ProjectCard title="Employee Management System" 
      //   img="Employee Management System"
      //   description="" 
      //   github="https://github.com/SFosR/Employee-Tracker.git"
      //   livelink="https://youtu.be/fuAlOvWEFho" /> 

      //   <ProjectCard title="Movie Search Engine" 
      //   img="moviepicker.png"
      //   description="" 
      //   github="https://github.com/SFosR/Project-1.git"
      //   livelink="" /> 

      //   <ProjectCard title="Coming Soon" />    

      
    );
  }
  
  export default Portfolio;
  