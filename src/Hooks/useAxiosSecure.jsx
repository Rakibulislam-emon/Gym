// Setting up Axios in a React.js project
import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

// Add global request interceptor
axiosSecure.interceptors.request.use(
  (config) => {
    // Modify request config here, e.g., add headers
    const token = localStorage.getItem('token');
    if(token){
    
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add global response interceptor
axiosSecure.interceptors.response.use(
  (response) => {
    // Modify response data here, if needed
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const useAxiosSecure = () => {
  return axiosSecure;
}
export default useAxiosSecure;