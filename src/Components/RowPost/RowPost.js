import React,{useEffect,useState} from "react";
import './Rowpost.css'
import axios from '../../axios'
import { imageUrl } from "../constants/constants";


function RowPost(props) {
  const [post,setPost] = useState([])
  useEffect(()=>{
    axios.get(props.url).then(response=>{
        console.log(response.data.results)
        setPost(response.data.results)
    })
  },[])


  return (
    
    <div className="row">
      <h2 className="title"> {props.title}</h2>
      <div className="posters">
        {
          post.map((obj)=>
            <img className={props.isSmall? "smallPoster":"poster"} src={`${imageUrl + obj.backdrop_path}`} alt="poster cover"/>
          )
        }
      </div>
    </div>
  );
}

export default RowPost;
