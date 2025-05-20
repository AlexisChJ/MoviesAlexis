"use client";

import React, { useEffect, useState } from "react";
import { getNowPlayingMovies } from "@/services/movies/getNowPlaying";
import { IMovieDetail } from "@/types/MovieDetails";
import MovieList from "@/components/MovieList/MovieList";

const NowPlayingPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<IMovieDetail[]>([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      try {
        const data = await getNowPlayingMovies();
        setMovies(data.results);
      } catch (err) {
        console.error("Error loading movies: ", err);
      }
      setLoading(false);
    };

    fetchNowPlayingMovies();
  }, []);

  return (
    <div className="bg-black min-h-screen px-4 py-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-red-500 tracking-wide">
          Now Playing
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

export default NowPlayingPage;
