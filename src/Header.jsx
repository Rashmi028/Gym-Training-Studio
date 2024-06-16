import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Header(){
 return(
    <>
     <header class="navbar">
      <div class="container flex justify-between item-center">
        <a class="brand" href="#">
          <h1>Training <strong class="text-primary">Studio</strong></h1>
        </a>
        <nav>
          <ul class="flex item-center nav-menu">
            <li class="nav-menu-item">
              <a class="active" href="#">Home</a>
            </li>
            <li class="nav-menu-item">
              <a href="#program">About</a>
            </li>
            <li class="nav-menu-item">
              <a href="#classes">Classes</a>
            </li>
            <li class="nav-menu-item">
              <a href="#schedule">Schedule</a>
            </li>
            <li class="nav-menu-item">
              <a href="#contact">Contact</a>
            </li>
            <li class="nav-menu-item">
              <a class="btn" href="#">Signup</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
 )

}

export default Header