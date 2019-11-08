import {
  REQUEST_BUSINESS_LOG_DATA,
  RECEIVE_BUSINESS_LOG_DATA,
  SEARCH_BUSINESS_LOG_DATA,
  REQUEST_CREATE_BUSINESS,
  DELETE_BUSINESS_DATA
} from "./types";

export const requestBusinessLogData = () => {
  return { type: REQUEST_BUSINESS_LOG_DATA };
};
export const receiveBusinessLogData = (data: any) => {
  return {
    type: RECEIVE_BUSINESS_LOG_DATA,
    data
  };
};

export const deleteBusinessData = (id: any) => {
  return { type: DELETE_BUSINESS_DATA, id };
};

export const requestCreateBusiness = (data: any) => {
  return { type: REQUEST_CREATE_BUSINESS, data };
};

export const searchBusinessLogData = (data: any) => {
  return {
    type: SEARCH_BUSINESS_LOG_DATA,
    data
  };
};
