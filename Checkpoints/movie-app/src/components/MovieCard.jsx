import React from "react";

const MovieCard = ({ movie }) => {
    const { title, description, posterURL, rating } = movie;

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "300px" }}>
            <img src={posterURL} alt={title} style={{ width: "100%", height: "auto" }} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
                <strong>Rating:</strong> {rating}
            </p>
        </div>
    );
};

export default MovieCard;