import axios from "axios";
 
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,  // VITE_BASE_URL ya hum na apni api k link ka name rukha h .env file m
});
axiosInstance.interceptors.request.use(   // interceptor hr request sa phlay check krta h k token h ya ni
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;



// import.meta.env is how you access env variables in Vite.

// What is an Interceptor?
// Interceptor means: “Hook” before every request goes out.
// Yani:
// Har request se pehle check hoga: kya token present hai?