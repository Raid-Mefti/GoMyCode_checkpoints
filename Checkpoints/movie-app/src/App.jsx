import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
    const [movies, setMovies] = useState([
        {
            title: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
            posterURL: "https://via.placeholder.com/150",
            rating: 8.8,
        },
        {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            posterURL: "https://via.placeholder.com/150",
            rating: 8.6,
        },
    ]);

    const [titleFilter, setTitleFilter] = useState("");
    const [rateFilter, setRateFilter] = useState("");

    const handleAddMovie = () => {
        const newMovie = {
            title: "New Movie",
            description: "This is a new movie.",
            posterURL: "https://via.placeholder.com/150",
            rating: 7.5,
        };
        setMovies([...movies, newMovie]);
    };

    const filteredMovies = movies.filter((movie) => {
        return (
            movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            movie.rating >= (rateFilter || 0)
        );
    });

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Movie App</h1>
            <button onClick={handleAddMovie} style={{ margin: "10px", padding: "10px" }}>
                Add Movie
            </button>
            <Filter
                onTitleChange={setTitleFilter}
                onRateChange={setRateFilter}
            />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;