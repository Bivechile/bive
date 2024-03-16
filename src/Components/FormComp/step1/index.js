import "bootstrap/dist/css/bootstrap.css";
import "./step1.css";
import FadeIn from "react-fade-in";


const Step1 = ({ onButtonClick }) => {

  const handleButtonClick = () => {

    onButtonClick();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <h1 className="paragraform mx-auto">
              ¿Necesitas ayuda en tu compra de alimentos saludables?<br></br>
              Aquí en Bive te ayudaremos a encontrar el mejor match para tu
              <br /> lista de compras.
            </h1>
            <h1 className="paragraformsub mx-auto">
              Dejanos conocerte mejor y buscaremos la mejor opción de alimentos
              <br /> saludables para ti. Te enviaremos por correo un listado de
              productos
              <br /> sugerido
            </h1>

            <div className="box-f2">
              <button
                type="button"
                className="mybuttonFormstep1"
            onClick={handleButtonClick}
              >
                Comenzar
              </button>
              <p className="alladobotonhome">
                pulse <strong>Enter ↵</strong>
              </p>
            </div>
            <div>
              <div className="box-f3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <p className="mini">dura 4 minutos</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step1;
