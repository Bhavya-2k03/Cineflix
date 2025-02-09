import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const id=useParams();
  const navigate=useNavigate();
  // console.log("id: ", id['id'])
  // console.log(`https://api.themoviedb.org/3/movie/${id['id']}/videos?language=en-US`)
  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTFkYmVmMGNlZDhmNzk2NzIyNzlhODg1MGYxZGI2MiIsIm5iZiI6MTczOTEwNTIzNy40MDgsInN1YiI6IjY3YThhM2Q1NThkOTNjZWZlZGM4ZGUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pd7bvoaef5rroy87FFJQPx0b93CWsaSp7YfXwsPb0f0'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id['id']}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer"  allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
 