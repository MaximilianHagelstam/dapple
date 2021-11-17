import axios from 'axios';

const baseUrl = 'https://dapple-api.herokuapp.com/api/rhyme';

const getAll = async (word) => {
  const res = await axios.get(`${baseUrl}?word=${word}`);
  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
