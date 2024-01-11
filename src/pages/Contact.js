import React from "react";
import "./Contact.css";
function Contact() {
  
return (
<>
    <div className="contact">
      <div class="title">
      <h2>Contact <span>Me</span></h2>
      </div>
      <div class="Cnd">
        <form action="#">
          
        <input type="text" placeholder="Your Name"></input> <br/> <br/>
        
        <input type="text" placeholder="Your Email"></input> <br/> <br/>
        
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea> <br/> <br/>
        
        <button type="button">Submit</button>
        
        </form>

        <div class="Contact-text">
        <h5>If you have any project in your mind</h5>
        <div className="demo">
        <ul>
          <li>
             <i class="fa-solid fa-user"></i> Soumiya Menon <br/> <br/>
          <i class="fa-solid fa-envelope"></i> 
           soumikerala1999@gmail.com <br/> <br/>
           <i class="fa-solid fa-location-dot"></i>3-4-80/1,Church Street ,KeelaSurandai-627859  <br/><br/>
        </li>
        
        </ul>
        </div>
        </div>
        {/* -----------footer section------------ */}
      
      <footer>
        <p>Soumiya Menon</p>
        <p>I'm a UI Frontend Developer - Creating bold & brave interface design for companies all across the world.</p>

        <div class="social">
          <a href="https://web.whatsapp.com/+917448978066"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://ig.me/soumi_menon"><i class="fa-brands fa-instagram"></i></a>

        </div>

        <p class="end">© Copyright 2024 Soumiya Menon | All rights reserved.</p>
      </footer>
                

      </div>

    </div>
    
    </>
    )
    }
  


export default Contact;
