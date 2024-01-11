import React from "react";
import "./Skills.css";

function Skills() {
  const textStyle = {
    fontSize: '20px',
    color: 'blue',
    textAlign: 'center', 
    // Add more CSS properties as needed
  };

  return (
    <>
      <div className="text" style={textStyle}>
        <h2>My Skills</h2>
        <div className="box">
          <div className="card">
<i class="fa-solid fa-bowl-food"></i>
<h5>HTML</h5>
<p>HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.</p>
            
            

          </div>
          <div className="box">
            <div class="card">
            <i class="fa-solid fa-bowl-food"></i>
            <h5>CSS</h5>
            <p> CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.</p>

          </div>
          </div>
          <div className="box">
            <div class="card">
            <i class="fa-solid fa-bowl-food"></i>
            <h5>JAVA SCRIPT</h5>
            <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages.</p>

          </div>
          
          
          </div>
          <div className="box">
            <div class="card">
            <i class="fa-solid fa-bowl-food"></i>
            <h5>REACT JS</h5>
            <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages.</p>

          </div>
          
          
          </div>

        </div>
        
        {/* Add other content here */}
      </div>
      
    </>
  );
}

export default Skills;
