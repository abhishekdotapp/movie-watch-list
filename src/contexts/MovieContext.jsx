import { createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const [seenMovies, setSeenMovies] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        const storedSeen = localStorage.getItem("seenMovies");

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
        if (storedSeen) setSeenMovies(JSON.parse(storedSeen));
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    useEffect(() => {
        localStorage.setItem("seenMovies", JSON.stringify(seenMovies));
    }, [seenMovies]);


const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie])
}

const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
}

const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId)
}

const addToSeenMovies = (movie) => {
    setSeenMovies((prev) => [...prev, movie]);
};

const removeFromSeenMovies = (movieId) => {
    setSeenMovies((prev) => prev.filter((movie) => movie.id !== movieId));
};

const isSeen = (movieId) => {
    return seenMovies.some((movie) => movie.id === movieId);
};

const value = {
    favorites,
    seenMovies,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    addToSeenMovies,
    removeFromSeenMovies,
    isSeen,
}

return <MovieContext.Provider value={value}>
    {children}
</MovieContext.Provider>
};