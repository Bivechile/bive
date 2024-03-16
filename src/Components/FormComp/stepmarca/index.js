import "bootstrap/dist/css/bootstrap.css";
import "./stepmarca.css";
import FadeIn from "react-fade-in";
import { useState } from "react";

const StepMarca = ({ onButtonClick }) => {
  const [infoadicional, setInfoadicional] = useState("");

  const handleButtonClick = () => {
    onButtonClick(infoadicional);
    localStorage.infoadicional = infoadicional;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <div className="mb-3">
              <label className="etiqueta9"htmlFor="formGroupExampleInput2">
              Sueles comprar alguna marca en especifica o tienes prioridad por una marca, cuál?Este campo es obligatorio*
              </label>
       
              <input
                type="text"
                className="form-control"
                id="infoadicional"
                placeholder="Escribe tu respuesta aqui"
                onChange={(e) => setInfoadicional(e.target.value)}
              />
            </div>

            <div className="box-f2">
              <button
                type="button"
                className="mybuttonFormstep1"
                onClick={handleButtonClick}
              >
                Aceptar
              </button>
              <p className="alladoboton">
                pulse <strong>Enter ↵</strong>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default StepMarca;
