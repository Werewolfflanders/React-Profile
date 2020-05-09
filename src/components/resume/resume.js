import React, { Component } from 'react';
export default class Resume extends Component {
 render() {
     return (
        <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Kansas Edwards Campus</h3>
                <p className="info">KU Coding Bootcamp Graduate <span>•</span> <em className="date">May 2020</em></p>
                <p>
                  Though it was a struggle from the start I perservered six months of intensive training. I now am proficient with React, Javascript, MySQL, HTML, and CSS. This class has taught me how to overcome obstacles and hardships quickly. I've had to adapt to unfamiliar problems with speed and accuracy.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Archibishop O'Hara Highschool</h3>
                <p className="info">Highschool Diploma <span>•</span> <em className="date">May 2008</em></p>
                <p>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Indigo Wild</h3>
                <p className="info">Senior Shipping and Packager <span>•</span> <em className="date">March 2016 - Present</em></p>
                <p>
                I package a high volume of wholesale and retail shipments daily and
                receive incoming supplies and organize within the warehouse. I also assist other departments with production as needed such as operating soap cutting machinery.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>City of Belton, Water and Sewer Dept</h3>
                <p className="info">Service Worker<span>•</span> <em className="date">March 2007 - February 2010</em></p>
                <p>
                Resolved water main breaks at any given notice in any conditions and operated equipment including back hoe, skid steer, dump truck etc. Established, maintained, and fostered positive working relationships. Gained the ability to thrive in a team environment and overcome challenges.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Some of my skills are:
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>MySQL</em></li>
                <li><span className="bar-expand illustrator" /><em>Javascript</em></li>
                <li><span className="bar-expand wordpress" /><em>React</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> 
              );

 }
 
}