import React from "react";
import './home.css';
import Image from '../Assets/soumi.jpg';


function Home(){
  
  return(
    <>
    <div className="home">
      <div className="Text">
      <h1>Hi,SoumiyaMenon</h1>
      <h2> FrontEnd Developer</h2>
      
     
      </div>
      

      <div className="Image">
      <img src={Image} alt="soumiya"  />
      </div>
      
  </div>
  
  <div>
  
  </div>
  </>
  ) 
}
export default Home;
