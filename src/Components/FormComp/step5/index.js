import "bootstrap/dist/css/bootstrap.css";
import "./step5.css";
import FadeIn from "react-fade-in";
import React, { useEffect, useState } from "react";
import LogoBive from "../../../images/Bive-icono.png";
import tuImagen from "../../../images/Iconos alimentos/sin-azucar.png";
import Acordeon from "../acordeon/Acordeon";
import data from "../step5/categorias.json";
import ProgressBar from "react-bootstrap/ProgressBar";

const Step5 = ({ onButtonClick, onPreviousButtonClick, onNext, getCategorias }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  // eslint-disable-next-line

  // eslint-disable-next-line
  useEffect(() => {
   localStorage.removeItem("categoriasCadena");
   localStorage.removeItem("categorias");
    // eslint-disable-next-line
  }, []);

  const handleButtonClick = () => {

    localStorage.categorias = selectedValues;
    localStorage.setItem('categoriasCadena', JSON.stringify(selectedValues));
    onButtonClick(selectedValues);
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
                <ProgressBar variant="info" now={60} />
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
              ESPECÍFICAMENTE QUE PREFERENCIAS (PUEDES MARCAR MÁS DE 1)<br></br>
            </h1>
            <div className="check-buttons-wrapper mx-auto">
              <div className="check-button-container">
                {data.categorias.map((categoria) => (
                  <div
                    key={`div-${categoria.nombre}`}
                    className="check-label-d"
                  >
                    <Acordeon
                      title={categoria.nombre}
                      arreglo={categoria.items}
                      selectedValues={selectedValues}
                      setSelectedValues={setSelectedValues}
                    />

                    <img
                      src={tuImagen}
                      alt="Imagen"
                      className="imagen-derecha-d"
                      width="50"
                      height="50"
                    />
                  </div>
                ))}
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

export default Step5;
