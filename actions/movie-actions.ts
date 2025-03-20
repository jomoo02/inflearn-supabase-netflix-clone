"use server";

import { createServerSupabaseClient } from "utils/supabase/server";
import { Database } from "types_db";

export type Movie = Database["public"]["Tables"]["movie"]["Row"];
type MovieUpdate = Database["public"]["Tables"]["movie"]["Update"];

function handleError(error: Error) {
  if (error) {
    console.error(error);
    throw error;
  }
}

export async function updateMovie(movie: MovieUpdate) {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase
    .from("movie")
    .update({
      ...movie,
    })
    .eq("id", movie.id);

  handleError(error);
}

export async function searchMovies({ search, page, pageSize }) {
  const supabase = await createServerSupabaseClient();

  const { data, count, error } = await supabase
    .from("movie")
    .select("*", { count: "exact" })
    .like("title", `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1);

  const hasNextPage = count > page * pageSize;

  if (error) {
    console.error(error);
    return {
      data: [],
      count: 0,
      page: null,
      pageSize: null,
      error,
    };
  }

  return {
    data,
    page,
    pageSize,
    hasNextPage,
  };
}

export async function getMovie(id: number) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("movie")
    .select()
    .eq("id", id)
    .maybeSingle();

  handleError(error);

  return data;
}
