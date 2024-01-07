export const setTokens = (authRes: any) => {
    localStorage.setItem('user', JSON.stringify(authRes.user));
    localStorage.setItem('accessToken', JSON.stringify(authRes.access_token));
  };
  
  export const removeTokens = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  };
  export const getAccessToken = () => localStorage.getItem('accessToken');
  export const getUser = () => localStorage.getItem('user');
  export const setUser = (user: any) => localStorage.setItem('user', JSON.stringify(user));
  