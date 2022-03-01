import { logRoles } from "@testing-library/react";
import React from "react";
import "./dentistas.css";
import vinicios from './vinicios.jpeg';

export default function Dentistas() {
  return (
    <div className="dentistas">
        <div className="discrip">
            <h1>DR. Vinicios Castro</h1>

      <ul>
        <li>
        
          Graduação em Odontologia pela Universidade São Francisco (Bragança
          Paulista/SP fevereiro/2002)
        </li>
        <li>
          Graduação em Odontologia pela Universidade São Francisco (Bragança
          Paulista/SP fevereiro/2002)
        </li>
        <li>
          Graduação em Odontologia pela Universidade São Francisco (Bragança
          Paulista/SP fevereiro/2002)
        </li>
        <li>
          Graduação em Odontologia pela Universidade São Francisco (Bragança
          Paulista/SP fevereiro/2002)
        </li>
        <li>
          Graduação em Odontologia pela Universidade São Francisco (Bragança
          Paulista/SP fevereiro/2002)
        </li>
        <li>
          Graduação em Odontologia pela Universidade São Francisco (Bragança
          Paulista/SP fevereiro/2002)
        </li>
      </ul>
        </div>
      
     <img src={vinicios}></img>
    </div>
  );
}
