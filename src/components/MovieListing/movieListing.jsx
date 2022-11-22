import React from 'react';
import Slider from "react-slick";
import {Settings} from "../../common/settings"
import {useSelector} from "react-redux";
import {getAllMovies, getAllShows} from "../../features/movies/movieslice"
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"


const Movielisting = () => {
    const movies= useSelector(getAllMovies);
    const shows= useSelector(getAllShows);
    
    
    
    let renderMovies, renderShows = "";

    renderMovies = movies.Response=== "True" ? (
      movies.Search.map((movie, index)=>{
        return (  
        <MovieCard key={index} data={movie}/>
        )
      })
    ): (
      <div className="movies__error"><h3>{movies.Error}</h3> </div>);

    renderMovies = movies.Response=== "True" ? (
     movies.Search.map((movie, index)=>{
        return (  
        <MovieCard key={index} data={movie}/>
          )
        })
      ): (
        <div className="movies__error"><h3>{movies.Error}</h3> </div>);

    renderShows = shows.Response=== "True" ? (
      shows.Search.map((movie, index)=>{
          return (  
          <MovieCard key={index} data={movie}/>
            )
          })
        ): (
          <div className="shows__error"><h3>{shows.Error}</h3> </div>);     
  return (

    <div className="movies__wrapper">
      <div className="movie__list">
      <h2> Movies</h2> 
      </div>
      <div className="movie__container">
        <Slider {...Settings}> {renderMovies} </Slider>
      </div>

      <div className="show__list">
      <h2> Shows </h2> 
      </div>
      <div className="show__container">
      <Slider {...Settings}>{renderShows}</Slider>
      </div>
    </div>
  );
};

export default Movielisting;