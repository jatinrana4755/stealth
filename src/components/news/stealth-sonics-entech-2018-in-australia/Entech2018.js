import React, {Component} from 'react';

import myImage from '../../../assets/image/australia-555x464.png';

class  Entech2018 extends Component {

    render() {

        var column1 ={
            float: 'left',
            width: '33.33%',
            padding: '5px'
        }

        var aftr= {
            content: "",
            clear: 'both',
            display: 'table',
            width: '1000px'
        }
        var my ={

        };


        return(
            <body>
            <article>

                <div id="time" style={{paddingTop:"90px"}}>

                    <a style={{marginTop:"20px"}}><time  dateTime="2018-02-22">FEBRUARY 22, 2018</time></a>

                    <h1 style={{fontSize:"50px", marginTop:"20px", textDecoration: "none",cursor: "default"}}><a href="/home"><strong>Stealth Sonics @ Entech 2018 in Australia</strong></a></h1>
                    <a><span style={my}>By</span></a>
                    <a id ="font" href="Chandra Lynn">Chandra Lynn</a>
                    <a><span style={my}>in</span></a>

                    <strong><a href=" " rel="category tag">event</a></strong>
                    <strong><a href=" " rel="category tag">Homepage</a></strong>
                    <strong><a href=" " rel="category tag">News</a></strong>
                    <strong><a href=" " rel="category tag">Uncategorized</a></strong>
<br/><br/><br/>

                    <tr><td>

                        <div id="image">
                            <img src={myImage} style={{width:"700px"}} />

                        </div>
                        <br/>



                        <div className="b-example">
                            <div className="page-header">

                                <h1 style={{margin:"70px"}}><small><p style={{fontSize:'20px'}}>Hello Australia! The Stealth Sonics team have landed down under and we are super excited to meet you!</p>
<br/>
                                    <p style={{fontSize:'20px'}}>Here are our co-founders Dindae and Balvinder with our on-site audiologist, Hung, kicking off our Australian Roadshow at Entech 2018. Starting today in Melbourne – We had a great first day! Stay tuned for more updates!</p>
<br/>
                                    <p style={{fontSize:'20px'}}> <span href="#stealthsonics" style={{color:"#a2c5db"}}>#stealthsonics</span><span href="#inearmonitors" style={{color:"#a2c5db"}}>#inearmonitors </span><span href=" #australia" style={{color:"#a2c5db"}}>#australia</span><span href="#melbourne" style={{color:"#a2c5db"}}>#melbourne</span><span href="#entech" style={{color:"#a2c5db"}}>#entech </span>— with Dindae Sheena and <span href="Balvinder Singh" style={{color:"#a2c5db"}}>Balvinder Singh</span></p></small></h1>


                            </div>
                        </div>

                        <br/><br/><br/><br/>





                    </td></tr>






                </div>
            </article>
            </body>
        )
    }

}

export default Entech2018