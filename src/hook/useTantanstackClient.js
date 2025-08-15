import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";

const useGetQuery = (key, url, config, options) => {  // useQuery used for fetching or geting data
  const query = useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await apiClient.get(url, config);
      return response ?? [];
    },
    ...options,
  });

  return query;
};

const usePostMutation = (key, url, config, options) => {  // useMutation used for updation of data
  const mutation = useMutation({
    mutationKey: key,
    mutationFn: async (data) => {
      console.log(data);
      const response = await apiClient.post(url, data, config);
      return response || {};
    },
    ...options,
  });

  return mutation;
};

const usePutMutation = (key, url, config, options) => {
  const mutation = useMutation({
    mutationKey: key,
    mutationFn: async (data) => {
      const response = await apiClient.put(url, data, config);
      return response || {};
    },
    ...options,
  });

  return mutation;
};

const usePatchMutation = (key, url, config, options) => {
  const mutation = useMutation({
    mutationKey: key,
    mutationFn: async (data) => {
      const response = await apiClient.patch(url, data, config);
      return response || {};
    },
    ...options,
  });

  return mutation;
};

const useDeleteMutation = (key, url, config, options) => {
  const mutation = useMutation({
    mutationKey: key,
    mutationFn: () => apiClient.delete(url, config),
    ...options,
  });

  return mutation;
};

export default {
  useGetQuery,
  usePostMutation,
  usePutMutation,
  usePatchMutation,
  useDeleteMutation,
};