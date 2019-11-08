import {
  REQUEST_CATEGORY_DATA,
  RECEIVE_CATEGORY_DATA,
  REQUEST_CREATE_CATEGORY
} from "./types";

export const requestCategoryData = () => {
  return { type: REQUEST_CATEGORY_DATA };
};
export const receiveCategoryData = (data: any) => {
  return {
    type: RECEIVE_CATEGORY_DATA,
    data
  };
};

export const requestCreateCategory = (data: any) => {
  return {
    type: REQUEST_CREATE_CATEGORY,
    data
  };
};
