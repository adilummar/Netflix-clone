import React,{useEffect,useState} from "react";
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import { imageUrl,Api_Key } from "../constants/constants";


function RowPost(props) {
  const [post,setPost] = useState([])
  const [urlId,seturlId] = useState('') 
  const [chName,setchName] = useState('hidden')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
        console.log(response.data.results)
        setPost(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then(response =>{
      console.log(response.data.results[0].key)
      seturlId(response.data.results[0].key)
      setchName('hidden'? 'show': 'hidden')
      // console.log(Ypost)
    })
  }

  return (
    
    <div className="row">
      <h2 className="title"> {props.title}</h2>
      <div className="posters">
        {
          post.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? "smallPoster":"poster"} src={`${imageUrl + obj.backdrop_path}`} alt="poster cover"/>
          )
        }
      </div>
      <Youtube opts={opts} videoId={urlId} className={chName}/>
    </div>
  );
}

export default RowPost;
