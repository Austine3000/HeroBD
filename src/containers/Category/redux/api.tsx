import AxiosWrapper from "../../../common/AxiosWrapper";

export interface ISearch {
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
