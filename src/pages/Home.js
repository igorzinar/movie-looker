import React, { useEffect } from 'react'
import Movie from '../components/Movie'

import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../actions/moviesAction'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  const { popular, searched } = useSelector((state) => state.movies)
  return (
    <MovieList>
      <h2>Popular Movies</h2>
      <Movies>
        {popular.map((movie) => (
          <Movie
            release={movie.release_date}
            image={movie.poster_path}
            name={movie.title}
            description={movie.overview}
            vote={movie.vote_average}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </Movies>
    </MovieList>
  )
}

const MovieList = styled(motion.div)`
  padding: 0 3rem 1rem;
`

const Movies = styled(motion.div)`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`
export default Home
