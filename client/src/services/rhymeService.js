import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/rhyme';

const getAll = (word) => {
  return axios.get(`${baseUrl}?word=${word}`).then();
};

export default { getAll };
