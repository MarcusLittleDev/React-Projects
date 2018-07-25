import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-35d4e.firebaseio.com/'
});

export default instance;