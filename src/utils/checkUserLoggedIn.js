export const checkUserLoggedIn = () =>
  Boolean(localStorage.getItem("jwt"));
