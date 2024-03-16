import "bootstrap/dist/css/bootstrap.css";
import "./step12.css";
import FadeIn from "react-fade-in";
import { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const Step12 = ({ onButtonClick, onPreviousButtonClick }) => {
  const [correo, setCorreo] = useState("");
  const [telefono, settelefono] = useState("");

  const handleButtonClick = () => {
    onButtonClick(correo, telefono);
    localStorage.telefono = telefono;
    localStorage.correo = correo;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
          
              <div className="col-6">
                <label className="etiqueta1" htmlFor="formGroupExampleInput2">
                  A qué correo deberiamos enviar tu match de compra?
                </label>
                <p className="etiqueta9sub">Te enviaremos una lista de compras con los productos que mejor se ajusten a tus preferencias, de acuerdo a la información entrega.</p>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  placeholder="Escribe tu correo"
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="col-6">
                <label className="etiqueta1"htmlFor="formGroupExampleInput2">
                Te gustaría dejarnos tu número de telefono?
                </label>
                <p className="etiqueta9sub">Esto nos ayuda a ponernos en contacto más rápido si hay alguna duda con tus respuestas.</p>
                
                <input
                  type="text"
                  className="form-control"
                  id="correo"
                  placeholder="Escribe tu numero telefonico"
                  onChange={(e) => setCorreo(e.target.value)}
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

export default Step12;
