import React, { useEffect, useState } from 'react'
import './Details.css'
import { Link, useLocation } from 'react-router-dom'


function Details() {
  const [logData, setLogData] = useState([])

  useEffect(() => {
    async function loadData() {
      const res = await fetch(`http://www.omdbapi.com/?i=${scLog.imdbID}&apikey=2cf3c2a6&`)
      const resJSON = await res.json()
      if (resJSON) {
        setLogData(resJSON)
      }
    }
    loadData()
  }, [])

  let data = useLocation()
  const scLog = data.state.name.movie

  return (

    <div className="detail">
      <div className="detail__movies">
          <div className="detail__container">
            <div className="detail__log">
            <img className="detail__movie" src={scLog.Poster} alt={scLog.Title}/>
            <div className="detail__movie__title">{scLog.Title}</div>
            <div className="detail_movie_Year">{scLog.Year}</div>
            <div className="detail__link">
            </div>

            <Link to={{
              pathname: '/home',
              state: {id: {logData}}
            }}>
              <button  className="detail__button"> Back to home </button>
            </Link>
            </div>

          </div>
        <div className="detail__all">
          <h3 className="detail__color">Title</h3>
          <p className="detail__size">{logData.Title}</p>
          <h3 className="detail__color">Runtime</h3>
          <p className="detail__size">{logData.Runtime}</p>
          <h3 className="detail__color">Director</h3>
          <p className="detail__size">{logData.Director}</p>
          <h3 className="detail__color">Actors</h3>
          <p className="detail__size">{logData.Actors}</p>
          <h3 className="detail__color">Genre</h3>
          <p className="detail__size">{logData.Genre}</p>
          <h3 className="detail__color">Type</h3>
          <p className="detail__size">{logData.Type}</p>
          <h3 className="detail__color">IMDB Rating</h3>
          <p className="detail__size">{logData.imdbRating}</p>
          <h3 className="detail__color">Country</h3>
          <p className="detail__size">{logData.Country}</p>
        </div>
      </div>
    </div>
  );
}
export default Details
