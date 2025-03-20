import { getMovie } from "actions/movie-actions";
import UI from "./ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;

  const movie = await getMovie(id);

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function MoveDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const movie = await getMovie(id);

  return (
    <main className="py-16 flex items-center bg-blue-50 w-full md:absolute top-0 bottom-0 left-0 right-0">
      {movie ? <UI movie={movie} /> : <div>Movie does not exists</div>}
    </main>
  );
}
