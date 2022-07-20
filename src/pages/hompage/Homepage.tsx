import React from "react";
import { Link } from "react-router-dom";
import { setFlagsFromString } from "v8";
import "./stylesheet.css"
import recert from './public/recert.jpg';

function Homepage() {
  return (
    <section className="landing-container">
            <header className="section-header"><h1> Recertification HomePage</h1></header>
            <div className="landing-description-container">
               <img src="EMT-Decal.jpg"/>
            </div>
            <div className="landing-images-container">
                <div className="row">
            <article>
            
                <h1> Recertification by Exam</h1>
                    <p> Starting your recertification can be as easy as taking an exam without having to do continuing education. All that is needed is to complete a recertfcation by Exam application and to pay an exam fee. You are allowed one attempt between a year prior to your expiration date and your expiration date. 
                    </p>
                <h1>Continuing Education</h1>
                    <p>The EMT National Continued Competency Program (NCCP) requires 40 total hours of continuing education. There are three components in education that are required to reach the 40 hours. A national component, a local/state component, and a individual component</p>

                <h1>National Component: 20 hours</h1>   
                    <p>The National Component is 20 hours of continuing education that is required for EMTs to complete. EMTs are able to use up to a maxiumum of 7 hours of distrubitibe education. Examples include online courses, jounral articles, and videos. </p>
              
               
                </article>
               </div>
              </div>
             
            <footer className="footer-container">
                <header className="footer-header"><h1></h1></header>
            </footer>
    </section>
  );
}

export default Homepage;
