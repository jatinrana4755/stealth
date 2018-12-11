import React, { Component } from 'react';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";
import './FacePlate.css'

export default class FacePlate extends Component {
        constructor(props){
            super(props);
            this.state= {
                base: '',
            }
            this.onClickDemo = this.onClickDemo.bind(this);
        }

   onClickDemo() {

    }
    render() {

        return (
            <div>
                <b><h4>Faceplate</h4></b>
                <div>
                <ul className="nav nav-pills" style={{fontSize:"15px", marginLeft:"20px", marginTop:"10px"}}>
                    <li className="active"><a data-toggle="pill" href="#premium">Premium</a></li>
                    <li><a data-toggle="pill" href="#standard">Standard</a></li>
                    <li><a data-toggle="pill" href="#custom">Custom</a></li>
                </ul>
                </div>
                <div className="tab-content">
                    <div id="premium" className="tab-pane fade in active">

                        <section>
                            <div className="row1">
                                <div className="row">
                                    <input onClick={this.onClickDemo} className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <img className="" style={{borderRadius:"50px", cursor:"pointer",  marginLeft:"10px"}} src={require("../../../assets/image/6.png")}/>
                                    <input className="btn" style={{backgroundColor: "pink", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "green", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "blue", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "black", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "white", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>

                                </div>
                                <div className="row">
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "orange", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "orange", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "orange", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "yellow", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>

                                </div>
                                <div className="row">
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "orange", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "yellow", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "orange", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>

                                </div>
                                <div className="row">
                                   <input className="btn" style={{backgroundColor: "yellow", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "orange", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "orange", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                    <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>

                                </div>
                            </div>
                    </section> <br/>

                    <section style={{border:"3px"}}>
                        <b><h4>Wood Faceplate</h4></b>
                            <div className="row row1">
                                <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "yellow", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "pink", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "green", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "blue", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "black", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "white", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>

                            </div>
                            <div className="row row1">
                                <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "yellow", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "pink", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                            </div>
                    </section>
                    <br/>
                    <section>
                        <h4>Wood Burl Collection</h4>
                        <div className="row row1">
                                <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "yellow", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "pink", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                            </div>
                    </section>

                    </div>

                    <div id="standard" className="tab-pane fade">
                        <section>
                        <b><h4>Wood Burl Collection</h4></b>
                        <div className="row row1">
                                <input className="btn" style={{backgroundColor: "red", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "yellow", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                                <input className="btn" style={{backgroundColor: "pink", borderRadius:"50px", width:"10px", height:"20px", padding:"10px", marginLeft:"10px"}}/>
                            </div>
                    </section>
                    </div>
                    <div id="custom" className="tab-pane fade">
                        <h3>Menu 2</h3>
                        <div class="iem-preview-main">
                        <img style={{display:""}} id="adel-mask-preload-left" src={require('../../../assets/image/6.png')}/>
                        <img style={{display:"none"}} id="adel-mask-preload-right" src="../img/adel_mask_right.png"/>
                        <canvas id="designer-preview" width="536" height="342"></canvas>
                        <canvas id="designer-artwork" width="536" height="342"></canvas>
                        <div class="artwork-handles iem left">
                            <div class="handle left-handle">
                                <span class="handle-corner"></span>
                            </div>
                        </div>
                        <div class="artwork-handles iem right">
                            <div class="handle right-handle">
                                <span class="handle-corner"></span>
                            </div>
                        </div>
                        <div class="iem-preview-warning">
                            Test Warning.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


