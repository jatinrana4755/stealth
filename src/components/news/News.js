import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardDeck,
    CardTitle, CardSubtitle, Button,CardColumns,row, Col} from 'reactstrap';
import './News.css';

const cardtitle={
    fontFamily: 'Poppins',
margin: '10px',
fontSize: '10px',
backgroundColor: '#F9F9F9',
};
const paratitle={
    margin:'5px',
    textalign:'center',
    overflow:'hidden'
};
const paratext={
    margin:'5px',
    fontWeight:'bold'

};

const divStyle = {
    marginLeft: '90px',
    marginRight:'90px',

};

const imgstyle = {
    height: '180px',
}

class News extends Component {
    constructor(props) {
        super(props);
    }
	render() {


		return(

        
        <div class="container nopad">

        <div class="jumbo">

        <h3 class="newshead">Stealth Sonics News</h3>
        
        </div>

        <div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/08/Screen-Shot-2018-08-09-at-5.50.07-PM.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Music Inc. Features Stealth Sonics</h5>
        <p class="card-text stretch">Music Inc Magazine Editor Kasia Fejklowicz interviewed Stealth Sonics’ Co-Founder Dindae Sheena for their August issue. Thanks to Kasia and also to Dave Rat of Rat Sound and SoundTools for being part of this awesome article! Look out for it on www.musicincmag.com</p>
        <a href="https://stealthsonics.com/musicinc/" class="btn btn-primary">Read More</a>
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


        <div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/05/major_hifi.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Major Hifi Covers Stealth Sonics Launch</h5>
        <p class="card-text stretch">See article here: http://majorhifi.com/stealth-sonics-iems/</p>
        <a href="https://stealthsonics.com/major-hifi-covers-stealth-sonics-launch/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/troy_vincent.jpg" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Tony Vincent Takes Stealth Sonics on the Road</h5>
        <p class="card-text stretch">Super exciting to have Tony Vincent rocking out live with his personalised custom @stealthsonics C9 in-ear-monitors!!! Glad you like them Tony! Have a great tour!</p>
        <a href="https://stealthsonics.com/tony-vincent-takes-stealth-sonics-on-the-road/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/blog4.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics @ Sound:Check XPO in Mexico City</h5>
        <p class="card-text stretch">Our booth was jam packed at the Sound:Check XPO in Mexico City! We are happy to make so many new friends while getting their impressions made by our audiologist! @soundcheckxpo</p>
        <a href="https://stealthsonics.com/stealth-sonics-soundcheck-xpo-in-mexico-city/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/drummrblog.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Drummer Mauricio Claveria @ Sound:Check XPO</h5>
        <p class="card-text stretch">We were so excited to have super drummer Mauricio Claveria with us who had his custom in-ear impressions made at the Sound:Check XPO! #stealthsonics #inearmonitors #mexico</p>
        <a href="https://stealthsonics.com/drummer-mauricio-claveria-soundcheck-xpo/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>


<div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/palmblog.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Steath Sonics @ Palm Expo in Mumbai, India</h5>
        <p class="card-text stretch">What an amazing soft launch we had last week Mumbai, India! Had an great response from the ProAudio, Recording and the Head-Fi/Audiophile community</p>
        <a href="https://stealthsonics.com/6609-2/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/canjam1debut.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics Debuts at CanJam Global!</h5>
        <p class="card-text stretch">Stealth Sonics makes its debut at CanJam Singapore and SoCal! “We just cannot believe how much the visitors were just blown away by our IEMs,” says Dindae Sheena, co-founder of Stealth Sonics. “End users, dealers and distributors from around the Asian region showed up to a packed event.</p>
        <a href="https://stealthsonics.com/stealth-sonics-debuts-at-canjam-global/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/canjmasinapor.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics @ CanJam Singapore</h5>
        <p class="card-text stretch">Stealth Sonics made its debut at CanJam Singapore today.</p>
        <a href="https://stealthsonics.com/stealth-sonics-canjam-singapore/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/australia.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics @ Entech 2018 in Australia</h5>
        <p class="card-text stretch">Hello Australia! The Stealth Sonics team have landed down under and we are super excited to meet you!</p>
        <a href="https://stealthsonics.com/stealth-sonics-entech-2018-in-australia/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>


<div class="row nomaj1">
        
        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/kenny.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Kenny Moran @ NAMM 2018</h5>
        <p class="card-text stretch">The awesome Kenny Moran @kmomix with our Co-Founder Dindae @dindae.sheena at our NAMM booth. #namm #nammshow #namm2018 #nammshow2018 #throwbackthursday#inearmonitors #inearmonitor #iems #custominears #customiems#custominearmonitors #universalinearmonitor #inears #stealthsonics#singers #musician #guitarist #musicproducer #musicengineers#earthwindandfire #musicmusicmusic #audiophile #musiclovers #sikh#sikhs #singh #sardar #california #tbt #tbthursday</p>
        <a href="https://stealthsonics.com/kenny-moran-namm-2018/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/lanise.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Drummer Lanise Hughes @ NAMM</h5>
        <p class="card-text stretch">So awesome to have Lanise Hughes drummer here with us at NAMM! He had his custom in ear impressions done here at our booth by our on site audiologist. #stealthsonics #namm2018 #namm #nammshow#nammshow2018 #LA #losangeles #anaheim#inearmonitors #iems #customiems #custominears#custominearmonitors #universalinearmonitor#soundengineer #rnbmusic #rnb #iswear #musician#singer #follow #all4one #musicproducer#musicengineer #sikh #lamusic #singh #laproducer#californiamusic #eargasmic</p>
        <a href="https://stealthsonics.com/drummer-lanise-hughes-namm/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/SoundGirls.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Soundgirls.org Raves About Stealth Sonics</h5>
        <p class="card-text stretch">Becky Pell, monitor engineer with over 20 years of experience in live sound, wrote the following article about Stealth Sonics’ entry into the IEM Marketing</p>
        <a href="https://stealthsonics.com/soundgirls-org-raves-about-stealth-sonics/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-3 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/04/bollywood.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Stealth Sonics is a Bollywood Hit at PALM Expo, Bombay, India</h5>
        <p class="card-text stretch">We made some serious waves at Palm Expo and were a big hit with movers and shakers in the Bollywood music scene!!! Our initial showing to industry leaders has been amazingly well received.</p>
        <a href="https://stealthsonics.com/stealth-sonics-is-a-bollywood-hit-at-palm-expo-bombay-india/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>


<div class="row nomaj1">
        
        <div class="col-md-6 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/nashville-1.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-title">Going to Summer NAMM?</h5>
        <p class="card-text stretch">We are landing in Nashville for meetings and demonstrations of our new in-ear monitoring systems throughout the show. If you’d like to say hi and get a demo, email Chandra Lynn at Chandra@glowmarketing.com. We will also be attending PMC Speakers’ Open House Party on Thursday Night. If you’d like to go, check out https://pmcnashville2017.eventbrite.com Have […]</p>
        <a href="https://stealthsonics.com/going-to-summer-namm/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        <div class="col-md-6 col-12">
        <div class="card cardboxes">
        <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/ss_FB.png" alt="Card image cap"></img>
        <div class="card-body">
        <h5 class="card-titleStealth Sonics is Now on Facebook and Instagram"></h5>
        <p class="card-text stretch">Join our growing audio community to keep up with what’s new with us, our users and in-ear technology. As always, we’d love to hear from you and track your work so feel free to post and message us. Please ‘Like’ and ‘Follow” us here: http://www.facebook.com/stealthsonics http://www.instagram.com/stealthsonics</p>
        <a href="https://stealthsonics.com/stealth-sonics-is-now-on-facebook-and-instagram/" class="btn btn-primary">Read More</a>
        </div>
        </div>
        </div>

        </div>





        </div>






        );
	}
}
export default News