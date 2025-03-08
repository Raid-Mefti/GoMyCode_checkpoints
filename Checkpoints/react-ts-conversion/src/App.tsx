import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Greeting name="TypeScript Developer" />
            <Counter />
        </div>
    );
}

export default App;
