import React, { useEffect } from 'react'
import {useParams} from "react-router"
import {useDispatch, useSelector} from "react-redux"
import {BsFillStarFill,BsFillHandThumbsUpFill,BsFilm,BsCalendarDateFill} from "react-icons/bs"
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieslice';
import "../MovieDetails/MovieDetail.scss"

const MovieDetail = () => {
  const {imdbID}= useParams();
  const dispatch =useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data)
  useEffect(()=>{
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return(()=>{
      dispatch(removeSelectedMovieOrShow())
    })
  },[dispatch, imdbID]);
  return (
    <div className="movie__section">
    {Object.keys(data).length===0
    ?(<div>Loading</div>)
    :
    (<>
      <div className="section__left">
        <div className="movie__title">{data.Title}</div>
        <div className="movie__rating">
          <span>
            IMDB Ratings <i className="fa fa-star"><BsFillStarFill/></i>: {data.imdbRating}
          </span>
          <span>
            Votes <i className="fa fa-thumbs-up"><BsFillHandThumbsUpFill/></i>: {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"><BsFilm/></i>: {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calender"><BsCalendarDateFill/></i>: {data.Year}
          </span>
        </div>
        <div className="movie__plot">
          {data.Plot}
        </div>
        <div className="movie__info">
          <div>
            <span>Director </span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres </span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages </span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Cirtification </span>
            <span>{data.Rated}</span>
          </div>
        </div>
      </div>
      <div className="section__right">
        <img src={data.Poster} alt={data.Title}></img>
      </div>
   </>)}
    </div>
  )
}

export default MovieDetail