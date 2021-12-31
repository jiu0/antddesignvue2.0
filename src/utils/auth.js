import Cookies from 'js-cookie';

const TokenKey = 'token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  const domain = '.' + process.env.VUE_APP_BUILD_ENV + '.internal.virtueit.net';

  return process.env.VUE_APP_BUILD_MODE === 'devops'
    ? Cookies.remove(TokenKey, { path: '/', domain })
    : Cookies.remove(TokenKey);
}
