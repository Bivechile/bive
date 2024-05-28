import "bootstrap/dist/css/bootstrap.css";
import "./step8.css";

import FadeIn from "react-fade-in";

import LogoBive from "../../../images/Bive-icono.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const Step8 = ({ onButtonClick, props, onPreviousButtonClick }) => {



  const handleButtonClick = () => {

    const primeraCategoria = localStorage.getItem('primeraCategoria');
    const primerasPreguntasCadena = localStorage.getItem('primerasPreguntasCadena');
    const segundaPreguntasCadena = localStorage.getItem('segundaPreguntasCadena');
    const categoriasCadena = localStorage.getItem('categoriasCadena');
    const terceraPreguntaCadena = localStorage.getItem('terceraPreguntaCadena');
    // eslint-disable-next-line
    const datosPersonales = localStorage.getItem('datosPersonales');

 // Función para asegurarse de que el valor es un array
 const parseArray = (value) => {
  try {
    const parsedValue = JSON.parse(value);
 
    if (Array.isArray(parsedValue)) {
      return parsedValue;
    }
    return [];
  } catch (error) {
    console.error('Error al parsear el valor:', error);
    return [];
  }
};

// Parsear los valores obtenidos del localStorage a arrays
const itemPrimeraCategoria = [primeraCategoria];
console.log('categoria',itemPrimeraCategoria )
const itemPrimerasPreguntasCadena = parseArray(primerasPreguntasCadena);
const itemSegundaPreguntasCadena = parseArray(segundaPreguntasCadena);
const itemCategoriasCadena = parseArray(categoriasCadena);
const itemTerceraPreguntaCadena = parseArray(terceraPreguntaCadena);

const primeraCadenaIngredientes = [
  ...itemPrimeraCategoria,
  ...itemPrimerasPreguntasCadena,
  ...itemSegundaPreguntasCadena,
].map(item => `${item.trim()}`);

localStorage.setItem("primeraCadenaIngredientes", JSON.stringify(primeraCadenaIngredientes));

const todosLosIngredientes = [
  ...itemPrimeraCategoria,
  ...itemPrimerasPreguntasCadena,
  ...itemSegundaPreguntasCadena,
  ...itemCategoriasCadena,
  ...itemTerceraPreguntaCadena,
].map(item => `${item.trim()}`);



    console.log('ingredientes', todosLosIngredientes);

    onButtonClick(todosLosIngredientes);
 
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
                <ProgressBar variant="info" now={100} />
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
                <label htmlFor="nombre" className="titleS2">
                  El servicio de recomendación se basa en datos proporcionados
                  por proveedores de alimentos y fabricantes, pero no garantiza
                  la precisión, integridad o actualización constante de la
                  información. Los usuarios deben tener en cuenta que la
                  información sobre alérgenos y productos puede cambiar sin
                  previo aviso, y no nos hacemos responsables de los cambios en
                  la composición de los alimentos. Se recomienda a los usuarios
                  verificar directamente la información de los productos antes
                  de su consumo. Además, el servicio se ofrece solo con fines
                  informativos y de recomendación, no reemplaza el asesoramiento
                  médico o profesional, por lo que se insta a los usuarios a
                  seguir las indicaciones de los profesionales de la salud en
                  caso de alergias o condiciones alimentarias específicas.
                </label>
              </div>
            </div>
            <div className="box-f2">
              <button
                type="button"
                className="mybuttonFormstep2new"
                onClick={handleButtonClick}
              >
               Estoy de acuerdo
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
export default Step8;
