import React from 'react'
import "../section1/index.scss"

function Index() {
  return (
    <div className='section1-main-div'>
      <video className='video-main'
      autoPlay
      loop
      muted
      >
 <source src="/BgVideo.mp4"></source>
      </video>
 <h2>Welcome to the <span>capital of capital</span></h2>
<a className="btn btn-outline-primary b2">GET YOUR TICKET</a>
 <p className="island">Al Maryah Island</p>
<p className="island1">ADGM Square</p>
<p className="island2">Abu Dhabi</p>
<div className='line'></div>
<p className="dates">09-12</p>
<p className='month'>December 2024</p>
<p className='daystogo'>100 Days to go</p>
<span className='adfw-span'>#ADFW2024</span>
<div className='image'>
<img src="/adgm.png" style={{ width: '150px', height: 'auto' }} ></img>
</div>
</div>
)
}

export default Index;
