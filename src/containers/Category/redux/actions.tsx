import { REQUEST_CATEGORY_DATA, RECEIVE_CATEGORY_DATA } from "./types";

export const requestCategoryData = () => {
  return { type: REQUEST_CATEGORY_DATA };
};
export const receiveCategoryData = (data: any) => {
  return {
    type: RECEIVE_CATEGORY_DATA,
    data
  };
};
