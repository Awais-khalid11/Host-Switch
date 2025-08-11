import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";
 
const handleError = (error) => {   // handleError handles  errors globally for all API calls.
  if (!error?.response) {
    console.log("Network error:", error);  // agr internet ka issue h to wo show karwa do
    toast.error("Network error occurred")
    throw new Error("Network error occurred");
  }
 
  console.log(error.response.data);
  const status = error.response.status;  // status code show karwa da like 401 500
  const responseData = error.response.data;
 
  const errorMessage =
    responseData?.errors?.[0]?.message ||   // message show karwata h that is common in API
    responseData?.message ||
    "Something went wrong"; // default message
    toast.error("Something went wrong")
 
  console.log("API Error:", errorMessage);
 
  if (status === 401) { 
    localStorage.removeItem("token"); // a 401 Unauthorized, it removes the token (maybe expired session).
  }
 
  throw new Error(errorMessage);  // throws the readable error message.

};
 
export const apiClient = {
  get: async (url, config) => {
    try {
      const response = await axiosInstance.get(url, config);
      const payload = response.data?.payload ?? response.data;
      return payload;
    } catch (error) {
      handleError(error);
    }
  },
 
  post: async (url, data = {}, config) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      const payload = response.data?.payload ?? response.data;
      toast.success("data added succesfully")
      return payload;
    } catch (error) {
      handleError(error);
    }
  },
 
  put: async (url, data = {}, config) => {
    try {
      const response = await axiosInstance.put(url, data, config);
      const payload = response.data?.payload ?? response.data;
      return payload;
    } catch (error) {
      handleError(error);
    }
  },
 
  patch: async (url, data = {}, config) => {
    try {
      const response = await axiosInstance.patch(url, data, config);
      const payload = response.data?.payload ?? response.data;
      return payload;
    } catch (error) {
      handleError(error);
    }
  },
 
  delete: async (url, config) => {
    try {
      const response = await axiosInstance.delete(url, config);
      const payload = response.data?.payload ?? response.data;
      return payload;
    } catch (error) {
      handleError(error);
    }
  },
}