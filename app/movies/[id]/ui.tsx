"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Movie, updateMovie } from "actions/movie-actions";
import { queryClient } from "config/react-query-client-provider";
import MovieFavoriteIcon from "components/movie-favorite-icon";

export default function UI({ movie }: { movie: Movie }) {
  const [isFavorite, setIsFavorite] = useState(movie.favorite);

  const updateMovieMutation = useMutation({
    mutationFn: () =>
      updateMovie({
        ...movie,
        favorite: !isFavorite,
      }),
    onSuccess: () => {
      setIsFavorite((prev) => !prev);
      queryClient.invalidateQueries({ queryKey: ["movie"] });
    },
  });

  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={movie.image_url} className="w-1/3 xl:w-1/4" />
      <div className="w-full md:w-2/3 items-center md:items-start flex flex-col p-6 gap-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <div>
            <button
              className="bg-pink-50 border-2 border-pink-100 rounded-md px-1.5 py-1"
              onClick={() => updateMovieMutation.mutate()}
            >
              <MovieFavoriteIcon favorite={isFavorite} />
            </button>
          </div>
        </div>

        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average : {movie.vote_average}
        </div>
        <div className="font-bold text-lg">Popularity: {movie.popularity}</div>
        <div className="font-bold text-lg">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}
