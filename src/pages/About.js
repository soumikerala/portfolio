import React from "react";
import './About.css';
import Image from '../Assets/Soumiyamenon.jpg';
function About() {
  return(
    <> 
    
    <div className="About">
      <div className="Text">
      <h1>About Me</h1>
      <h3>I'am SoumiyaMenon</h3>
      <p>Passionate job seeker with strong analytical skills.
         Eager to help the team to achieve the goals.
         As a Frontend Developer,I can provide clean code and pixel perfect design.
         I also make the website more & more interactive.</p>
      
      
      </div>
      
      <div className="Image">
      <img src={Image} alt="soumiya"  />
      </div>
      
      
  </div>
  
   </>
  )
}

export default About;
