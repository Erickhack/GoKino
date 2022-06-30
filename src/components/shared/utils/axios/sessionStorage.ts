enum DefData {
  user = '{"token": "", "email": ""}',
}

export const getSessitonToken: () => { token: string; email: string } = () =>
  JSON.parse(sessionStorage.getItem("lg_Token") || DefData.user);

export const setSessionToken = (token: string, email: string) =>
  sessionStorage.setItem("lg_Token", JSON.stringify({ token, email }));

export const removeSessionToken = () => sessionStorage.removeItem("lg_Token");
