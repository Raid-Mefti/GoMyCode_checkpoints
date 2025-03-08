import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
    return (
        <div>
            <h1>Movie List</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        style={{ margin: "10px", width: "200px" }}
                    >
                        <Link
                            to={`/movie/${movie.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <img
                                src={movie.posterURL}
                                alt={movie.title}
                                style={{ width: "100%" }}
                            />
                            <h3>{movie.title}</h3>
                            <p>Rating: {movie.rating}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
