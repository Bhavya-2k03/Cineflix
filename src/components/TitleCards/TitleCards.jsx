import React, { useEffect, useState } from 'react'
import  './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {

  const [apiData, setApiData]= useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTFkYmVmMGNlZDhmNzk2NzIyNzlhODg1MGYxZGI2MiIsIm5iZiI6MTczOTEwNTIzNy40MDgsInN1YiI6IjY3YThhM2Q1NThkOTNjZWZlZGM4ZGUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pd7bvoaef5rroy87FFJQPx0b93CWsaSp7YfXwsPb0f0'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  },[])


  return (
    <div className='title-cards'>
        <h2>{title}</h2>
        <div className="card-list">
          {
            apiData.map((card,index)=>{
              return <Link to={`/player/${card.id}`} className='card' key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
                </Link> 
            })
          }
        </div>
    </div>
  )
}

export default TitleCards
