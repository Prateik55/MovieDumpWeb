import {configureStore} from "@reduxjs/toolkit";
// import the reducer function from the slice and add it to our store. 


import movieReducer from "./movies/movieslice"
export const store = configureStore ({
        // root reducer
    reducer:{
        movies:movieReducer,
        // By defining a field inside the reducers parameter, we tell the store to use this slice reducer function to handle all updates to that state.
    },
    });