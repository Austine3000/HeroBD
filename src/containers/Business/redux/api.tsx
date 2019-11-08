import AxiosWrapper from "../../../common/AxiosWrapper";

export interface ISearch {
  name: String;
  description: String;
}

export let fetchBusinessLogData = async () => {
  try {
    const response = await AxiosWrapper.get("/business");
    return response;
  } catch (e) {
    throw e;
  }
};

export let fetchBusinessSearchData = async (data: ISearch) => {
  try {
    const response = await AxiosWrapper.get(
      `/business?name=${data.name}&description=${data.description}`
    );
    return response;
  } catch (e) {
    throw e;
  }
};

export let fetchCreateBusinessData = async (data: any) => {
  try {
    const response = await AxiosWrapper.post(`/business`, data);
    return response;
  } catch (e) {
    throw e;
  }
};

export let fetchdeleteBusiness = async (id: any) => {
  try {
    const response = await AxiosWrapper.delete(`/business/${id}`);
    return response;
  } catch (e) {
    throw e;
  }
};
