import React from "react";
import './home.css';
import Image from '../Assets/soumi.jpg';
import{useNavigate} from "react-router-dom"

function Home(){
  const navigate= useNavigate();
  return(
    <>
    <div className="home">
      <div className="Text">
      <h1>Hi,SoumiyaMenon</h1>
      <h2> FrontEnd Developer</h2>
      <button onClick={()=> navigate('/about')}> go to about page</button>
     
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
