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
