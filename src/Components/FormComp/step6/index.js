import "bootstrap/dist/css/bootstrap.css";
import "./step6.css";
import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft } from "react-bootstrap-icons";

const Step6 = ({ onButtonClick, props, onPreviousButtonClick }) => {
  const [contenido, setContenido] = useState([]);
  const [habilitarBoton, setHabilitarBoton] = useState(false);
  const prop=props || localStorage.getItem('tipoProducto');

  // Manejar el cambio de estado cuando se hace clic en un checkbox
  const handleCheckboxChange = (value) => {
 
      setContenido([...contenido, value]);
      setHabilitarBoton(true)
    
  };
  useEffect(() => {
    localStorage.removeItem("contenido");


  
  }, []);

  const handleSubmit = () => {
    onButtonClick(contenido);
    localStorage.setItem('contenido', JSON.stringify(contenido));
    

  };

  return (
    <Container>
      <FadeIn>
        <div>
          <label className="etiqueta1" htmlFor="formGroupExampleInput2">
       
            ¿Seleccionar?
          </label>
          <div className="form-check">
            {prop === "dietas" && (
              <div className="checkboxeslinea">
                <div className="group">Dietas especiales / Bajar de peso</div>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="low-carb"
                        id="flexCheckDefault"
                      //  checked={contenido.includes("low-carb")}
                        onChange={() => handleCheckboxChange("low-carb")}
                      />
                      Productos Keto
                    </label>
                  </Col>
                  <Col xs={12} lg={4}>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-azucar-añadida"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("sin-azucar-añadida")}
                        onChange={() =>
                          handleCheckboxChange("sin-azucar-añadida")
                        }
                      />
                    
                      Productos sin azucar añadida
                    </label>
                  </Col>

                  <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes(
                       //   "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                       // )}
                        onChange={() =>
                          handleCheckboxChange(
                            "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                          )
                        }
                      />
                      Productos altos en proteinas
                    </label>
                  </Col>
                </Row>
              </div>
            )}
            {prop === "alergias" && (
              <div className="checkboxeslinea">
                <div className="group">Alergias / Sensibilidad alimentaria</div>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-soya"
                        id="flexCheckDefault"
                    //    checked={contenido.includes("sin-soya")}
                        onChange={() => handleCheckboxChange("sin-soya")}
                      />
                      Productos sin soya
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-leche"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("sin-leche")}
                        onChange={() => handleCheckboxChange("sin-leche")}
                      />
                      Productos sin leche
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-gluten"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("sin-gluten")}
                        onChange={() => handleCheckboxChange("sin-gluten")}
                      />
                      Productos sin gluten
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-gluten-certificados"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("sin-gluten-certificados")}
                        onChange={() =>
                          handleCheckboxChange("sin-gluten-certificados")
                        }
                      />
                      Productos sin gluten certificados
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-frutos-secos"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("sin-frutos-secos")}
                        onChange={() =>
                          handleCheckboxChange("sin-frutos-secos")
                        }
                      />
                      Productos sin frutos secos
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-nueces"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("sin-nueces")}
                        onChange={() => handleCheckboxChange("sin-nueces")}
                      />
                      Productos sin nueces
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-huevo"
                        id="flexCheckDefault2"
                    //    checked={contenido.includes("sin-huevo")}
                        onChange={() => handleCheckboxChange("sin-huevo")}
                      />
                      Productos sin huevo
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-azucar"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("sin-azucar")}
                        onChange={() => handleCheckboxChange("sin-azucar")}
                      />
                      Productos sin azucar
                    </label>
                  </Col>
                    <Col xs={12} lg={4}></Col>
                </Row>
              </div>
            )}
            {prop === "saludable" && (
              <div className="checkboxeslinea">
                <div className="group">Alimentación saludable</div>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="raw"
                        id="flexCheckDefault"
                      //  checked={contenido.includes("raw")}
                        onChange={() => handleCheckboxChange("raw")}
                      />
                      Productos raw
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="organico"
                        id="flexCheckDefault2"
                   //     checked={contenido.includes("organico")}
                        onChange={() => handleCheckboxChange("organico")}
                      />
                      Productos organicos
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-gmo"
                        id="flexCheckDefault2"
                    //    checked={contenido.includes("sin-gmo")}
                        onChange={() => handleCheckboxChange("sin-gmo")}
                      />
                      Productos gmo
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="limpia"
                        id="flexCheckDefault2"
                   //     checked={contenido.includes("limpia")}
                        onChange={() => handleCheckboxChange("limpia")}
                      />
                      Etiqueta limpia
                    </label>
                  </Col>
                    <Col xs={12} lg={4}></Col>
                    <Col xs={12} lg={4}></Col>
                </Row>{" "}
              </div>
            )}
            {prop === "Vegetarianos" && (
              <div className="checkboxeslinea">
                <div className="group">Productos veganos / Vegetarianos</div>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="vegano"
                        id="flexCheckDefault"
                   //     checked={contenido.includes("vegano")}
                        onChange={() => handleCheckboxChange("vegano")}
                      />
                      Todos
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="raw"
                        id="flexCheckDefault"
                       // checked={contenido.includes("raw")}
                        onChange={() => handleCheckboxChange("raw")}
                      />
                      Productos raw
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="organico"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("organico")}
                        onChange={() => handleCheckboxChange("organico")}
                      />
                      Productos organicos
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-gmo"
                        id="flexCheckDefault2"
                    //    checked={contenido.includes("sin-gmo")}
                        onChange={() => handleCheckboxChange("sin-gmo")}
                      />
                      Productos gmo
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="limpia"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("limpia")}
                        onChange={() => handleCheckboxChange("limpia")}
                      />
                      Etiqueta limpia
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-soya"
                        id="flexCheckDefault"
                    //    checked={contenido.includes("sin-soya")}
                        onChange={() => handleCheckboxChange("sin-soya")}
                      />
                      Productos sin soya
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-leche"
                        id="flexCheckDefault2"
                    //    checked={contenido.includes("sin-leche")}
                        onChange={() => handleCheckboxChange("sin-leche")}
                      />
                      Productos sin leche
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-gluten"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("sin-gluten")}
                        onChange={() => handleCheckboxChange("sin-gluten")}
                      />
                      Productos sin gluten
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-gluten-certificados"
                        id="flexCheckDefault2"
                    //    checked={contenido.includes("sin-gluten-certificados")}
                        onChange={() =>
                          handleCheckboxChange("sin-gluten-certificados")
                        }
                      />
                      Productos sin gluten certificados
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-frutos-secos"
                        id="flexCheckDefault2"
                  //      checked={contenido.includes("sin-frutos-secos")}
                        onChange={() =>
                          handleCheckboxChange("sin-frutos-secos")
                        }
                      />
                      Productos sin frutos secos
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-nueces"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("sin-nueces")}
                        onChange={() => handleCheckboxChange("sin-nueces")}
                      />
                      Productos sin nueces
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-huevo"
                        id="flexCheckDefault2"
                   //     checked={contenido.includes("sin-huevo")}
                        onChange={() => handleCheckboxChange("sin-huevo")}
                      />
                      Productos sin huevo
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-azucar"
                        id="flexCheckDefault2"
                    //    checked={contenido.includes("sin-azucar")}
                        onChange={() => handleCheckboxChange("sin-azucar")}
                      />
                      Productos sin azucar
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="sin-azucar-añadida"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("sin-azucar-añadida")}
                        onChange={() =>
                          handleCheckboxChange("sin-azucar-añadida")
                        }
                      />
                      Productos sin azucar añadida
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                      id="flexCheckDefault2"
                  //    checked={contenido.includes(
                   //     "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                   //   )}
                      onChange={() =>
                        handleCheckboxChange(
                          "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                        )
                      }
                    />
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      Productos altos en proteinas
                    </label>
                  </Col>
                </Row>
              </div>
            )}
            {prop === "deportiva" && (
              <div className="checkboxeslinea">
                <div className="group">Alimentación deportiva</div>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes(
                      //    "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                      //  )}
                        onChange={() =>
                          handleCheckboxChange(
                            "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                          )
                        }
                      />
                      Productos altos en proteinas
                    </label>
                  </Col>
                </Row>
              </div>
            )}
            {prop === "Suplementos" && (
              <div className="checkboxeslinea">
                <div className="group">Suplementos alimenticios</div>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                        id="flexCheckDefault2"
                   //     checked={contenido.includes(
                    //      "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                    //    )}
                        onChange={() =>
                          handleCheckboxChange(
                            "pasta-alta-en-proteina, batidos-proteicos, clado-de-hueso, barra-proteicas, carne-deshidratada, batidos-y-proteinas, otros-superalimentos"
                          )
                        }
                      />
                      Productos altos en proteinas
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="probioticos"
                        id="flexCheckDefault"
                     //   checked={contenido.includes("probioticos")}
                        onChange={() => handleCheckboxChange("probioticos")}
                      />
                      Probioticos
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="minerales"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("minerales")}
                        onChange={() => handleCheckboxChange("minerales")}
                      />
                      Minerales
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label className="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        classNameName="form-check-input"
                        type="checkbox"
                        value="vitaminas"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("vitaminas")}
                        onChange={() => handleCheckboxChange("vitaminas")}
                      />
                      Vitaminas
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label classNameName="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        classNameName="form-check-input"
                        type="checkbox"
                        value="antiestress"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("antiestress")}
                        onChange={() => handleCheckboxChange("antiestress")}
                      />
                      Antiestress
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label classNameName="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        classNameName="form-check-input"
                        type="checkbox"
                        value="mejorar-dormir"
                        id="flexCheckDefault2"
                     //   checked={contenido.includes("mejorar-dormir")}
                        onChange={() => handleCheckboxChange("mejorar-dormir")}
                      />
                      Mejorar dormir
                    </label>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                    <label classNameName="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        classNameName="form-check-input"
                        type="checkbox"
                        value="mejorar-inmunidad"
                        id="flexCheckDefault2"
                   //     checked={contenido.includes("mejorar-inmunidad")}
                        onChange={() =>
                          handleCheckboxChange("mejorar-inmunidad")
                        }
                      />
                      Mejorar inmunidad
                    </label>
                  </Col>
                    <Col xs={12} lg={4}>
                    <label classNameName="form-check-label"  htmlFor="flexCheckDefault">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="mas-energia"
                        id="flexCheckDefault2"
                      //  checked={contenido.includes("mas-energia")}
                        onChange={() => handleCheckboxChange("mas-energia")}
                      />
                      Mas energia
                    </label>
                  </Col>
                    <Col xs={12} lg={4}></Col>
                </Row>
              </div>
            )}
          </div>
        </div>

        <div className="botones">
              <div className="col-lg-6 col-sm-12">
                <button
                  type="submit"
                  className="mybuttonFormstep1"
                  onClick={handleSubmit}
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
      </FadeIn>
    </Container>
  );
};

export default Step6;
