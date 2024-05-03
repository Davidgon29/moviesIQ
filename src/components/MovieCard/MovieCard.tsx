import React from 'react'
import IMovieCard from "./types";
import {IMAGE_SOURCE} from "../../constants/moviesMock";
import genres from "../../constants/genres.json";
import {Pill} from "../Pill";
import { useNavigate } from 'react-router-dom'
import {ROUTES} from '../../routes/constants'



const MovieCard: React.FC <IMovieCard> = ({
     title,
     genreId,
     movieId,
     voteAverage,
     posterPath
    }) => {
     const poster = IMAGE_SOURCE + posterPath;

     const getGenre = (genreId: number): string  => {
         const key = Object.values(genres.genres).find(genre => genre.id === genreId)
         if(key){
             return key.name;
         }
         return "not classified";
     };

    const navigate = useNavigate();
    // state

    const navigateMovies = (id: number, movie: string) => {
        navigate(`${ROUTES.SHOW}${id}`, {state: {movie}}); // /show/82
    }


    return(
        <div className="relative float-start m-3 bg-black rounded-xl overflow-hidden w-64" onClick={()=> {
            navigateMovies(movieId, title);}}>
            <img src={poster} alt="poster" className="rounded-xl hover:opacity-50 object-contain hover:border-4 hover:border-orange-700"/>
            <div className="text-white absolute bottom-4 left ml-2">
                <div className="w-48">
                    <Pill title={getGenre(genreId)} color={"red"}/>
                </div>
                <p className=""> {title} </p>
                <p className=""> {voteAverage}/10 </p>
            </div>
        </div>
    )
}
export default MovieCard;