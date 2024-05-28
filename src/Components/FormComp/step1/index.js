import "bootstrap/dist/css/bootstrap.css";
import "./step1.css";
import FadeIn from "react-fade-in";
import LogoBive from "../../../images/Bive-icono.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const Step1 = ({ onButtonClick }) => {
  const handleButtonClick = () => {
    onButtonClick();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>

          <hr className="hr" />
          <div className="d-flex justify-content-center align-items-center">
            <div className="title_bar">
              CREACIÓN DEL PERFIL
              <ProgressBar variant="info" now={10} />
            </div>
          </div>
          <hr className="hr_d" />
            <img
              className=" mt-4 mx-auto d-block mb-4"
              src={LogoBive}
              alt="Berrots"
              width="70"
              height="140"
            />
            <h1 className="new_title mx-auto">
              ¿NECESITAS AYUDA EN TU COMPRA DE ALIMENTOS SALUDABLES?<br></br>{" "}
            </h1>
            <div className="new_title_2">

              Aquí te ayudaremos a encontrar el mejor match para tu lista de
              compras.
            </div>

            <div className="box-f2">
              <button
                type="button"
                className="mybuttonFormstep1new"
                onClick={handleButtonClick}
              >
                Comencemos
              </button>
            </div>
            <div className="condiciones">
              Al utilizar este cuestionario, estás aceptando nuestros Terminos y
              Condiciones
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step1;
