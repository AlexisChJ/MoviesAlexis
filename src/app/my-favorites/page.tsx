"use client";
import React, { useEffect, useState } from "react";
import { useGuestSession } from "@/providers/GuestSessionContext";
import { getFavoriteMovies } from "@/services/accounts/getFavoriteMovies";
import MovieList from "@/components/MovieList/MovieList";

const MyFavoritesPage = () => {
  const { guestSessionId } = useGuestSession();
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!guestSessionId) return;
      setLoading(true);
      try {
        const data = await getFavoriteMovies(guestSessionId);
        setMovies(data?.results || []);
      } catch (err) {
        console.error("Error loading favorite movies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, [guestSessionId]);

  return (
    <div className="bg-black min-h-screen px-6 py-10 text-black flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-red-500 tracking-wide">
        My Favorite Movies
      </h1>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-600 border-opacity-50"></div>
          <span className="ml-4 text-lg text-gray-400">Loading favorites...</span>
        </div>
      )}

      {!loading && movies.length === 0 && (
        <div className="text-center mt-20 max-w-md text-gray-400">
          <p className="text-2xl font-semibold mb-3">No favorite movies yet.</p>
          <p className="text-base italic text-gray-500">
            Browse movies and add them to your favorites to see them here.
          </p>
        </div>
      )}

      {!loading && movies.length > 0 && (
        <div className="w-full max-w-6xl">
          <MovieList movies={movies} text="" loading={loading} />
        </div>
      )}
    </div>
  );
};

export default MyFavoritesPage;
