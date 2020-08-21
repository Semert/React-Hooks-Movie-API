import axios from 'axios';

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=2cf3c2a6';

export const fetchData = async (country) => {
  try {
    const { data } = await axios.get(url);

    return { data };
  } catch (error) {
    return error;
  }
};
