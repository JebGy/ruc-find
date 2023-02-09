import axios from "axios";

export const setValue = async (input) => {
  const apiLink = ``;
  const response = await axios.get(apiLink).then((res) => {
    return res.data;
  });
  return response;
};
