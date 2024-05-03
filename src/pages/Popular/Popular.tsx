 import React, {useEffect, useState} from "react";
 import {getPopular} from "../../services";
 import {MovieCard} from "../../components/MovieCard";
 import {IMovieResponse} from "./types";

const Popular: React.FC = () => {
    const [movies, setMovies] = useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getPopularMovies = async () => {
        await getPopular()
            .then((data) => {
                if (data && data.data){
                    setMovies(data.data.results);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
            console.log(err)
            });
    }

    useEffect(() => {
        setIsLoading(true);
        getPopularMovies();
    }, [])
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {movies?.length > 0 &&
            movies.map((movie) => {
                return(
                <MovieCard
                    title={movie.title}
                    genreId={movie.genre_ids[0]}
                    movieId={movie.id}
                    voteAverage={movie.vote_average}
                    posterPath={movie.poster_path}
                />)
            })}
        </>
    );
};

export default Popular;
