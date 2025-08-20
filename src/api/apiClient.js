
import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";
import { config } from "zod";

const handleError = (error) => {
  // handleError handles  errors globally for all API calls.
  if (!error?.response) {
    console.log("Network error:", error); // agr internet ka issue h to wo show karwa do
    toast.error("Network error occurred");
    throw new Error("Network error occurred");
  }
};


  console.log(error.response.data);

  const status = error.response.status; // status code show karwa da like 401 500
  const responseData = error.response.data;

  const errorMessage =
    responseData?.errors?.[0]?.message || // message show karwata h that is common in API
    responseData?.message ||
    "Something went wrong";

  // Show actual error in toast
  toast.error(errorMessage);

  console.log("API Error:", errorMessage);

  if (status === 401) {
    localStorage.removeItem("token"); // a 401 Unauthorized, it removes the token (maybe expired session).
  }
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
      return payload
    } catch (error) {
      handleError(error)
    }
  },  

  // post: async (url, data = {}, config) => {
  //   try {
  //     const response = await axiosInstance.post(url, data, config);
  //     const payload = response.data?.payload ?? response.data;
  //     return payload;
  //   } catch (error) {
  //     handleError(error);
  //   }
  // },

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

export const SubmitFormDataMutation = async (formData) => {
  try {
    const res = await axiosInstance.post("/property", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
};
