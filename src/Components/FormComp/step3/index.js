import "bootstrap/dist/css/bootstrap.css";
import "./step3.css";
import FadeIn from "react-fade-in";
import React from "react";
import RegionComunaSelector from "./comunas";

const comunas = ({ onPrev, onNext }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <h1 className="etiqueta3">¿En que comuna vivies?</h1>
            <RegionComunaSelector />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default comunas;
