import "bootstrap/dist/css/bootstrap.css";
import "./setp10.css";
import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const Step10 = ({ onButtonClick, onPreviousButtonClick }) => {
  const [infoadicional, setInfoadicional] = useState(" ");

  const handleButtonClick = () => {
    onButtonClick(infoadicional);
    localStorage.infoadicional = infoadicional;
  };
  useEffect(() => {
    localStorage.removeItem("infoadicional");
    localStorage.paso10 = 1;
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <div className="mb-3">
              <label className="etiqueta9" htmlFor="formGroupExampleInput2">
                Si tienes alguna otra información que nos quieras entregar,
                déjala acá:
              </label>
              <p className="etiqueta9sub">
                Entre más especifica la información mejor será el match de tu
                compra.
              </p>
              <input
                type="text"
                className="form-control"
                id="infoadicional"
                placeholder="Escribe tu respuesta aqui"
                onChange={(e) => setInfoadicional(e.target.value)}
              />
            </div>

            <div className="botones">
              <div className="col-lg-6 col-sm-12">
                <button
                  type="submit"
                  className="mybuttonFormstep1"
                  onClick={handleButtonClick}
                >
                  Aceptar
                </button>
              </div>
              <div className="col-lg-6 col-sm-12">
                <button
                  type="button"
                  className="mybuttonFormstep2 "
                  onClick={onPreviousButtonClick}
                >
                  <ArrowLeft />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step10;
