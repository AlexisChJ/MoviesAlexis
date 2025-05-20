"use client";

import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "@/services/movies/getTopRated";
import { IMovieDetail } from "@/types/MovieDetails";
import MovieList from "@/components/MovieList/MovieList";

const TopRatedPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<IMovieDetail[]>([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      try {
        const data = await getTopRatedMovies();
        setMovies(data.results);
      } catch (err) {
        console.error("Error loading movies: ", err);
      }
      setLoading(false);
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div className="bg-black min-h-screen px-4 py-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-red-500 tracking-wide">
          Top Rated
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 border-opacity-50"></div>
          </div>
        ) : (
          <MovieList text="" loading={loading} movies={movies} />
        )}
      </div>
    </div>
  );
};

export default TopRatedPage;
