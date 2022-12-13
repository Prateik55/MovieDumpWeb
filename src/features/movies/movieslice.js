import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import movieApi from "../../common/Apis/movieApi";
import {APIKey} from "../../common/Apis/MovieAPIKeys"

// First, create the thunk
// A function that accepts a Redux action type string and a callback function that should return a promise.

// createAsyncThunk accepts three parameters: a string action type value, a payloadCreator callback, and an options object.

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", 
async(term)=>{

const response = await movieApi
        .get('?apikey='+APIKey+'&s=$'+term+'&type=movie'+"/");
    // dispatch(addMovies(response.data));
     return(response.data);
});

export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows", 
async(term)=>{
 const response = await movieApi
    .get('?apikey='+APIKey+'&s=$'+term+'&type=series'+"/");
     return(response.data);
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movies/fetchAsyncMovieOrShowDetail", 
async(id)=>{
    const response = await movieApi
    .get(`?apiKey=${APIKey}&i=${id}&plot=full`);   
     return(response.data);
}
);

// A state slice requires three things 
// 1. A String Name
// 2. Initial State Value
// 3. One or more Reducer Functions to define how the state can be updated

const initialState = {
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{

        // Action creators are auto-generated for each case reducer function

        // addMovies:(state,{payload})=>{
        //     state.movies=payload;
        // },
        removeSelectedMovieOrShow:(state) => {
            state.selectedMovieOrShow={};
        }
        
    },
    // Add reducers for additional action types here, and handle loading state as needed
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state, {payload})=>{
            console.log("fetched Successfully");
            return({...state,movies:payload})
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected");
           
        },
        [fetchAsyncShows.fulfilled]:(state, {payload})=>{
            console.log("fetched Successfully");
            return({...state,shows:payload})
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state, {payload})=>{
            console.log("fetched Successfully");
            return({...state,selectedMovieOrShow:payload})
        },

    }
});
// export const {addMovies}= movieSlice.actions;
export const {removeSelectedMovieOrShow}= movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies=(state)=> state.movies.movies ;
export const getAllShows=(state)=> state.movies.shows ;
export const getSelectedMovieOrShow=(state)=>state.movies.selectedMovieOrShow;
