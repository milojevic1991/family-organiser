import axios from 'axios';

const instance = axios.create({

   baseURL:'https://family-organiser.firebaseio.com/'
})

export default instance;