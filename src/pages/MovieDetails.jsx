import styles from "./MovieDetails.module.css"
import movie from "./movie.json"


export function MovieDetails() {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <div className={styles.detailsContainer}>
            <img src={imageUrl} alt="" />
        </div>
    )
}