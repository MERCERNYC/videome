import axios from 'axios';

const KEY = "AIzaSyDfHFnxePSEE2G_l3YObRs0g6xCsz2wRhY";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
});