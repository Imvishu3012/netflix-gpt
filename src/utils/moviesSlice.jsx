import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:[],
        trailerVideo: null,
        TrendingMovies:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        }, addTrailer: (state,action)=>{
            state.trailerVideo = action.payload;
        },addTrendingMovies:(state,action)=>{
            state.TrendingMovies = action.payload;
        }

    }
})

export const {addNowPlayingMovies,addTrailer,addTrendingMovies}= moviesSlice.actions;
export default moviesSlice.reducer;