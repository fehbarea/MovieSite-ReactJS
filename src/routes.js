import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import PageNotFound from "./Pages/PageNotFound";
import Seach from "./Pages/Search";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/watch/:id" element={<Watch/>}></Route>
                <Route path="/search" element={<Seach/>}></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;