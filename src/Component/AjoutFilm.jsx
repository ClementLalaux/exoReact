import React, { Fragment, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ListeFilm from "./ListeFilm";


export const AjoutFilm = (props) =>{

  let [compteur,setNewCompteur] = useState(0);

  let [newMovie, setNewMovie] = useState(
    {
      id:compteur,
      film: "",
      annee: 0,
      cout: 0
    });



    const handleChangeFilm = (e) => {
      e.preventDefault();
      setNewMovie({
          ...newMovie, film:e.target.value
      })
  }
  const handleChangeDuree = (e) => {
    e.preventDefault();
    setNewMovie({
        ...newMovie, annee:e.target.value
    })
}
const handleChangeCout = (e) => {
  e.preventDefault();
  setNewMovie({
      ...newMovie, cout:e.target.value
  })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setNewMovie({
      ...newMovie,id:compteur
    })
    setNewCompteur(compteur+1);  
}


    return (
    <div>
      <h2> Formulaire d'ajout de film </h2>
            <form action="" onSubmit={handleSubmit}>
            <label>Film</label>
            <input type="text"  name="film" onChange={handleChangeFilm}/>
            <label>Annee</label>
            <input type="number"  name="annee" onChange={handleChangeDuree}/>
            <label>Cout :</label>
            <input type="number" name="cout" onChange={handleChangeCout}/>
            <input type="submit" value="Submit" />
            </form>
    </div>
    );
  }

export default AjoutFilm;