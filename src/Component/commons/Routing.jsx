// Import des outils de routing
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min";
import AjoutFilm from "../AjoutFilm";
import ListeFilm from "../ListeFilm";
import Accueil from "../Pages/Accueil";
import NavBar from "./NavBar";

let pages = [
    {
        to: "/Accueil",
        nom :"Accueil"
    },
    {
        to: "/ListeFilm",
        nom :"ListeFilm"
    },
    {
        to: "/AjoutFilm",
        nom :"AjoutFilm"
    }
]

export const Routing = (props) => {
    return (
        <Fragment>
            <BrowserRouter>
                <NavBar pages={pages} />
                <Routes>
                    <Route path="/Accueil" element={<Accueil/>} />
                    <Route path="/ListeFilm" element={<ListeFilm/>} />
                    <Route path="/AjoutFilm" element={<AjoutFilm/>} />  
                    <Route path="/" element={<Navigate to="/Accueil" />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}