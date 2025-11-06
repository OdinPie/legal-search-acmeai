import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://agun-news-server.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
}

export default useAxios;