import React from "react";
import "./consultorio.css";
import odonto from "./odonto.jpg";
import predio from "./predio.jpeg"

export default function Consultorio() {
  return (
    <div className="geral3">
      <div className="esquerdo">
        <h1>Consultorio</h1>
        <p>
          O Consultório Odontológico Dr. Fabiano Leite Monteiro e Dra. Silvanie
          Silva com uma infraestrutura moderna e tecnológica, oferece
          tratamentos odontológicos e de harmonização facial personalizados a
          seus pacientes. <br />
          Por meio da realização de um minucioso planejamento, buscamos unir a
          saúde, função e a estética do sorriso, bem como a qualidade de vida
          dos pacientes.
        </p>
      </div>
      <div className="direito">
        <img src={predio}></img>
      </div>
    </div>
  );
}
