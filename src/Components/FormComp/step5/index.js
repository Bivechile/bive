import "bootstrap/dist/css/bootstrap.css";
import "./step5.css";
import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";     
import { ArrowLeft } from "react-bootstrap-icons";

const Step5 = ({ onButtonClick, onPreviousButtonClick }) => {
  
  const [tipoProducto, setTipoproducto] = useState("");
  const [habilitarBoton, setHabilitarBoton] = useState(false);


  useEffect(() => {
    localStorage.removeItem('tipoProducto');

  

  }, [])


  const handleButtonClick = (event) => {

    const tipo = event.target.value;
    setTipoproducto(tipo);
    setHabilitarBoton(true);
  };
  const handleSubmit = () => {
    onButtonClick(tipoProducto);
    localStorage.tipoProducto=tipoProducto;

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <div className="mb-3">
              <label className="etiqueta1" htmlFor="formGroupExampleInput2">
                ¿Que tipo de producto?
              </label>
              <div className="select5 mx-auto">
              <select className="etiqueta5 w-100" name="selectedparaquien"      onChange={handleButtonClick}>
              <option value=" "> Seleccione un opción</option>
                <option value="dietas">Dietas especiales  / Bajar de peso</option>
                <option value="alergias">Alergias / Sensibilidad alimentaria</option>
                <option value="saludable">Alimentación saludable</option>
                <option value="Vegetarianos">Productos veganos / Vegetarianos</option>
                <option value="deportiva">Alimentación deportiva</option>
                <option value="kosher">Productos kosher / Halal</option>
                <option value="Suplementos">Suplementos alimenticios</option>
              </select>
              </div>
            </div>

            <div className="botones">
              <div className="col-lg-6 col-sm-12">
                <button
                  type="submit"
                  className="mybuttonFormstep1"
                  onClick={handleSubmit}
                  disabled={!habilitarBoton}
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

export default Step5;
