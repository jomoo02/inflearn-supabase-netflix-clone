"use client";

import MovieCard from "./movie-card";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "actions/movie-actions";
import { Spinner } from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);

  const getAllMoveisQuery = useQuery({
    queryKey: ["movie", search],
    queryFn: () => searchMovies(search),
  });

  return (
    <div>
      {getAllMoveisQuery.isLoading && (
        <div className="w-full h-96 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1 w-full h-full">
        {getAllMoveisQuery.data &&
          getAllMoveisQuery.data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}
