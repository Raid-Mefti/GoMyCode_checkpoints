import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes and Route
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetails from "./components/MovieDetails";

const App = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Inception",
            description:
                "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            posterURL: "https://example.com/inception-poster.jpg",
            rating: 8.8,
            trailer: "https://www.youtube.com/embed/YoHD9XEInc0", // Embed link
        },
        {
            id: 2,
            title: "Interstellar",
            description:
                "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            posterURL: "https://example.com/interstellar-poster.jpg",
            rating: 8.6,
            trailer: "https://www.youtube.com/embed/zSWdZVtXT7E", // Embed link
        },
    ]);

    const [titleFilter, setTitleFilter] = useState("");
    const [rateFilter, setRateFilter] = useState("");

    const handleAddMovie = () => {
        const newMovie = {
            id: movies.length + 1, // Generate a unique ID
            title: "New Movie",
            description: "This is a new movie.",
            posterURL: "https://via.placeholder.com/150",
            rating: 7.5,
            trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example trailer
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
            <button
                onClick={handleAddMovie}
                style={{ margin: "10px", padding: "10px" }}
            >
                Add Movie
            </button>
            <Filter
                onTitleChange={setTitleFilter}
                onRateChange={setRateFilter}
            />
            <Routes>
                <Route
                    path="/"
                    element={<MovieList movies={filteredMovies} />}
                />
                <Route
                    path="/movie/:id"
                    element={<MovieDetails movies={movies} />}
                />
            </Routes>
        </div>
    );
};

export default App;
