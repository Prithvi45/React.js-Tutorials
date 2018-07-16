import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerking-63b1a.firebaseio.com/'
});

export default instance;