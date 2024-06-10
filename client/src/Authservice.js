export const logout = () => {
    // Remove the authentication token from local storage or perform server-side logout
    localStorage.removeItem('authToken');
  };