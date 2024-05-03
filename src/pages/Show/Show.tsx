import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
const Show = () => {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [isFavorite, setisFavorite] = useState<boolean>();

    const [favorites, setFavorites] = useState<string>('');

    const goBack = ()=> {
        navigate(-1);
    };

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



    useEffect(()=>{
        // aqui llamar el endpoint 
        const favs = localStorage.getItem('favorites') ||'';
        setFavorites(favs);
        if(favs.includes(String(id))){
            setisFavorite(true);
        }
    }, [id])
    return (
        <div>
            <div>Show: {id}</div>
            <div>Titulo desde el state: {location.state.movie}</div>
            <button onClick={goBack}>Ir atras</button>
            {isFavorite?(
                <div className='p3 bg-red-800'>
                    <button onClick={removeFavorite}>Remove from favorites</button>
                </div>
            ):(
                <div className='p3 bg-blue-800'>
                    <button onClick={addFavorite}>Add Favorites</button>
                </div>
            )}

        </div>
    )
}

export default Show