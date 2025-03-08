import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
    const { id } = useParams(); // Get the movie ID from the URL
    const movie = movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <div>
                <iframe
                    width="560"
                    height="315"
                    src={movie.trailer}
                    title={`${movie.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <Link to="/" style={{ display: "block", marginTop: "20px" }}>
                Back to Home
            </Link>
        </div>
    );
};

export default MovieDetails;
