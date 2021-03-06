import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navv from "./navv";
import Primeira from "./primeira";
import Consultorio from "./consultorio";
import Dentistas from "./dentistas";
import Dentistas2 from "./dentistass";
import Area from "./areas"


document.title = "Duque Bacelar Odonto";

ReactDOM.render(
  <React.StrictMode>
    <Navv />
    <Primeira />
    <Consultorio />
    <Dentistas />
    <Dentistas2 />
    <Area />
    <App />

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
