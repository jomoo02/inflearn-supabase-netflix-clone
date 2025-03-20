import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="col-span-1 relative">
      <img src={movie.image_url} className="w-full" />
      <Link href={`/movies/${movie.id}`}>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-black opacity-0 hover:opacity-80 transition-opacity duration-300">
          <p className="text-xl font-bold text-white">{movie.title}</p>
        </div>
      </Link>
    </div>
  );
}
