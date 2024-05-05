import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import {getDetails, getRecommended} from '../../services'
import {IMovieDetail, IMovieResponse } from './types';
import {IMAGE_SOURCE} from "../../constants/moviesMock";
import {FaCalendarAlt, FaRegStar } from "react-icons/fa";
import { GiVote } from "react-icons/gi";
import { IoTimeSharp } from "react-icons/io5";
import {Pill} from "../../components/Pill";
import {MovieCard} from "../../components/MovieCard";

const Show = () => {
    const {id} = useParams();
    const navigate = useNavigate();


    const [isFavorite, setisFavorite] = useState<boolean>();
    const [details, setDetails] = useState<IMovieDetail>();//["Action", "Drama"
    const [favorites, setFavorites] = useState<string>('');
    const [recommended, setRecommended] = useState<IMovieResponse[]>([]);

    const goBack = ()=> {
        navigate(-1);
    };

    const getRecommendedMovies = async () => {
        if (id){
            await getRecommended(id)
                .then((data) => {
                    if (data){
                        console.log(data)
                        setRecommended(data);
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        }

    }

    const addFavorite = () => {
        // Ocupamos un ternario en vez de un if 
        const favs = favorites.length > 0 ? JSON.parse(favorites) : []; //["1233", "1233"] si tenemos un id agregamos el de esta pelicula, si no se agrega a 0
        const newFavorites = [...favs, id];
        setFavorites(JSON.stringify(newFavorites));
        setisFavorite(true);
        localStorage.setItem('favorites', JSON.stringify(newFavorites) ) //El primero es la llave
    };

    const removeFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [] ;
        let newFavorites = [...favs];
        newFavorites =  newFavorites.filter((e) => e !== id);
        setFavorites(JSON.stringify(newFavorites));
        setisFavorite(false);
        localStorage.setItem("favorites", JSON.stringify(newFavorites) )
    };

    const getDetailsMovies = async () => {
        if (id){
            await getDetails(id)
                .then((data) => {
                    if (data && data.data){
                        setDetails(data.data);
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    useEffect(()=>{
        const favs = localStorage.getItem('favorites') ||'';
        setFavorites(favs);
        if(favs.includes(String(id))){
            setisFavorite(true);
        }
        getDetailsMovies();
    }, [id])

    useEffect(()=>{
        getRecommendedMovies();
    },[id])
    

    return (
        <div>
            <div className="flex h-auto">
                {details &&
                    <div className="flex flex-row w-full">
                        <div className="basis-1/5 flex rounded-3xl justify-center">
                            <img src={IMAGE_SOURCE + details.poster_path} alt="poster"
                                 className="flex rounded-3xl object-contain h-96"/>
                        </div>
                        <div className="basis-4/5 w-1/2">
                            <h2 className=" lg:text-6xl sm:text-2xl md:text-4xl mb-5  font-bold">{details.title}</h2>
                            <div className="align-middle mr-20">
                                <div className="flex lg:w-1/2 md:2/3 sm:w-full justify-between mb-3">
                                    <div className="flex items-center">
                                        <FaRegStar/>
                                        <p className="flex font-medium mr-3">{details.vote_average}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaCalendarAlt/>
                                        <p className="flex mr-5 font-medium">{details.release_date.toString()}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <GiVote/>
                                        <p className="flex mr-5 font-medium">{details.vote_count}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <IoTimeSharp/>
                                        <p className="flex mr-5 font-medium">{details.runtime}</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-xl">Overview:</p>
                                    <p className="mr-5 font-medium">{details.overview}</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-1/2">
                                <div>
                                    <div>
                                        <p className="mt-3">Genres</p>
                                    </div>
                                    <div className="flex">
                                        {details && details.genres.map((genre) => {
                                            return (
                                                <div className="flex mr-5" key = {genre.id}>
                                                    <Pill title={genre.name} color={"green"}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="mt-3">Actions</p>
                                    </div>
                                    <div className="flex">
                                        {isFavorite ? (
                                            <button onClick={removeFavorite}
                                                    className="flex mt-2 mr-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove
                                                from favorites
                                            </button>
                                        ) : (
                                            <button onClick={addFavorite}
                                                    className="flex mt-2 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add
                                                to
                                                Favorites
                                            </button>
                                        )}
                                        <button onClick={goBack}
                                                className="flex mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go
                                            Back
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="ml-10 mt-5 w-full">
                <h1 className="text-3xl">Recomended</h1>
                <div className="flex overflow-x-scroll no-scrollbar pb-5">
                    <div className="flex flex-nowrap">
                        {recommended  && recommended.length > 0 && recommended.map((movie : IMovieResponse) => {
                            return (
                                <div className="flex flex-nowrap">
                                    <div className="inline-block px-0.5">
                                        <MovieCard
                                            title={movie.title}
                                            genreId={movie.genre_ids[0]}
                                            movieId={movie.id}
                                            voteAverage={movie.vote_average}
                                            posterPath={movie.poster_path}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show