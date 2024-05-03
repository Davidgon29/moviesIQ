import React from "react";
import {MovieCard} from "../../components/MovieCard";
import {movies} from "../../constants/moviesMock";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/constants";

const Home = () => {
    return (
        <>
            <div className="flex w-full h-auto">
                <h1 className="flex justify-start text-3xl items-center ml-3 w-1/2">Most Popular</h1>
                <div className="flex justify-end items-center w-1/2 text-white">
                    <Link to={ROUTES.POPULAR} className="flex items-center bg-red-600 px-3 rounded-3xl mr-10 hover:bg-red-900 py-3"> View All</Link>
                </div>
            </div>
            <div className="flex overflow-x-scroll no-scrollbar pb-5">
                <div className="flex flex-nowrap">
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[10].title}
                            genreId={movies[10].genre_ids[0]}
                            movieId={movies[10].id}
                            voteAverage={movies[10].vote_average}
                            posterPath={movies[10].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[0].title}
                            genreId={movies[0].genre_ids[0]}
                            movieId={movies[0].id}
                            voteAverage={movies[0].vote_average}
                            posterPath={movies[0].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[1].title}
                            genreId={movies[1].genre_ids[0]}
                            movieId={movies[1].id}
                            voteAverage={movies[1].vote_average}
                            posterPath={movies[1].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[2].title}
                            genreId={movies[2].genre_ids[0]}
                            movieId={movies[2].id}
                            voteAverage={movies[2].vote_average}
                            posterPath={movies[2].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[3].title}
                            genreId={movies[3].genre_ids[0]}
                            movieId={movies[3].id}
                            voteAverage={movies[3].vote_average}
                            posterPath={movies[3].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[4].title}
                            genreId={movies[4].genre_ids[0]}
                            movieId={movies[4].id}
                            voteAverage={movies[4].vote_average}
                            posterPath={movies[4].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[5].title}
                            genreId={movies[5].genre_ids[0]}
                            movieId={movies[5].id}
                            voteAverage={movies[5].vote_average}
                            posterPath={movies[5].poster_path}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full h-auto">
                <h1 className="flex justify-start text-3xl items-center ml-3 w-1/2">Now Playing</h1>
                <div className="flex justify-end items-center w-1/2 text-white">
                    <Link to={ROUTES.NOWPLAYING}
                          className="flex items-center bg-red-600 px-3 rounded-3xl mr-10 hover:bg-red-900 py-3"> View
                        All</Link>
                </div>
            </div>
            <div className="flex overflow-x-scroll no-scrollbar pb-5">
                <div className="flex flex-nowrap">
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[10].title}
                            genreId={movies[10].genre_ids[0]}
                            movieId={movies[10].id}
                            voteAverage={movies[10].vote_average}
                            posterPath={movies[10].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[0].title}
                            genreId={movies[0].genre_ids[0]}
                            movieId={movies[0].id}
                            voteAverage={movies[0].vote_average}
                            posterPath={movies[0].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[1].title}
                            genreId={movies[1].genre_ids[0]}
                            movieId={movies[1].id}
                            voteAverage={movies[1].vote_average}
                            posterPath={movies[1].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[2].title}
                            genreId={movies[2].genre_ids[0]}
                            movieId={movies[2].id}
                            voteAverage={movies[2].vote_average}
                            posterPath={movies[2].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[3].title}
                            genreId={movies[3].genre_ids[0]}
                            movieId={movies[3].id}
                            voteAverage={movies[3].vote_average}
                            posterPath={movies[3].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[4].title}
                            genreId={movies[4].genre_ids[0]}
                            movieId={movies[4].id}
                            voteAverage={movies[4].vote_average}
                            posterPath={movies[4].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[5].title}
                            genreId={movies[5].genre_ids[0]}
                            movieId={movies[5].id}
                            voteAverage={movies[5].vote_average}
                            posterPath={movies[5].poster_path}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full h-auto">
                <h1 className="flex justify-start text-3xl items-center ml-3 w-1/2">Top Rated</h1>
                <div className="flex justify-end items-center w-1/2 text-white">
                    <Link to={ROUTES.TOPRATED}
                          className="flex items-center bg-red-600 px-3 rounded-3xl mr-10 hover:bg-red-900 py-3"> View
                        All</Link>
                </div>
            </div>
            <div className="flex overflow-x-scroll no-scrollbar pb-5">
                <div className="flex flex-nowrap">
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[10].title}
                            genreId={movies[10].genre_ids[0]}
                            movieId={movies[10].id}
                            voteAverage={movies[10].vote_average}
                            posterPath={movies[10].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[0].title}
                            genreId={movies[0].genre_ids[0]}
                            movieId={movies[0].id}
                            voteAverage={movies[0].vote_average}
                            posterPath={movies[0].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[1].title}
                            genreId={movies[1].genre_ids[0]}
                            movieId={movies[1].id}
                            voteAverage={movies[1].vote_average}
                            posterPath={movies[1].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[2].title}
                            genreId={movies[2].genre_ids[0]}
                            movieId={movies[2].id}
                            voteAverage={movies[2].vote_average}
                            posterPath={movies[2].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[3].title}
                            genreId={movies[3].genre_ids[0]}
                            movieId={movies[3].id}
                            voteAverage={movies[3].vote_average}
                            posterPath={movies[3].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[4].title}
                            genreId={movies[4].genre_ids[0]}
                            movieId={movies[4].id}
                            voteAverage={movies[4].vote_average}
                            posterPath={movies[4].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[5].title}
                            genreId={movies[5].genre_ids[0]}
                            movieId={movies[5].id}
                            voteAverage={movies[5].vote_average}
                            posterPath={movies[5].poster_path}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full h-auto">
                <h1 className="flex justify-start text-3xl items-center ml-3 w-1/2">My favorites</h1>
                <div className="flex justify-end items-center w-1/2 text-white">
                    <Link to={ROUTES.MYFAVORITES}
                          className="flex items-center bg-red-600 px-3 rounded-3xl mr-10 hover:bg-red-900 py-3"> View
                        All</Link>
                </div>
            </div>
            <div className="flex overflow-x-scroll no-scrollbar pb-5">
                <div className="flex flex-nowrap">
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[10].title}
                            genreId={movies[10].genre_ids[0]}
                            movieId={movies[10].id}
                            voteAverage={movies[10].vote_average}
                            posterPath={movies[10].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[0].title}
                            genreId={movies[0].genre_ids[0]}
                            movieId={movies[0].id}
                            voteAverage={movies[0].vote_average}
                            posterPath={movies[0].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[1].title}
                            genreId={movies[1].genre_ids[0]}
                            movieId={movies[1].id}
                            voteAverage={movies[1].vote_average}
                            posterPath={movies[1].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[2].title}
                            genreId={movies[2].genre_ids[0]}
                            movieId={movies[2].id}
                            voteAverage={movies[2].vote_average}
                            posterPath={movies[2].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[3].title}
                            genreId={movies[3].genre_ids[0]}
                            movieId={movies[3].id}
                            voteAverage={movies[3].vote_average}
                            posterPath={movies[3].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[4].title}
                            genreId={movies[4].genre_ids[0]}
                            movieId={movies[4].id}
                            voteAverage={movies[4].vote_average}
                            posterPath={movies[4].poster_path}
                        />
                    </div>
                    <div className="inline-block px-0.5">
                        <MovieCard
                            title={movies[5].title}
                            genreId={movies[5].genre_ids[0]}
                            movieId={movies[5].id}
                            voteAverage={movies[5].vote_average}
                            posterPath={movies[5].poster_path}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
