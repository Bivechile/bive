import "bootstrap/dist/css/bootstrap.css";
import "./step2.css";
import FadeIn from "react-fade-in";
import { useEffect, useState } from "react";
import LogoBive from "../../../images/Bive-icono.png";
import ProgressBar from "react-bootstrap/ProgressBar";


const Step2 = ({ onButtonClick, onPreviousButtonClick }) => {
  // eslint-disable-next-line
  const [primeraCatgoria, setprimeraCatgoria] = useState("");

  useEffect(() => {
    localStorage.removeItem("primeraCategoria");
  }, []);

  const handleButtonClick = (e) => {
    const selectedCategory = e.target.value;

    setprimeraCatgoria(selectedCategory);
    // localStorage.setItem("primeraCategoria", selectedCategory);
  
    localStorage.primeraCategoria = selectedCategory;
    localStorage.setItem(
      "primeraCategoriaCadena",
      JSON.stringify(selectedCategory)
    );
    onButtonClick(selectedCategory);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <hr className="hr" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="backarrow" onClick={onPreviousButtonClick}>
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
                <ProgressBar variant="info" now={30} />
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
              PRIMERO QUE TODO ¿CUANDO BUSCAS ALIMENTOS, TIENES ALGUNA DE ESTAS
              RESTRICCIONES O PREFERENCIAS?<br></br>
            </h1>

            <div className="radio-buttons-wrapper mx-auto">
              <div className="radio-button-container">
                <input
                  type="radio"
                  id="option1"
                  value="keto"
                  onChange={handleButtonClick}
                />
                <label htmlFor="option1" className="radio-label">
                  Keto/ Lowcarb/ Dieta
                </label>
              </div>

              <div className="radio-button-container">
                <input
                  type="radio"
                  id="option2"
                  value="alergia"
                  onChange={handleButtonClick}
                />
                <label htmlFor="option2" className="radio-label">
                  Alergia/ Sensibilidad alimentaria
                </label>
              </div>
              <div className="radio-button-container">
                <input
                  type="radio"
                  id="option3"
                  value="saludable"
                  onChange={handleButtonClick}
                />
                <label htmlFor="option3" className="radio-label">
                  Alimentación Saludable (Sin "quimicos")
                </label>
              </div>

              <div className="radio-button-container">
                <input
                  type="radio"
                  id="option4"
                  value="vegano"
                  onChange={handleButtonClick}
                />
                <label htmlFor="option4" className="radio-label">
                  Productos Veganos
                </label>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step2;
