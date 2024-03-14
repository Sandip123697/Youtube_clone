const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'd5ef4446dfmshc9a4a36021cbe89p130de9jsne0c88f1075a5',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    console.log('API is working properly.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
