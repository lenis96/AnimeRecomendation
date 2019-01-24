import axios from 'axios'

export const getAnimes = () => {
  return axios.get('/api/anime')
}

export const getAnimeById = (id) => {
  return axios.get(`/api/anime/${id}`)
}

export const createAnime = (anime) => {
  return axios.post('/api/anime', anime)
}

export const updateAnimeById = (id, anime) => {
  return axios.put(`/api/anime/${id}`, anime)
}

export const deleteAnimeById = (id) => {
  return axios.delete(`/api/anime/${id}`)
}
