import movies from "../movies.json"
import { MovieCard } from "./MovieCard"

export function MoviesGrid() {
    console.log(movies)
    return (
        <ul>
            {movies.map(movie =>
                <MovieCard key={movie.id} movie={movie} />
            )}
        </ul>
    )
}