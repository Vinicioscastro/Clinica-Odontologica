import { logRoles } from "@testing-library/react";
import React from "react";
import "./dentistas.css";
import vinicios from "./vinicios.jpeg";

export default function Dentistas() {
  return (
    <div className="dentistas">
      <div className="discrip">
        <h1>DR. Vinicios Castro</h1>

        <ul>
          <li>
            Bacharel em Ciência da Computação Pelo Instituto Federal do Maranhão
            campus Caxias 2022.
          </li>
          <li>
            Bacharel em Ciência da Computação Pelo Instituto Federal do Maranhão
            campus Caxias 2022.
          </li>
          <li>
            Bacharel em Ciência da Computação Pelo Instituto Federal do Maranhão
            campus Caxias 2022.
          </li>
          <li>
            Bacharel em Ciência da Computação Pelo Instituto Federal do Maranhão
            campus Caxias 2022.
          </li>
          <li>
            Bacharel em Ciência da Computação Pelo Instituto Federal do Maranhão
            campus Caxias 2022.
          </li>
          <li>
            Bacharel em Ciência da Computação Pelo Instituto Federal do Maranhão
            campus Caxias 2022.
          </li>
        </ul>
      </div>

      <img src={vinicios}></img>
    </div>
    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
    
  );
}
