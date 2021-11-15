import { useQuery } from "react-query";
import { apiUrls, baseURLs } from "../constants";
import callApi from "../api/callApi";

const getMovieDetails = async (id) => {
  return callApi({
    method: "get",
    baseURL: baseURLs.discover,
    url: `${apiUrls.details}${id}`,
    params: {},
  });
};

const useMovieDetails = (id) => {
  const query = useQuery([id], () => getMovieDetails(id), {
    placeholderData: [],
    select: (data) => {
      return data;
    },
    keepPreviousData: true,
  });
  return query.data || {};
};

export default useMovieDetails;
