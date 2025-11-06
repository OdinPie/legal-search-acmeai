import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://'
})

const useAxios = () => {
    return axiosPublic;
}

export default useAxios;