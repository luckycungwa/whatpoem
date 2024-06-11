// services/api.js
import axios from 'axios';

const BASE_URL = 'https://poetrydb.org';

export const getAuthors = async () => {
  const response = await axios.get(`${BASE_URL}/author`);
  return response.data.authors;
};

export const getRandomPoems = async () => {
  const response = await axios.get(`${BASE_URL}/random/10`);
  return response.data;
};

export const getPoemsByAuthor = async (author) => {
  const response = await axios.get(`${BASE_URL}/author/${author}`);
  return response.data;
};

export const searchPoemsByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/theme/${category}`);
  return response.data;
};

export const getPoemByTitle = async (title) => {
  const response = await axios.get(`${BASE_URL}/title/${title}`);
  return response.data[0]; // get first poem with this title
};
