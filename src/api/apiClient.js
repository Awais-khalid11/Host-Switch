import { toast } from "react-toastify";
import { api } from "./axiosInstance";

export const getData = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const postData = async (url, data, config = {}) => {
  try {
    const headers =
      data instanceof FormData
        ? { ...config.headers }
        : {
            "Content-Type": "application/json",
            ...config.headers,
          };

    const response = await api.post(url, data, {
      ...config,
      headers,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const putData = async (url, data, config = {}) => {
  try {
    const headers =
      data instanceof FormData
        ? { ...config.headers }
        : {
            "Content-Type": "application/json",
            ...config.headers,
          };

    const response = await api.put(url, data, {
      ...config,
      headers,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteData = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  if (error.response) {
    toast.error(error.response.data?.message || "Something went wrong!");
  } else if (error.request) {
    toast.error("Network error. Please check your connection.");
  } else {
    toast.error("Unexpected error occurred.");
  }

  throw error;
};
