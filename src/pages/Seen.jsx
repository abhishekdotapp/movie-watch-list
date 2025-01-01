import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function SeenMovies() {
    const { seenMovies } = useMovieContext();

    if (seenMovies) {
        return (
            <div className="favorites">
                <h2>Movies You've Seen</h2>
                <div className="movies-grid">
                    {seenMovies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-movies-empty">
            <h2>No Movies Marked as Seen Yet</h2>
            <p>Mark movies as seen and they will appear here!</p>
        </div>
    );
}

export default SeenMovies;
