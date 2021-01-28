import axios from 'axios'
import { getMovieReducer } from '../reducers/moviesReducer'
import { getPopularMovies } from '../api'

export const getMovies = () => async (dispatch) => {
  const moviesData = await axios.get(getPopularMovies)

  dispatch({
    type: 'FETCH_MOVIES',
    payload: {
      popular: moviesData.data.results,
    },
  })
}
