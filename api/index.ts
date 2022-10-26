import axios from 'axios';

const api = 'https://jsonplaceholder.typicode.com';

const getAxiosRequest = () => axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
  },
});

export default {
  getPosts() {
    const request = getAxiosRequest();

    return request.get(`${api}/posts`);
  },
};
