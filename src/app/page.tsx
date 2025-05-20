import Image from "next/image";
import Link from "next/link";
import cine from "../components/ui/cine.jpg";

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white">
      <h1 className="text-5xl font-extrabold mb-6 text-red-600 drop-shadow-lg text-center">
        Welcome to Alexis' Movie App
      </h1>
      <p className="text-lg max-w-xl text-center text-gray-300 mb-10">
        Discover, explore, and keep track of your favorite movies all in one place.
        Browse popular titles, see what's now playing, and manage your own favorites list.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <Link
          href="/popular"
          className="bg-red-600 hover:bg-red-700 transition-colors rounded-lg px-8 py-4 font-semibold text-white shadow-lg"
        >
          Popular Movies
        </Link>

        <Link
          href="/now-playing"
          className="bg-red-600 hover:bg-red-700 transition-colors rounded-lg px-8 py-4 font-semibold text-white shadow-lg"
        >
          Now Playing
        </Link>

        <Link
          href="/top-rated"
          className="bg-red-600 hover:bg-red-700 transition-colors rounded-lg px-8 py-4 font-semibold text-white shadow-lg"
        >
          Top Rated
        </Link>

        <Link
          href="/my-favorites"
          className="bg-red-600 hover:bg-red-700 transition-colors rounded-lg px-8 py-4 font-semibold text-white shadow-lg"
        >
          My Favorites
        </Link>
      </div>

      <div className="max-w-4xl w-full relative rounded-xl overflow-hidden shadow-xl">
        <Image
          src={cine}
          alt="Movie Theater"
          width={800}
          height={450}
          className="object-cover rounded-xl brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>

    </main>
  );
}
