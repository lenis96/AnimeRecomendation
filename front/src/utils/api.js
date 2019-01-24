import axios from 'axios'

export const getAnimes = () => {
  return axios.get('/api/anime')
}
