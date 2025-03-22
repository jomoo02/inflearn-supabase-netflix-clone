import { createServerSupabaseClient } from "utils/supabase/server";
import UI from "./ui";

export const metadata = {
  title: "TMDBFLIX",
  description: "Netflix clone using TMDB API",
};

export default async function Page() {
  const supabase = await createServerSupabaseClient();
  const { count } = await supabase
    .from("movie")
    .select("*", { count: "exact", head: true })
    .eq("favorite", true);

  return <UI favoriteCount={count} />;
}
