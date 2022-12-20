import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://clouds11sem.cf/todo/api',
    //baseURL: 'http://localhost:9090/todo/api',
    timeout: 5000
  });