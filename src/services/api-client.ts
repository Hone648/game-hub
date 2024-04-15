import axios, {CanceledError} from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'edfc71b278e6411e813499808fd2d3c5'
    }
})

