import React from "react";
import './article.css';

export const Film = (props) =>  {

    return (
        <article>
            <h3>{props.infos.film}</h3>
        </article>
    )
  }


export default Film;