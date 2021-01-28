const initState = {
  popular: [],
  searched: [],
}

export const getMovieReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE':
      return { ...state, popular: action.dispatch.popular }
  }
}
