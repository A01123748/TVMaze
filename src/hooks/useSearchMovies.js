import { useQuery } from "react-query";
import { apiUrls, baseURLs } from "../constants";
import callApi from "../api/callApi";

const discoverMovies = async () => {
  return callApi({
    method: "get",
    baseURL: baseURLs.discover,
    url: apiUrls.discover,
    params: {},
  });
};

const searchMovies = async (searchText) => {
  return callApi({
    method: "get",
    baseURL: baseURLs.discover,
    url: apiUrls.search,
    params: { q: searchText },
  });
};

const useSearchMovies = (searchText = "") => {
  const query = useQuery(
    [searchText],
    () => (searchText === "" ? discoverMovies() : searchMovies(searchText)),
    {
      placeholderData: [],
      select: (data) => {
        return data[0]?.show ? data.map((item) => item.show) : data;
      },
      keepPreviousData: true,
    }
  );
  return query.data || {};
};

export default useSearchMovies;
