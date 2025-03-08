import { useState } from "react";
import Car from "./Car";

function App() {
    const [message, setMessage] = useState("");

    const handleStartCar = () => {
        const myCar = new Car("Toyota", "Corolla", 2023);
        myCar.start();
        setMessage("Car engine started! Check the console.");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Vehicle App</h1>
            <button
                onClick={handleStartCar}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Start Car
            </button>
            {message && <p style={{ marginTop: "20px" }}>{message}</p>}
        </div>
    );
}

export default App;
