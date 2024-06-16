import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
function Home(){
    return(
        <>
<section class="hero font-0">
        <video
          class="bg-video"
          autoplay
          muted
          loop
          src="assets\media\gym-video.mp4"
        ></video>
        <div class="overlay center column">
          <h3 class="hero-subheading">Work Harder, Get Stronger</h3>
          <h2 class="hero-heading">
            Easy with our <strong class="text-primary">gym</strong>
          </h2>
          <a class="btn" href="#">Become a member</a>
        </div>
      </section>
</>
    )
}

export default Home