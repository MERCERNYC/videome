import axios from 'axios';

const KEY = "AIzaSyDJdGbEfPHac5xlRu9L4SKrudsyPKH7j_c";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
});
