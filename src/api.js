const api_key = '6b63d0b60cb7a94839b3d170f580c2b8'
export const base_url = 'https://api.themoviedb.org/3'
export const image_url = 'https://api.themoviedb.org/t/p/original'

export const getPopularMovies = `${base_url}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`
