import React from "react";

const Filter = ({ onTitleChange, onRateChange }) => {
    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <input
                type="text"
                placeholder="Search by title"
                onChange={(e) => onTitleChange(e.target.value)}
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <input
                type="number"
                placeholder="Search by rating"
                onChange={(e) => onRateChange(e.target.value)}
                style={{ padding: "5px" }}
                min="0"
                max="10"
            />
        </div>
    );
};

export default Filter;