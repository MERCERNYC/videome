import axios from 'axios';

const KEY = "AIzaSyBuVnE0xB8mvJfbzGD-3UjQl78cs-RDFfo";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
});
