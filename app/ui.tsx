"use client";

import MovieCardList from "components/movie-card-list";

export default function UI({ favoriteCount }: { favoriteCount: number }) {
  return (
    <main className="mt-14 mb-12">
      <MovieCardList favoriteCount={favoriteCount} />
    </main>
  );
}
