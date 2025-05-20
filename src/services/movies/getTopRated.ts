import api from "../api";

export const getTopRatedMovies = async (page: number = 1) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  let res: any;
  const endpoint = `/movie/top_rated?language=en-US&page=${page}`;

  try {
    const response = await api.get(endpoint);
    res = response.data;
  } catch (err: any) {
    res = err.response;
  }

  return res;
};
