import "bootstrap/dist/css/bootstrap.css";
import "./step6.css";
import FadeIn from "react-fade-in";
import React, { useEffect, useState } from "react";
import LogoBive from "../../../images/Bive-icono.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const Step6 = ({ onButtonClick, props, onPreviousButtonClick }) => {
  const [step6, setStep6] = useState([]);
  // eslint-disable-next-line

  // eslint-disable-next-line
  useEffect(() => {
    localStorage.removeItem("terceraPregunta");

    // eslint-disable-next-line
  }, []);

  const handleCheckboxChange = (value) => {
    // Verificar si el valor ya está presente en primeraPregunta
    const index = step6.indexOf(value);
    if (index === -1) {
      // Si no está presente, agregarlo
      setStep6([...step6, value]);
    } else {
      // Si está presente, eliminarlo
      const updatedStep6 = [...step6];
      updatedStep6.splice(index, 1);
      setStep6(updatedStep6);
    }
  };

  const handleButtonClick = () => {
    onButtonClick(step6);
    localStorage.terceraPregunta = step6;
    localStorage.setItem('terceraPreguntaCadena', JSON.stringify(step6));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>

          <hr className="hr" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="backarrow"  onClick={onPreviousButtonClick}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </div>
              <div className="title_bar text-center">
                CREACIÓN DEL PERFIL
                <ProgressBar variant="info" now={70} />
              </div>
              <div className="espacio"></div>{" "}
          
            </div>
            <hr className="hr_d" />


            <img
              className=" mt-4 mx-auto d-block mb-4"
              src={LogoBive}
              alt="Berrots"
              width="70"
              height="140"
            />
            <h1 className="titleS2 mx-auto">
              ¿NECESTIAS COMPRAR PARA ALGUIEN EN ESPECIAL? (opcional)<br></br>
            </h1>
            <div className="check-buttons-wrapper mx-auto">
              <div className="check-button-container">
           
                  <input
                    type="checkbox"
                    id="1"
                    value="infantil"
                    onChange={() => handleCheckboxChange("infantil")}
                  />
                  <label htmlFor="option-1" className="check-label">
                    Mi compra incluye niños
                  </label>
              
                  </div>
                  <div className="check-button-container">
           
                  <input
                    type="checkbox"
                    id="2"
                    value="adulto"
                    onChange={() => handleCheckboxChange("adulto")}
                  />
                  <label htmlFor="option-2" className="check-label">
                    Mi compra incluye tercera edad
                  </label>
                
                  </div>
            </div>
            <div className="box-f2">
              <button
                type="button"
                className="mybuttonFormstep2new"
                onClick={handleButtonClick}
              >
                Siguiente
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step6;
