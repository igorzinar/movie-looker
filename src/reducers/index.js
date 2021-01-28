import { combineReducers } from 'redux'
import { getMovieReducer } from './moviesReducer'

const rootReducer = combineReducers({
    movies:getMovieReducer

})


export default rootReducer