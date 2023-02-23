import React from 'react'
import './movies.css'
import MovieCard from "../Components/MovieCard"
import Search from '../Components/Search'


function Movies() {
  return (
    <div className='container'>
      <Search/>
      <div className='mov-container'>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
      </div>
    </div>
  )
}

export default Movies