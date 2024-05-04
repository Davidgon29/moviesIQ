import React, { useState, useEffect, useCallback } from "react";
import {MovieCard} from "../../components/MovieCard";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/constants";
import {IMovieDetail, IMovieResponse} from "./types";
import {getPopular, getTopRated, getNowPlaying, getDetails} from "../../services";

const Home = () => {
    const [popular, setPopular] = useState<IMovieResponse[]>([]);
    const [topRated, setTopRated] = useState<IMovieResponse[]>([]);
    const [nowPlaying, setNowPlaying] = useState<IMovieResponse[]>([]);
    const [shows, setShows] = React.useState<IMovieDetail[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const favorites : string = localStorage.getItem("favorites") || "";

    const getPopularMovies = async () => {
        await getPopular()
            .then((data) => {
                if (data && data.data){
                    setPopular(data.data.results);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const getTopRatedMovies = async () => {
        await getTopRated()
            .then((data) => {
                if (data && data.data){
                    setTopRated(data.data.results);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const getNowPlayingMovies = async () => {
        await getNowPlaying()
            .then((data) => {
                if (data && data.data){
                    setNowPlaying(data.data.results);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }


    const runGetFavorites = useCallback( async () => {
        if(favorites.length){
            const favoritesArray = JSON.parse(favorites);
            const newShows = await Promise.all(favoritesArray.map(async (favorite: string) => {
                return getDetails(String(favorite)).then((res) => {
                    if(res && res.data){
                        return res.data;
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }));
            setShows(newShows);
            setLoading(false);
        }},[favorites]);

    useEffect(() => {
        setLoading(true);
        runGetFavorites();
    }, [runGetFavorites]);

    useEffect(() => {
        getPopularMovies();
        getTopRatedMovies()
        getNowPlayingMovies()
    }, [])
    
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
                    {popular?.length > 0 && popular.map((movie) => {
                        return (
                            <div className="inline-block px-0.5">
                                <MovieCard
                                    title={movie.title}
                                    genreId={movie.genre_ids[0]}
                                    movieId={movie.id}
                                    voteAverage={movie.vote_average}
                                    posterPath={movie.poster_path}
                                />
                            </div>
                        )
                    })}
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
                    {nowPlaying?.length > 0 && nowPlaying.map((movie) => {
                        return (
                            <div className="inline-block px-0.5">
                                <MovieCard
                                    title={movie.title}
                                    genreId={movie.genre_ids[0]}
                                    movieId={movie.id}
                                    voteAverage={movie.vote_average}
                                    posterPath={movie.poster_path}
                                />
                            </div>
                        )
                    })}
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
                    {topRated?.length > 0 && topRated.map((movie) => {
                        return (
                            <div className="inline-block px-0.5">
                                <MovieCard
                                    title={movie.title}
                                    genreId={movie.genre_ids[0]}
                                    movieId={movie.id}
                                    voteAverage={movie.vote_average}
                                    posterPath={movie.poster_path}
                                />
                            </div>
                        )
                    })}
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
                    {!loading ? (
                        <div>
                            {favorites && favorites.length > 0 ? (
                                <div>
                                    {shows && shows.map((show: IMovieDetail) => (
                                        <MovieCard
                                            key={show.id}
                                            title={show.title}
                                            genreId={show.genres[0].id}
                                            movieId={show.id}
                                            voteAverage={show.vote_average}
                                            posterPath={show.poster_path}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div>No hay favoritos</div>
                            )}
                        </div>
                    ):(
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Home;
