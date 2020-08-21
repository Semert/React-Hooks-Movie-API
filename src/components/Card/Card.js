import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const compare = (a, b) => {
  const bandA = a.Year
  const bandB = b.Year

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

function Cardy({ data }) {
  return (
    <div className="row">
      {console.log(data.sort(compare))}
      <div className="row__movies">
        {data.map(movie => (
          <div className="row__container">
          <img className="row__movie" src={movie.Poster} alt={movie.Title}/>
          <div className="row__movie__title">{movie.Title}</div>
            <div className="row_movie_Year">{movie.Year}</div>
            <div className="row_movie_ımdbID"> ImdbID {movie.imdbID}</div>
            <Link to={{
              pathname: '/details',
              state: {name: {movie}}
            }}>
              <button  className="row__button"> Learn More </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cardy
