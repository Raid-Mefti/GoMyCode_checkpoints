import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CharacterList from "./pages/CharacterList";
import Search from "./pages/CharacterById";
const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <Navbar />
                <Routes>
                    <Route index Component={Home} />
                    <Route path="/characters" Component={CharacterList} />
                    <Route path="/search" Component={Search} />
                    <Route path="*" Component={Error} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
