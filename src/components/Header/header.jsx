import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import {  fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieslice';
import user from "../../images/user.png"
import "./header.scss"

const Header = () => {
  const [term, setTerm]= useState("");
  const dispatch = useDispatch();
  const submitHandler= (e)=>{
    e.preventDefault();
    console.log(term)
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
    
  }
  return (

    <div className="header">
    
      <div className="logo"> <Link to="/"> MovieDump </Link></div>
      <div className="search__bar">
        <form onSubmit= {submitHandler}>
          <input type="text" value = {term} placeholder="Search movies or shows" onChange={(e)=>setTerm(e.target.value)}/>

          <button type ="submit">
          <i className= "fa fa-search">
          <FaSearch/>
          </i>
          </button>
        </form>
      </div>
   
      <div className="user__image">
        <img src={user} alt="user"></img>
      </div>
    </div>
  )
}

export default Header;