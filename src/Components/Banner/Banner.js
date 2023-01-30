import React from 'react'
import './Banner.css'
import {Api_Key,imageUrl} from '../constants/constants'
import axios from '../../axios'
import { useEffect,useState } from 'react'


function Banner() {
  const [movie,setMovie] = useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`).then((response)=>{
      console.log(response.data.results)
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
    })
  },[])
  return (
      <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className="banner">
        <div className="content">
            <h1 className="title">{movie.title? movie.title : movie.name}</h1>
            <div className='banner-buttons'>
                <button className="button">play</button>
                <button className="button">my List</button>
            </div>
            <p className='description'>{movie.overview}</p>
        </div>
        <div className="fade-bottom"></div>
      </div>
  )
}

export default Banner
