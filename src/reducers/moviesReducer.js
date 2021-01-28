const initState = {
  popular: [],
  searched: [],
}

export const getMovieReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return { ...state, popular: action.payload.popular }

      default : 
      return {...state}
  }
}
