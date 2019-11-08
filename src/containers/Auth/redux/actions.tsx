import { REQUEST_USER_LOGIN, RECEIVE_LOGIN_USER } from "./types";

export const requestUserLogin = (data: any) => {
  return {
    type: REQUEST_USER_LOGIN,
    data
  };
};

export const receiveLoginUserData = (data: any) => {
  return {
    type: RECEIVE_LOGIN_USER,
    data
  };
};
