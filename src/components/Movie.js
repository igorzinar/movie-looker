import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { image_url } from '../api'
const Movie = ({ release, id, name, image, vote, description }) => {
  const xMove = Math.random() * 500
  return (
    <StyledMovie
      initial={{ scale: 0.3, x: '100vw' }}
      animate={{ scale: 1, x: 0 }}
    >
      <h1>{name}</h1>
      <p>Release: {release}</p>
      <p>IMDb: {vote}</p>
      <img src={`https://image.tmdb.org/t/p/original/${image}`} alt={name} />
    </StyledMovie>
  )
}

const StyledMovie = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    min-height: 40vh;
  }
`
export default Movie
