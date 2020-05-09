import React, { Component } from 'react';
export default class About extends Component {
 render() {
  let resumeData = this.props.resumeData;
     return (
        <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" href="https://imgur.com/kLze48R" img src="https://i.imgur.com/kLze48R.jpg?3" title="source: imgur.com" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutMe}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span><br />
                  <span>
                    Kansas City, Missouri US
                  </span><br />
                  <span>(816)-863-6593</span><br />
                  <span>cjwood01@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/open?id=0B5lJ3wjFF329bDJkakNBdld2Si0tQkxGZ3phRFgxVmR0ZWV3" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> 
              );

 }
 
}

