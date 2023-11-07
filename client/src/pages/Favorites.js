import React, { useEffect, useState } from "react";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        /**
         * Ici on fetch l'api express avec le contenu du fichier JSON (data.json)
         * Ensuite nous mettons notre state favorites à jour avec les données de l'api
         * Attention la sturcture de base du fetch étant un tableau principal, il faut
         * cibler le contenu qui se trouve dans celui-ci (data.favorites)
         */
        fetch('http://localhost:3002/api/favorites')
            .then(res => res.json())
            .then(data => setFavorites(data.favorites))
    }, [])
    
    return (
        <>
            <h1>Favorites</h1>
            <ul>
                {
                    favorites.map(
                        (favorite) => (
                            <li key={favorite.id}>{favorite.movie}</li>
                        )
                    )
                }
            </ul>
        </>
    )
}

export default Favorites;