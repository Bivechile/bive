import "bootstrap/dist/css/bootstrap.css";
import "./step2.css";
import FadeIn from "react-fade-in";
import { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const Step2 = ({ onButtonClick, onPreviousButtonClick }) => {
  const [nombreComponente2, setNombreComponente2] = useState("");

  useEffect(() => {
    localStorage.removeItem('nombre');

  

  }, [])
  

  const handleButtonClick = (e) => {

    e.preventDefault(); // Evitar el envío del formulario por defecto
    onButtonClick(nombreComponente2);
    localStorage.nombre = nombreComponente2;
  };
  

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12-lg mx-auto">
          <form onSubmit={handleButtonClick}>
            <FadeIn>
              <div className="mb-3 mx-auto">
                <label className="etiqueta1" htmlFor="formGroupExampleInput2">
                  Hola soy BIVE ¿Cómo te llamas?
                </label>
<div className="centro">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Escribe tu nombre"
                  onChange={(e) => setNombreComponente2(e.target.value)}
                  required
                />
                </div>
              </div>

              <div className="botones">
                <div className="col-lg-6 col-sm-12">
                  <button type="submit" className="mybuttonFormstep1">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
