import "bootstrap/dist/css/bootstrap.css";
import "./step404.css";
import FadeIn from "react-fade-in";



const Step404 = ({ onButtonClick }) => {




  const handleButtonClick = () => {


  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <h1 className="paragraform mx-auto">
              UPSSS la pagin que busca no se encuentra.
              <br />.
            </h1>
            <h1 className="paragraformsub mx-auto">
            Te redireccionaremos a la raiz del proyecto en el boton "Home"
      
              <br /> 
              <br /> 
              <br />      
            </h1>

            <div className="box-f404">
            <a href="/">
              <button
                type="button"
                className="mybuttonFormstep1"
            onClick={handleButtonClick}
              >
                Home
              </button>
              </a>

            </div>
            <div>
              <div className="box-f3">
                
      
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step404;
