import React, { Component } from 'react';
import './CustomOrder.css';
import FacePlate from "./facePlate/FacePlate";
import banner from '../../assets/image/banner.png';
import c2 from '../../assets/image/c2.png';
import c4 from '../../assets/image/c4.png';
import c9 from '../../assets/image/c9.png';


class CustomOrder extends Component {
    render() {
        return(

      
        <div class="container-fluid nopm">
        <img class="fit-img" src={banner}/>

        <div class="row">
        <div class="col-md-4">
        <a href=""><p class="pos-cent">
        <img class="fit-btn" src={c2}></img>
        </p>
        </a>
        </div>
        <div class="col-md-4">
        <a href=""><p class="pos-cent">
        <img class="fit-btn" src={c4}></img>
        </p>
        </a>
        </div>
        <div class="col-md-4">
        <a href=""><p class="pos-cent">
        <img class="fit-btn" src={c9}></img>
        </p>
        </a>
        </div>
        </div>
        </div>
        



           
        )
    }
}
export default CustomOrder;