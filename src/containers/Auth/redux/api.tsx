import AxiosWrapper from "../../../common/AxiosWrapper";

interface IUser {
  email: string;
  password: string;
}

export let fetchLoginUser = async (data: IUser) => {
  try {
    const response: any = await AxiosWrapper.get(
      `/user?email=${data.email}&password=${data.password}`
    );

    let result = {};
    console.log("response", response.data);
    if (response.data[0] !== undefined) {
      result = response.data[0];
    }
    console.log("result", result);
    return result;
  } catch (e) {
    throw e;
  }
};
