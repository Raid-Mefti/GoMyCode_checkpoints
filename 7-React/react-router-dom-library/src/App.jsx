import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Other from "./pages/Other";
import Homepage from "./Layout/Homepage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" Component={Homepage}>
                        <Route path="login" Component={Login} />
                        <Route path="other" Component={Other} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
