import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-a4db8.firebaseio.com/',
});

export default instance;
