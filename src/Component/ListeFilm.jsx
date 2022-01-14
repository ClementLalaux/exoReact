import React, { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import AjoutFilm from "./AjoutFilm";
import Film from "./Film";
export const ListeFilm = (props) =>{


  let [movies,setMovies] = useState([
    {id:1,film: "Sporting Goods", annee: 1998, cout: 4999999},
    {id:2,film: "Sporting Goods", annee: 1998, cout: 4999999},
    {id:3,film: "Sporting Goods", annee: 1998, cout: 4999999},
    {id:4,film: "Sporting Goods", annee: 1998, cout: 4999999},
    {id:5,film: "Sporting Goods", annee: 1998, cout: 4999999},
    {id:6,film: "Sporting Goods", annee: 1998, cout: 4999999}
  ]);


  const handleAjoutFilm = (film) => {
    setMovies([...movies, film])
}

    return (
      <Fragment>
        <section id="jeu" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'self-start',
                flexWrap: 'wrap'
            }}>
                {
                    movies.map((m,index) => {
                        return <Film key={index} infos={m}/>
                    })
                }
            </section>
      </Fragment>
    );
  }

export default ListeFilm;