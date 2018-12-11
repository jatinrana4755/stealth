import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        const style={
          width:"70px",
          height:"70px",
          marginLeft:"40px",
        }
      return (
          <header>

  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">

    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <span class="sr-only">Toggle navigation</span>

        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
 
      <a class="navbar-brand" href="#">
      <img class="logo" src="https://stealthsonics.com/wp-content/themes/animo/img/logo/logo.png"></img>
      </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav back">
      <li ><a class="color-black" href="/home">Home</a></li>
      <li><a  class="dropdown-toggle color-black" id="dropdownMenu2" data-toggle="dropdown">Team-Stealth</a>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><a href="/about">About-US</a></li>
    <li><a href="/artist">Artists</a></li>
  </ul></li>
      <li><a  class="dropdown-toggle color-black" id="dropdownMenu1" data-toggle="dropdown">Products</a>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="/c2series">C2 Driver-custom</a></li>
    <li><a href="/c4series">C4 Driver-custom</a></li>
    <li><a href="/c9series">C9 Driver-custom</a></li>
    <li><a href="/u2series">U2 Driver-Universal</a></li>
    <li><a href="/u4series">U4 Driver-Universal</a></li>
    <li><a href="/u9series">U9 Driver-Universal</a></li>
  </ul>
      </li>
      <li><a class="color-black" href="/custom">CustomOrder</a></li>
      <li><a class="color-black" href="/thesciencce">The Science</a></li>
      <li><a class="color-black" href="/news">News</a></li>
      <li><a class="color-black" href="/mediakit">Media-Kit</a></li>
      <li><a class="color-black" href="/contact">Contact</a></li>
      <li><a  class="color-black" href="/cart">Add-to-Cart</a></li>
    </ul>
    </div>
  </div>
</nav>








          </header>
      );
    }
}

export default Navbar