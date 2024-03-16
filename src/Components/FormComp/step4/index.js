import "bootstrap/dist/css/bootstrap.css";
import "./step4.css";
import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const Step4 = ({ onButtonClick, onPreviousButtonClick }) => {
  const [paraquien, setparaquien] = useState("");
  const [habilitarBoton, setHabilitarBoton] = useState(false);

useEffect(() => {
  localStorage.removeItem('parquien');


  
}, [])


  const handleButtonClick = (event) => {

    const paraq = event.target.value;
    setparaquien(paraq);
    setHabilitarBoton(true);
  };
  const handleSubmit = () => {
    onButtonClick(paraquien);
    localStorage.parquien = paraquien;
  };

  return (
    <div className="container">
      <div className="row">
        <div className=" col-12">
          <FadeIn>
            <div className="mb-3">
              <label className="etiqueta10" htmlFor="formGroupExampleInput2">
                ¿Para quien neceitas comprar?
              </label>
              <div className="select4">
                <select
                  className="etiqueta4 w-100"
                  name="selectedparaquien"
                  onChange={handleButtonClick}
                  
                >
                  <option value=" ">Seleccione una opción</option>
                  <option value="adulto">Para mi</option>
                  <option value="infantil">
                    Mi hija/o (no mayor de 12 años)
                  </option>
                  <option value="adulto">Mi pareja</option>
                  <option value="adulto">Toda la familia</option>
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

export default Step4;
