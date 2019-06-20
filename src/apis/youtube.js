import axios from 'axios';

const KEY = 'AIzaSyCoQgjpYODDP9MrPSs1pNsQNEcePBR1P8A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
