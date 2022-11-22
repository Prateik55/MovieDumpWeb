import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import MovieListing from "../MovieListing/movieListing";

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieslice';

const Home = () => {
    const movieText = "Harry";
    const showText = "Friends";
    const dispatch = useDispatch();
  useEffect(() => {
   
    // const fetchMovies = async () => {
      // moving this to asyncThunk 
      // const response = await movieApi
      //   .get('?apikey='+APIKey+'&s=$'+movieText+'&type=movie')
      //   .catch((err) => {
      //     console.log("Err:", err);

      //   });
      // dispatch(addMovies(response.data))
    // }
      // fetchMovies();
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
  },[dispatch]);

  
  return (
    <div>
      <div className="banner__img">
        <MovieListing />
      </div>
    </div>

  )
}

export default Home