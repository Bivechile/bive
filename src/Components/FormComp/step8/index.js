import "bootstrap/dist/css/bootstrap.css";
import "./step8.css";
import data from "./data2.json";
import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft } from "react-bootstrap-icons";

const Step8 = ({ onButtonClick, props, onPreviousButtonClick }) => {



  const [categoriasub, setCategoriaSub] = useState([]);
  const [categoriasubintole, setCategoriaSubintole] = useState([]);
  const [despensa, setdespensa] = useState("");
  const [colaciones, setcolaciones] = useState("");
  const [suplementos, setSuplementos] = useState("");
  const [intolerancias, setIntolerancias] = useState("");
  const [habilitarBoton, setHabilitarBoton] = useState(false);

  useEffect(() => {
    localStorage.removeItem('categoriasub');
    localStorage.removeItem('categoriasubcadena');

  

  }, [])

  
  const handleCheckboxChangeinmtole = (value) => {
    setCategoriaSubintole([...categoriasubintole, value]);
    setHabilitarBoton(true);
  };


  // Manejar el cambio de estado cuando se hace clic en un checkbox
  const handleCheckboxChange = (value) => {
    setCategoriaSub([...categoriasub, value]);
    setHabilitarBoton(true);
  };



  const handleButtonClick = () => {
    const categoriaunida=`${categoriasub}${categoriasubintole}`;
    const arregloTotal = categoriasub.concat(categoriasubintole);
    
    console.log('categotis unids',arregloTotal )
    onButtonClick(arregloTotal);
    localStorage.setItem('categoriasubcadenaintolesolo', JSON.stringify(categoriasubintole))

    localStorage.categoriasub = categoriasub;


  };
  const buscarPalabra = () => {
    const indice = props.indexOf("despensa");
    if (indice !== -1) {
      setdespensa("despensa");
    }
    const indice2 = props.indexOf("colaciones");
    if (indice2 !== -1) {
      setcolaciones("colaciones");
    }
    const indice3 = props.indexOf("suplementos");
    if (indice3 !== -1) {
      setSuplementos("suplementos");
    }
    const indice4 = props.indexOf("intolerancias");
    if (indice4 !== -1) {
      setIntolerancias("intolerancias");
    }
  };

  useEffect(() => {
    // Llamar a la función buscarPalabra después de cada renderizado
    buscarPalabra();
    localStorage.removeItem("paso10")
  }, []);

  return (
    <Container>
      <FadeIn>
        <div className="mb-3">
          <label className="etiqueta1" htmlFor="formGroupExampleInput2">
            ¿Que subcategoria te gustaria ver?
          </label>
          <div className="form-check">
            {despensa && (
              <div className="checkboxeslinea">
                <>
                  <Row>
                    {data.categorias.map(
                      (categoria) =>
                        categoria.tag === "despensa" && (
                          <>
                            <div key={`div-${categoria.nombre}`} className="group">
                              {categoria.nombre}
                            </div>

                            {categoria.subcategorias.map((subcategoria) => (
                                   <Col key={subcategoria.nombre} xs={12} lg={4}>
                                <label
                                  className="form-check-label"
                                 htmlFor="flexCheckDefault"
                                >
                                  <input
                                    type="checkbox"
                                    id="chekbox1"
                                    value={subcategoria.nombre}
                                    className="form-check-input"
                                    // checked={categoria.includes("despensa")}
                                    onChange={() =>
                                      handleCheckboxChange(subcategoria.tag)
                                    }
                                  />

                                  {subcategoria.nombre}
                                </label>
                              </Col>
                            ))}
                          </>
                        )
                    )}
                  </Row>
                </>
              </div>
            )}

            {colaciones && (
              <div className="checkboxeslinea">
                <>
                  <Row>
                    {data.categorias.map(
                      (categoria) =>
                        categoria.tag === "colaciones" && (
                          <>
                            <div key={categoria.tag} className="group">
                              {categoria.nombre}
                            </div>

                            {categoria.subcategorias.map((subcategoria) => (
                                   <Col key={subcategoria.nombre} xs={12} lg={4}>
                                <label
                                  className="form-check-label"
                                 htmlFor="flexCheckDefault"
                                >
                                  <input
                                    type="checkbox"
                                    id={subcategoria.tag}
                                    value={subcategoria.nombre}
                                    className="form-check-input"
                                    // checked={categoria.includes("despensa")}
                                    onChange={() =>
                                      handleCheckboxChange(subcategoria.tag)
                                    }
                                  />

                                  {subcategoria.nombre}
                                </label>
                              </Col>
                            ))}
                          </>
                        )
                    )}
                  </Row>
                </>
              </div>
            )}

            {suplementos && (
              <div className="checkboxeslinea">
               <>
                  <Row>
                    {data.categorias.map(
                      (categoria) =>
                        categoria.tag === "suplementos" && (
                          <>
                            <div key={categoria.tag} className="group">
                              {categoria.nombre}
                            </div>

                            {categoria.subcategorias.map((subcategoria) => (
                                   <Col key={subcategoria.nombre} xs={12} lg={4}>
                                <label
                                  className="form-check-label"
                                 htmlFor="flexCheckDefault"
                                >
                                  <input
                                    type="checkbox"
                                    id={subcategoria.tag}
                                    value={subcategoria.nombre}
                                    className="form-check-input"
                                    // checked={categoria.includes("despensa")}
                                    onChange={() =>
                                      handleCheckboxChange(subcategoria.tag)
                                    }
                                  />

                                  {subcategoria.nombre}
                                </label>
                              </Col>
                            ))}
                          </>
                        )
                    )}
                  </Row>
                </>                
              </div>
            )}

            {intolerancias && (
              <div className="checkboxeslinea">
                 <>
                  <Row>
                    {data.categorias.map(
                      (categoria) =>
                        categoria.tag === "intolerancias" && (
                          <>
                            <div key={categoria.nombre} className="group">
                              {categoria.nombre}
                            </div>

                            {categoria.subcategorias.map((subcategoria) => (
                                   <Col key={subcategoria.nombre} xs={12} lg={4}>
                                <label
                                  className="form-check-label"
                                 for="flexCheckDefault"
                                >
                                  <input
                                    type="checkbox"
                                    id="chekbox1"
                                    value={subcategoria.nombre}
                                    className="form-check-input"
                                    // checked={categoria.includes("despensa")}
                                    onChange={() =>
                                      handleCheckboxChangeinmtole(subcategoria.tag)
                                    }
                                  />

                                  {subcategoria.nombre}
                                </label>
                              </Col>
                            ))}
                          </>
                        )
                    )}
                  </Row>
                </>
              </div>
            )}
          </div>
        </div>

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
      </FadeIn>
    </Container>
  );
};
export default Step8;
