import "bootstrap/dist/css/bootstrap.css";
import "./step7.css";
import FadeIn from "react-fade-in";
import LogoBive from "../../../images/Bive-icono.png";
import ProgressBar from "react-bootstrap/ProgressBar";

import { useState, useEffect } from "react";

const Step7 = ({ onButtonClick, props, onPreviousButtonClick }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [comuna, setComuna] = useState("");
  const [correo, setCorreo] = useState("");

  const handleButtonClick = () => {
    const data = {
      nombre: nombre,
      apellido: apellido,
      comuna: comuna,
      correo: correo,
    };
    localStorage.setItem("datosPersonales", JSON.stringify(data));
    onButtonClick(data);
  };
  useEffect(() => {
    localStorage.removeItem("datosPersonales");
  }, []);

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
                <ProgressBar variant="info" now={90} />
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
            <div className="check-buttons-wrapper mx-auto">
              <div className="check-button-container">
                <label htmlFor="nombre" className="titleS7">
                  ¿Cuál es tu nombre?
                </label>
              </div>
              <div className="check-button-container">
                <input
                  type="text"
                  className="inputclass"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="check-button-container">
                <label htmlFor="apellido" className="titleS7">
                  ¿Cuál es tu apellido?
                </label>
              </div>
              <div className="check-button-container">
                <input
                  type="text"
                  className="inputclass"
                  id="apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>

              <div className="check-button-container">
                <label htmlFor="comuna" className="titleS7-1">
                  ¿Cuál es el nombre de tu comuna? (para el despacho)
                </label>
              </div>
              <div className="check-button-container">
                <input
                  type="text"
                  className="inputclass"
                  id="comuna"
                  value={comuna}
                  onChange={(e) => setComuna(e.target.value)}
                />
              </div>

              <div className="check-button-container">
                <label htmlFor="correo" className="titleS7">
                  ¿Cuál es tu correo?
                </label>
              </div>
              <div className="check-button-container">
                <input
                  type="email"
                  className="inputclass"
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
            </div>
            <div className="box-f2">
              <button
                type="button"
                className="mybuttonFormstep2new"
                onClick={handleButtonClick}
              >
                Ver mi carro de compras sugerido
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
export default Step7;
