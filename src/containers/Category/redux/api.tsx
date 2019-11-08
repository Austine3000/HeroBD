import AxiosWrapper from "../../../common/AxiosWrapper";
import { async } from "q";

export interface ICategory {
  name: String;
}

export let fetchCategoryData = async () => {
  try {
    const response = await AxiosWrapper.get("/category");
    return response;
  } catch (e) {
    throw e;
  }
};

export let fetchCreateCategory = async (data: ICategory) => {
  try {
    const response = await AxiosWrapper.post(`/category`, data);
    return response;
  } catch (e) {
    throw e;
  }
};
