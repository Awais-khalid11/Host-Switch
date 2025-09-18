export function formatDate(dateString) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const getToken = () => {
  return localStorage.getItem("token");
};

export const buildFormData = (payload) => {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (Array.isArray(value) && value.length > 0) {
      value.forEach((item, index) => {
        if (item instanceof File || item.file instanceof File) {
          formData.append(`${key}`, item.file || item);
        } else {
          formData.append(`${key}[${index}]`, item);
        }
      });
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        formData.append(`${key}[${index}]`, item);
      });
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};
