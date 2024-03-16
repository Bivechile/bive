import "bootstrap/dist/css/bootstrap.css";
import "./step7.css";
import FadeIn from "react-fade-in";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { ArrowLeft } from "react-bootstrap-icons";

const Step7 = ({ onButtonClick, props, onPreviousButtonClick }) => {
  const [categoria, setCategoria] = useState([]);
  const [habilitarBoton, setHabilitarBoton] = useState(false);

  // Manejar el cambio de estado cuando se hace clic en un checkbox
  const handleCheckboxChange = (value) => {

      setCategoria([...categoria, value]);
      setHabilitarBoton(true);

  };
  useEffect(() => {
    // Recuperar el estado almacenado en localStorage al cargar el componente
    localStorage.removeItem("categoria");
    localStorage.removeItem("numerocategorias");



  }, []);

  const handleButtonClick = () => {
    onButtonClick(categoria);
    const numerocategorias = categoria.length;
console.log('numero', numerocategorias);
    localStorage.numerocategorias = numerocategorias;
    localStorage.categoria = categoria;
  };

  return (
    <Container>
      <FadeIn>
        <div className="mb-3">
          <label
            className="etiqueta1
          7"
           htmlFor="formGroupExampleInput2"
          >
            ¿Que categoria te gustaria ver?
          </label>
          <div className="form-check">
            <label className="etiqueta1" htmlFor="formGroupExampleInput2"></label>


              <>
                <div className="checkboxeslinea">
                  <div className="group">Categorias</div>
                  <Row>
                    <Col xs={12} lg={4}>
                      <label className="form-check-label"htmlFor="flexCheckDefault">
                        <input
                          type="checkbox"
                          id="chekbox1"
                          value="despensa"
                          className="form-check-input"
                        //  checked={categoria.includes("despensa")}
                          onChange={() => handleCheckboxChange("despensa")}
                        />
                        Despensa
                      </label>
                    </Col>
                    <Col xs={12} lg={4}>
                      <label className="form-check-label"htmlFor="flexCheckDefault">
                        <input
                          type="checkbox"
                          id="chekbox1"
                          className="form-check-input"
                          value="colaciones"
                       //   checked={categoria.includes("colaciones")}
                          onChange={() => handleCheckboxChange("colaciones")}
                        />
                        Colaciones
                      </label>
                    </Col>
                    <Col xs={12} lg={4}>
                      <label className="form-check-label"htmlFor="flexCheckDefault">
                        <input
                          type="checkbox"
                          id="chekbox1"
                          className="form-check-input"
                          value="suplementos"
                       //   checked={categoria.includes("suplementos")}
                          onChange={() => handleCheckboxChange("suplementos")}
                        />
                        Suplementos
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} lg={4}>
                      <label className="form-check-label"htmlFor="flexCheckDefault">
                        <input
                          type="checkbox"
                          id="chekbox1"
                          className="form-check-input"
                          value="intolerancias"
                       //   checked={categoria.includes("intolerancias")}
                          onChange={() => handleCheckboxChange("intolerancias")}
                        />
                        Intolerancias
                      </label>
                    </Col>
                  </Row>
                </div>
              </>
             
            

            <div className="botones">
              <div className="col-lg-6 col-sm-12">
                <button
                  type="submit"
                  className="mybuttonFormstep1"
                  onClick={handleButtonClick}
                  disabled={!habilitarBoton}
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
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Step7;
