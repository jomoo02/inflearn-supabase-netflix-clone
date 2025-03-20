"use client";

import MovieCard from "./movie-card";

export default function MovieCardList() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-1 w-full h-full">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
