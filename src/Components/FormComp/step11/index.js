import "bootstrap/dist/css/bootstrap.css";
import "./step11.css";
import FadeIn from "react-fade-in";
import { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const Step11= ({ onButtonClick, onPreviousButtonClick }) => {
  const [envio, setenvio] = useState("");

  const handleButtonClick = () => {
    onButtonClick(envio);
    localStorage.envio = envio;
    console.log('entro')
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <div className="mb-3">
              <label className="etiqueta10" htmlFor="formGroupExampleInput2">
                {" "}
                ¿Para el despacho, qué priorizas?
              </label>
              <div className="select11 mx-auto">
              <select className="etiqueta3 w-100" name="selectedparaquien"  onChange={(e) => setenvio(e.target.value)}>
                <option value="mismodia">Entrega en el mismo día y pagar el despacho</option>
                <option value="nopagar">Entrega en 3 o 5 días, pero no pagar por el despacho</option>
                <option value="antesposible">Me es indiferente pagar por el despacho, si llega lo antes posible</option>
                <option value="nopagar">No quiero pagar despacho, en ningun caso.</option>

              </select>
              </div>
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

export default Step11;
