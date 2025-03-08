import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}
        >
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    style={{
                        margin: "10px",
                        width: "200px",
                        textAlign: "center",
                    }}
                >
                    <Link
                        to={`/movie/${movie.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <img
                            src={movie.posterURL}
                            alt={movie.title}
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.rating}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
