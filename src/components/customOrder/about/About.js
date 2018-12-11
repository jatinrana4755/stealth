import React, { Component } from 'react';
import './about.css'

class About extends Component {
	render() {
		return(
			<div style={{marginTop:"100px"}}>
				<div class="newAb ">
					<h1 class="about text-center">


						{/* The Science behind Stealth Sonics */}
						About Stealth Sonics
		</h1>


				</div>
				

                 <div class="container mt-20 nopad">

                  <div class="row marge-bot2">
				    <div class="col-md-6 col-12 card1">
					<h3 class="mb-10">Our Design Philosophy</h3>
					     <div class="col-12 mb-10">
						 <p class="mb-10 italic">“Nature has already blessed us with a marvelous in-built audio system. We’re merely ensuring the precision and quality of the playback; utilizing the attributes of the natural system; and providing versatility for use in many aspects of life. They can be used while working in the studio, performing on stage, listening while relaxing exercising, traveling, and generally moving through everyday life.”</p>
						 <h5>Davwinder Sheena,</h5>
						 <h5>Co-Founder</h5>
						 </div>
						 <div class="col-12 mb-10">
						 <center><img style={{height:"120px", width:"120px"}}src={require('../../../assets/image/logo.png')}/></center>
						 <p class="mb-10 italic"> “The sound fundamentals of acoustic engineering and audiology have proven that our process allows your custom IEMS to conform precisely to your inner ear canal. This provides unparalleled isolation (up to 36dB), superior fidelity, minimal acoustic interference and a perfect fit.”</p>
						 <h5>Balvinder Singh,</h5>
						 <h5>Co-Founder</h5>
						 </div>
					</div>
					<div class="col-md-6 col-12">
				     <div class="col-12 mb-10">
					 <h4>Who We Are</h4>
					 <p class="content-1">We are a group of audiologists, engineers, and musicians dedicated to providing a uniquely personal listening experience for performing artists, studio engineers, audiophiles and anyone who loves hearing all of music’s clarity, nuance, and detail</p>
					 </div>
					 <div class="col-12 mb-10">
					 <h4>Why We’re Different</h4>
					 <p class="content-1">We’re approaching in-ear monitors in a whole new way, using science that leverages our innovations in the medical, music, acoustic and aerospace fields to craft in-ear monitors that are as unique as you are—from custom precision-tuned systems to personalized finishes that let your monitors become an extension of your varied lifestyle.</p>
					 <p class="content-1">With Stealth Sonics, you’ll enjoy the utmost sonic accuracy and advanced hearing protection, in total style and comfort. We offer a full range of universal and custom-molded options, with versatile accessories for a one-of-a-kind experience. Our systems will take you from the studio to the stage to the street, without missing a beat.</p>
					 </div>
					</div>
				  </div>

				 </div>



			</div>
		)
	}
}
export default About;