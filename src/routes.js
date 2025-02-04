import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import PageNotFound from "./Pages/PageNotFound";
import Seach from "./Pages/Search";
import Favorites from "./Pages/Favorites";
import FavoritesProvider from "./context/Favorites";


function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/watch/:id" element={<Watch />}></Route>
                    <Route path="/search" element={<Seach />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path='*' element={<PageNotFound />}></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;