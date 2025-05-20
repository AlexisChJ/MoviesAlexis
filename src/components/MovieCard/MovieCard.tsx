import Config from "@/config";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

interface IMovieCard {
  title: string;
  voteAverage: number;
  posterPath: string;
  releaseYear: number;
  description: string;
}

const MovieCard: React.FC<IMovieCard> = ({
  title,
  voteAverage,
  posterPath,
  releaseYear,
  description,
}) => {
  const poster = Config.IMAGE_SOURCE + posterPath;

  return (
    <div className="w-full sm:w-[320px] md:w-[300px] lg:w-[280px] xl:w-[260px]">
      <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
        <div className="h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
          <Image
            src={poster}
            width={400}
            height={300}
            className="w-full h-full object-cover"
            alt={title}
          />
        </div>

        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-lg font-bold text-gray-900 truncate">{title}</h2>
            <p className="text-sm text-gray-600">({releaseYear})</p>

            <p className="text-sm text-gray-800 line-clamp-3 mt-2">
              {description}
            </p>
          </div>

          <div className="mt-4 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-orange-500 text-sm font-semibold">SCORE</span>
              <span className="text-2xl font-bold text-yellow-700 flex items-center gap-1">
                {voteAverage.toFixed(1)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
