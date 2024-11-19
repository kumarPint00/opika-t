import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return [response.data]; 
  } catch (error) {
    throw error;
  }
};

export const submitData = async (data) => {
  try {
    
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
