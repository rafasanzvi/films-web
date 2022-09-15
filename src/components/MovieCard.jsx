import { Link } from "react-router-dom"
import styles from "./MovieCard.module.css"


export function MovieCard({ movie }) {
    console.log(styles)
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img
                    height={345}
                    width={230}
                    className={styles.movieImage}
                    src={imageUrl}
                    alt={movie.title}
                />
            </Link>
            <div>{movie.title}</div>
        </li>)
}