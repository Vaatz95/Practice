import React from "react";
import PropTypes from "prop-types";
//{} 필수
function Movie({ id, year, title, summary, poster }) {
    return (<div class ="movie">
            <img src= {poster} alt={title} title = {title}></img>


    <div class = "movie_data">
    <h4 class = "movie_title">{title}</h4>
    <h6 class =  'movie_year'>{year}</h6>
    <p class = "movie_summary">{summary}</p>
    </div>
    
    </div>
    )
  }

  Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

export default Movie;