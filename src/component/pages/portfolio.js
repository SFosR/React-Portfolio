import React from "react";
import ProjectPicker from '../../Assets/projectpicker.png';
import WeatherDashboard from '../../Assets/weatherdash.png';
import NoteTaker from '../../Assets/notetaker.png';
import EmployeeMgmtSys from '../../Assets/employeeMgmtSys.png';
import CodeQuiz from '../../Assets/codequiz.png';
import eCommerce from '../../Assets/eCommerceSF.png';


export default function Portfolio() {
    return (
      <div className='container-fluid justify-content-center'>

      <div className='row row-col-2 justify-content-center border bg-secondary py-2 align-items-start'>
        
      <div className='col-md-3 col-md-2 text-center m-2 border app-bg bg-success'>
        <h3 className='text-center'>Project Picker</h3>
        <p className='text-center'>Project Picker helps students find and share project ideas.</p>
        <img src={ProjectPicker} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://project-picker-project-2.herokuapp.com" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://github.com/SFosR/Project-Picker.git" target='_blank'> GitHub</a>
        </div>  

        <div className='col-md-3 col-md-2 text-center m-2 border app-bg bg-success'>
        <h3 className='text-center'>Weather Dashboard</h3>
        <p className='text-center'>Project Picker helps students find and share project ideas.</p>
        <img src={WeatherDashboard} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://sfosr.github.io/Weather-Dash/" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://github.com/SFosR/Weather-Dash.git" target='_blank'> GitHub</a>
        </div>  

        <div className='col-md-3 col-md-2 text-center m-2 border app-bg bg-success'>
        <h3 className='text-center'>Note Taker</h3>
        <p className='text-center'>App that allows you to organize and save notes.</p>
        <img src={NoteTaker} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://note-taker-shf.herokuapp.com/" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://github.com/SFosR/Note-Taker.git" target='_blank'> GitHub</a>
        </div>  

        <div className='col-md-3 col-md-2 text-center m-2 border app-bg bg-success'>
        <h3 className='text-center'>Employee Management System</h3>
        <p className='text-center'>System that allows employers to organize and manage employee information.</p>
        <img src={EmployeeMgmtSys} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://youtu.be/fuAlOvWEFho" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://github.com/SFosR/Employee-Tracker.git" target='_blank'> GitHub</a>
        </div>  

        <div className='col-md-3 col-md-2 text-center m-2 border app-bg bg-success'>
        <h3 className='text-center'>Code Quiz</h3>
        <p className='text-center'>My first coding bootcamp project</p>
        <img src={CodeQuiz} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://sfosr.github.io/Code-Quiz/" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://github.com/SFosR/Code-Quiz.git" target='_blank'> GitHub</a>
        </div> 

        <div className='col-md-3 col-md-2 text-center m-2 border app-bg bg-success'>
        <h3 className='text-center'>eCommerce Back End</h3>
        <p className='text-center'>This back end project allows companies to track their inventory.</p>
        <img src={eCommerce} className="photos"></img>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://youtu.be/72EGARDKI3c" target='_blank'>Live</a>
        <a className='btn btn-outline-dark mx-1 mb-3 bg-white' href="https://github.com/SFosR/E-Commerce-Back-End" target='_blank'> GitHub</a>
        </div>  
        
        </div>  
      </div>
        
    );
  }
  
  
  