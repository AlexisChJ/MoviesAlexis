import api from "../api";
import { MovieApiResponse } from "../../types/MovieDetails";

export const getNowPlayingMovies = async (): Promise<MovieApiResponse> => {
  const endpoint = "/movie/now_playing?language=en-US";

  try {
    const { data } = await api.get<MovieApiResponse>(endpoint);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.status_message || "Error fetching now playing movies");
  }
};