import React, { Component } from 'react';
import './background.css';
import studio from '../../assets/image/studioengineer.png'
import enthus from '../../assets/image/enthusiasts.png';
import music from '../../assets/image/musician.png';

import {
    Carousel,
    CardText,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


const items = [
    {
        src:"https://i.ibb.co/TmPz6Rv/carbon.jpg",

        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src:"https://i.ibb.co/HBF6Z6D/Product-U2-2018.jpg",
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src:"https://i.ibb.co/QDxjpZB/Product-U4-2018.jpg",
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class BackGround extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} style={{width:'100%', height:'500px'}} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />


                </CarouselItem>


            );
        });

        return (
            <body>
<div class="container main1"  >

<div id="myCarousel"  data-ride="carousel">

  
  <div class="carousel-inner">
    <div  class="item active  carouselbox">
      <img class="carouselbox" src="https://i.ibb.co/TmPz6Rv/carbon.jpg">
      </img>
      <div class="contentslider">
      
      <div class="row">
      <h3 class="whitetext animated zoomIn">PRECISION TUNED </h3>
      </div>
      <div class="row">
      <h3 class="whitetext animated zoomIn">IN-EAR EARPHONES</h3> 
      </div>

      <div class="row no-pm-home">
      <div class="col-md-6">
      <div class="row">
       <h5 class="whitetext3 animated zoomIn">The Science</h5>
      </div>


      <div class="row no-pm-home">

      <div class="col-12">
      <ul class="mt20">
          <li class="homeli animated slideInLeft" >Iso Stealth Technology: Audilogy in Action</li>
          <li class="homeli animated slideInLeft">SonicFlo Acoustics: The Aerospace Advantage</li>
          <li class="homeli animated slideInLeft">Acoustic Optimization: From Drivers to Damping</li>
          <li class="homeli animated slideInLeft">Space-Age Materials: Comfort and Confidence</li>
      </ul>
      </div>
      </div>
      </div>
      <div class="col-md-6 col-12">
      
      <img class="slide-img animated slideInRight" src="https://stealthsonics.com/wp-content/uploads//2018/07/U4_home.png"></img>
      <img class="slide-img animated slideInRight" src="https://stealthsonics.com/wp-content/uploads//2018/07/c4_popX.png"></img>
    
      </div>
      
      </div>



      </div>
      
      
    </div>

    <div class="item  carouselbox">
      <img class="carouselbox" src="https://i.ibb.co/HBF6Z6D/Product-U2-2018.jpg"></img>

       <div class="contentslider">
       <div class="row no-om-home">
       
       <div class="col-12">
       <h1 class="whitetext animated zoomIn">CUSTOM-FIT SERIES&nbsp;</h1>
       </div>
       </div>

       <div class="row">
       <div class="col-md-6 col-12">
       <h5 class="whitetext3"> proprietary Sonic flow technology</h5>
       </div>
       <div class="col-md-6 col-12">
       </div>
       </div>

       <div class="row mtrow">
       <div class="col-12">
        
<div class="tax-two animated slideInLeft">
      
     <img  class="c9-driver "  src='https://stealthsonics.com/wp-content/uploads//2018/07/C_9aug.png'/>
{/* <div class=""></div> */}


     </div>
          
     
 <div class="tax animated slideInLeft">
     <img  class="c4-driver" src='https://stealthsonics.com/wp-content/uploads//2018/07/C_4_aug.png'/>
<a class="out" href="/c9series">       

     <button type="button" href="/c9series" class="btn bum btn-sm animated slideInLeft ">C9</button>
     </a>



     </div>
  
      <div class="tax-three animated slideInLeft">
     <img  class="c2-driver" src='https://stealthsonics.com/wp-content/uploads//2018/07/c_2_aug.png'/>
     <a href="/c4series">  
     <button type="button" href="/c4series"  class="btn bum-one btn-sm animated slideInLeft">C4</button>
     </a>

      <a href="/c2series">       

     <button type="button" href="/c2series" class="btn bum-two btn-sm animated slideInLeft">C2</button>
     </a>




     </div>
       </div>
       </div>


       </div>

    </div>

    <div class="item   carouselbox">
      <img class="carouselbox" src="https://i.ibb.co/QDxjpZB/Product-U4-2018.jpg"></img>
      <div class="contentslider">


      <div class="row">
      
      <div class="col-md-9 col-12 BLANK">
      </div>
      <div class="col-md-3 col-12">
      <h1 class="whitetext4 animated zoomIn">UNIVERSAL-FIT SERIES&nbsp;</h1>
      </div>
      
      </div>

      <div class="row">
      <div class="col-md-9 BLANK">
      </div>
      <div class="col-md-3 col-12" >
      <ul class="mt20">
          <li class="homeli2 animated slideInLeft">Hybrid</li>
          <li class="homeli2 animated slideInLeft">High</li>
          <li class="homeli2 animated slideInLeft">Performance</li>
          <li class="homeli2 animated slideInLeft">Design</li>
      </ul>
      </div>
      </div>


      <div class="row">
      <div class="col-md-9 col-12">
      <a >
     
<div class="u9 animated slideInRight">
     <img  class="u9-driver " src='https://stealthsonics.com/wp-content/uploads//2018/07/SS_u9_RepositionV3.png'/>
<a  href="/u9series" >
     <button type="button"  class="btn fif btn-sm">U9</button>
     </a>
     <img class="u4-driver " src="https://stealthsonics.com/wp-content/uploads//2018/07/SS_u4_RepositionV3.png"></img>
    <a href="/u4series">
     <button type="button"  class="btn fif-one btn-sm">U4</button>
     </a>
   
     <img class="u2-driver" src="https://stealthsonics.com/wp-content/uploads//2018/07/SS_u2_RepositionV3.png"></img>
    <a href="/u2series">

         <button type="button"  class="btn fif-two btn-sm">U2</button>
         </a>


{/* <div class=""></div> */}

     </div>
      </a>
      <a >
    
    
      </a>
      <a >
      </a>
      </div>
      <div class="col-md-3 col-12">
      </div>
      
      </div>
      

      
      </div>
    </div>
  </div>


</div>



    <h1>The Stealth Sonics Product Line</h1>
    <h2>Precision Tuned In-Ear Monitors</h2>


    <div class="row no-marg">

    <div class="col-md-3">
    <a href="/c9series">
    <img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/front9A.png"></img>
    </a>
     <h2>C9 Series</h2>
     
    </div>

    <div class="col-md-3">
    <a href="/c4series">
    <img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/front4.png"></img>
    </a>
    <h2>C4 Series</h2>
    </div>

    <div class="col-md-3">
    <a href="/c2series">
    <img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/front_9.png"></img>
    </a>
    <h2>C2 Series</h2>
    </div>

    <div class="col-md-3">
    <img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/stealthy_2.png"></img>
    <h2>Get Some!</h2>
    </div>


    </div>


<div class="row no-marg">

<div class="col-md-3">

<img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/stealthy_2.png"></img>
 <h2>Get Some!</h2>
</div>

<div class="col-md-3">
<a href="/u9series">
<img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/U9.jpg"></img>
</a>
<h2>U9 Series</h2>
</div>

<div class="col-md-3">
<a href="/u4series">
<img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/U4.jpg"></img>
</a>
<h2>U4 Series</h2>
</div>

<div class="col-md-3">
<a href="/u2series">
<img class="fit" src="https://stealthsonics.com/wp-content/uploads//2018/07/U2.jpg"></img>
</a>
<h2>U2 Series</h2>
</div>


</div>
</div>

<div class="container-fluid back1">

<div class="row nomaj marg-top">

<div class="col-12">
<span class="fs-26">A REVOLUTIONARY NEW CONCEPT IN IN-EAR MONITORS</span>
</div>
<div class="col-12">
<span class="fs-13">We are a group of audiologists, engineers and musicians dedicated to providing an unparalleled personal listening experience for performing artists, studio engineers, audiophiles and anyone who loves hearing all of music’s clarity, nuance and detail.</span>
</div>
<div class="col-12">
<span class="fs-13">We’re approaching in-ear monitors in a whole new way, using science that leverages our innovations in the medical, music, acoustic and aerospace fields to hand-craft in-ear monitor systems that are as unique as you are, with the ability to tune custom systems to your ear’s natural acoustics to offer the utmost sonic accuracy and advanced hearing protection.</span>
</div>
<div class="col-12 marge-bot">
<span class="fs-13">We believe that a quality in-ear monitor experience should be accessible to everyone; that’s why we offer a full range of universal and custom-fit options, at competitive prices. Whether you’re a seasoned pro or a weekend warrior, we have a model for you.</span>
</div>

</div>

</div>

<div class="container-fluid">

<div class="row nomaj marge-bot">



<div class="col-md-4 col-12">
   <h5 class="icon-home"><img class="icon-home" src={studio}/></h5>
   <h5 class="head-1">STUDIO ENGINEERS</h5>
   <h4 class="head-2">An Accurate Reference, Always</h4>
   <p class="head-3">Trust the accuracy of your listening environment with a custom in-ear monitor tuned to the acoustics of your own ear. Our balanced-armature and hybrid driver designs provide faithful sound reproduction across the entire frequency spectrum, with the flat response, fast transients and accurate imaging you expect in a studio monitor, without any of the room anomalies that can color your mix.</p>
</div>

<div class="col-md-4 col-12">
<h5 class="icon-home"><img class="icon-home" src={music}/></h5>
    <h5 class="head-1">MUSICIANS</h5>
    <h4 class="head-2">Hear Better, Play Better</h4>
    <p class="head-3">Our IEMs let you banish the stage volume and take control of your monitor mix for a better performance, anywhere. Experience full clarity and separation without exposing your ears to unsafe sound levels, and enjoy a seamless listening experience that helps you perform consistently from clubs to arenas. Our monitors are enclosed in a space-age material that offers secure, slip-free fit, letting you wear them for extended periods ith confidence.</p>
</div>

<div class="col-md-4 col-12">
<h5 class="icon-home"><img class="icon-home" src={enthus}/></h5>
    <h5 class="head-1">ENTHUSIASTS</h5>
    <h4 class="head-2">Unveil the Detail</h4>
    <p class="head-3">With Stealth Sonics, immerse yourself in your own private soundstage with our line of IEMs designed to let you enjoy full fidelity, in full comfort. Experience all of music’s deepest pass and sparkling highs in stunning detail, while protecting your ears. Fine-tune your sonic experience with cable options, and show off your style with customizable faceplate designs.</p>
</div>



</div>

<hr></hr>

<div class="row nomaj marg-bot">
    <div class="col-md-3 col-12">

<div class="card cardboxes">
  <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/08/Screen-Shot-2018-08-09-at-5.50.07-PM.png" alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Music Inc. Features Stealth Sonics</h5>
    <p class="card-text stretch">Music Inc Magazine Editor Kasia Fejklowicz interviewed Stealth Sonics’ Co-Founder Dindae Sheena for their August issue. Thanks to Kasia and also to Dave Rat of Rat Sound and SoundTools for being part of this awesome article! Look out for it on www.musicincmag.com.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
    <div class="col-md-3 col-12">

    <div class="card cardboxes">
  <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/canjam.png" alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Stealth Sonics Takes Global Stage at CanJam London</h5>
    <p class="card-text stretch">Singapore-based music technology manufacturer to debut groundbreaking precision-tuned in-ear monitor systems.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
    <div class="col-md-3 col-12">

    <div class="card cardboxes">
  <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/05/bolg1.png" alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Mix Magazine Covers Stealth Sonics</h5>
    <p class="card-text stretch">Read article here: https://www.mixonline.com/technology/review-three-for-listening</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
    <div class="col-md-3 col-12">

    <div class="card cardboxes" >
  <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/05/ratty.jpg" alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Dave Rat of Rat Sound Gets Custom Stealth Sonics</h5>
    <p class="card-text stretch">Super excited to deliver Dave Rat @ratsound his custom impressions! #stealthsonics #inearmonitors #iems #customiems #custominears#custominearmonitors</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>

    </div>
</div>

</div>






            </body>
        );
    }
}


export default BackGround
