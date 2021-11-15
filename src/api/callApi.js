/* eslint-disable no-undef*/
import axios from "axios";

const callApi = async ({ method = "get", baseURL, url, params, data }) => {
  const res = await axios({
    method,
    baseURL,
    url,
    params,
    data,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return res.data;
};

export default callApi;
