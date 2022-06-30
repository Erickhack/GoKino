enum DefaulData {
  user = '{ "token": "", "email": "" }',
}

export const getToken: () => { token: string; email: string } = () => {
  return JSON?.parse(localStorage?.getItem("lg_Token") || DefaulData.user);
};

export const setToken = (token: string, email: string) => {
  localStorage.setItem("lg_Token", JSON.stringify({ token, email }));
};

export const removeToken = () => {
  localStorage.removeItem("lg_Token");
};
