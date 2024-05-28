import "bootstrap/dist/css/bootstrap.css";
import "./step4.css";
import FadeIn from "react-fade-in";
import React, { useEffect, useState } from "react";
import LogoBive from "../../../images/Bive-icono.png";
import tuImagen from "../../../images/Iconos alimentos/sin-azucar.png";
import preguntasjson from "../step3/preguntas.json";
import ProgressBar from "react-bootstrap/ProgressBar";


const Step4 = ({ onButtonClick, onPreviousButtonClick }) => {
 

  // eslint-disable-next-line

  const [preguntasDos, setPreguntasDos] = useState([]);
  const [valorStep2, setValorStep2] = useState([]);

// eslint-disable-next-line
  useEffect(() => {
    let primeraPregunta=localStorage.getItem('primeraCategoria');
   
    if (primeraPregunta === "keto") {
  
      primeraPregunta = "alergia";
    } else if (primeraPregunta === "alergia") {
  
      primeraPregunta = "saludable";
    } else if (primeraPregunta === "saludable") {

      primeraPregunta = "alergia";
    }
    if ( primeraPregunta === "sin-sellos"){
      localStorage.removeItem("primeraCategoria");
    }
    const primeraCategoria=localStorage.getItem("primeraCategoria");
    if ( primeraCategoria === "vegano"){
      primeraPregunta=localStorage.getItem("primeraPregunta");
     if (primeraPregunta==='' || primeraPregunta==='ninguna'){

       onButtonClick();


     }
    }


    localStorage.removeItem("segundaPregunta");
    const tag = primeraPregunta;


    const preguntasFiltradas = preguntasjson.categorias.find(categoria => categoria.tag === tag)?.preguntas || [];
    setPreguntasDos(preguntasFiltradas);
    // eslint-disable-next-line
  }, []);

  const handleCheckboxChange = (value) => {
    // Verificar si el valor ya está presente en preguntasDos
    const index = valorStep2.indexOf(value);
    if (index === -1) {
      // Si no está presente, agregarlo
      setValorStep2(prevPreguntas => [...prevPreguntas, value]);
    } else {
      // Si está presente, eliminarlo
      setValorStep2(prevPreguntas => prevPreguntas.filter(pregunta => pregunta !== value));
    }
  };;

  const handleButtonClick = () => {

    onButtonClick(valorStep2);
    localStorage.segundaPregunta = valorStep2;
    localStorage.setItem('segundaPreguntasCadena', JSON.stringify(valorStep2));
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
                <ProgressBar variant="info" now={50} />
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
          {preguntasDos.map((pregunta, index) => (
                <div className="check-button-container" key={index}>
                  <input
                    type="checkbox"
                    id={`option${index}`}
                    value={pregunta.tag}
                    onChange={() => handleCheckboxChange(pregunta.tag)}
                  />
                  <label htmlFor={`option${index}`} className="check-label">
                    {pregunta.nombre}
                    <img
                      src={tuImagen}
                      alt="Imagen"
                      className="imagen-derecha"
                      width="50"
                      height="50"
                    />
                  </label>
                </div>
              ))}
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

export default Step4;
