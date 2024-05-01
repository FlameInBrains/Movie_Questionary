import axios from 'axios';

const apiKey = '853bb38b';

const movieEndpoint = params => `https://www.omdbapi.com/?s=${params.query}&apikey=${apiKey}`;

const apiCall = async (endpoint) => {
  const options = {
    method: 'GET',
    url: endpoint,
  }
  try {
    const response = await axios.request(options);
    return response.data;
  } catch(err) {
    console.log('Something went wrong', err);
    return null;
  }
}

export const fetchMovies = params => {
  return apiCall(movieEndpoint(params));
}