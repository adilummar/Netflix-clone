import React from 'react'
import './Banner.css'
function Banner() {
  return (
    
      <div className="banner">
        <div className="content">
            <h1 classname="title">movie name</h1>
            <div className='banner-buttons'>
                <button className="button">play</button>
                <button className="button">my List</button>
            </div>
            <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam dicta odit expedita sit ullam.</p>
        </div>
        <div className="fade-bottom"></div>
      </div>
  )
}

export default Banner
