import React, { Component } from 'react';
export default class Testimonials extends Component {
 render() {
     return (
 
   <section id="testimonials">
   <div className="text-container">
     <div className="row">
       <div className="two columns header-col">
         <h1><span>Client Testimonials</span></h1>
       </div>
       <div className="ten columns flex-container">
         <div className="flexslider">
           <ul className="slides">
             <li>
               <blockquote>
                 <p>History calls those men the greatest who have ennobled themselves by working for the common good; experience acclaims as happiest the man who has made the greatest number of people happy.


                 </p>
                 <cite>Marx </cite>
               </blockquote>
             </li> {/* slide ends */}
             <li>
               <blockquote>
                 <p>There is a price to pay for speaking the truth. There is a bigger price for living a lie.
                 </p>
                 <cite>Cornel West</cite>
               </blockquote>
             </li> {/* slide ends */}
           </ul>
         </div> {/* div.flexslider ends */}
       </div> {/* div.flex-container ends */}
     </div> {/* row ends */}
   </div>  {/* text-container ends */}
 </section> 
              );

 }
 
}