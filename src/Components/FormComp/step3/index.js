import "bootstrap/dist/css/bootstrap.css";
import "./step3.css";
import FadeIn from "react-fade-in";
import React, { useEffect, useState } from "react";
import LogoBive from "../../../images/Bive-icono.png";
import tuImagen from "../../../images/Iconos alimentos/sin-azucar.png";
import preguntasjson from "./preguntas.json";

import ProgressBar from "react-bootstrap/ProgressBar";


const Step3 = ({ onButtonClick, props, onPreviousButtonClick }) => {
 
  const [primeraPregunta, setPrimeraPregunta] = useState([]);
  // eslint-disable-next-line
  const [categorias, setCategorias] = useState([]);
  const [preguntas, setPreguntas] = useState([]);


  useEffect(() => {
    setCategorias(props.categorias);
    localStorage.removeItem("primeraPregunta");
    const tag = props;

    const preguntasFiltradas = preguntasjson.categorias.find(categoria => categoria.tag === tag)?.preguntas || [];
    setPreguntas(preguntasFiltradas);
  }, [props]);

  const handleCheckboxChange = (tags) => {
    // Envolver el valor individual en un array si no lo es
    const tagsArray = Array.isArray(tags) ? tags : [tags];
  
    // Verificar si alguno de los tags ya está presente en primeraPregunta
    const hasTag = tagsArray.some(tag => primeraPregunta.includes(tag));
    
    if (!hasTag) {
      // Si ninguno de los tags está presente, agregarlos todos
      setPrimeraPregunta(prevPreguntas => [...prevPreguntas, ...tagsArray]);
    } else {
      // Si al menos uno de los tags está presente, eliminar solo el tag específico
      setPrimeraPregunta(prevPreguntas => prevPreguntas.filter(tag => !tagsArray.includes(tag)));
    }
  };

  

  const handleRadioChange = (tags) => {
    // Verificar si alguno de los tags ya está presente en primeraPregunta

    setPrimeraPregunta(tags)
    
  
  };

  const handleButtonClick = () => {
    localStorage.primeraPregunta = primeraPregunta;
    localStorage.setItem('primerasPreguntasCadena', JSON.stringify(primeraPregunta));
    onButtonClick(primeraPregunta);

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
                <ProgressBar variant="info" now={40} />
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

          {props !== "vegano" ? ( <>
          <div className="check-buttons-wrapper mx-auto">
          {preguntas.map((pregunta, index) => (
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
            </>):(
              <>
              <div className="check-buttons-wrapper mx-auto">
              {preguntas.map((pregunta, index) => (
                    <div className="check-button-container" key={index}>
                      <input
                        type="radio"
                        id={`option${index}`}
                        name="pregunta" 
                        value={pregunta.tag}
                        onChange={() => handleRadioChange(pregunta.tag)}
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
                </>)

            }
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step3;
