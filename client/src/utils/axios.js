import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost3000/api',
});

export default AxiosInstance;
