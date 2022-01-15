import React from "react";
import myPic from "../../Assets/selfpic.jpg";






function AboutMe() {
    return (

    
    <div className="about-me"> 
       
         <img src={myPic} className='img-fluid shadow-4' alt='...' style={{ maxWidth: '24rem' }} />

        <section>
          <p>I always thought I should be an engineer of some sort. In fact, every "career test" I've ever taken has said so.  
          After years in sales, having success but not completely loving it, So I decided to actually do something about it. I enrolled in a coding bootcamp. I'm Full Stack web developer with skills in CSS, HTML, JavaScript, MySql, React with more to come. I recently earned a certificate in 
          full stack develpment from THE Ohio State University. With a background in sales, I'm excited to bring my problem solving, independent and 
          leadership skills to create meaningful web applicatons. I'm experienced in working in a fast-paced environment, working independently and also as a team. I'm a firm believer 
          that in this ever changing world, you must constantly be learning. 
          </p>
        </section> 

    </div>  
      
    );
  }
  
  export default AboutMe;
  