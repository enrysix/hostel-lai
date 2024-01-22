import { api } from './http'

export const getNowPlaying = () => api.get("api/now_playing")

export const getPopular = () => api.get('api/popular')

export const getCredits = (movieId: Number) => api.get(`api/${movieId}/credits`)