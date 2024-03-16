import "bootstrap/dist/css/bootstrap.css";
import "./step9.css";
import data from "../step8/data2.json";
import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft } from "react-bootstrap-icons";

const Step9 = ({ onButtonClick, props, onPreviousButtonClick }) => {

  const [itemprod, setItemprod] = useState([]);
  const [habilitarBoton, setHabilitarBoton] = useState(false);
  const [numeroCategoria, setNumeroCategoria] = useState(0);
  const [intolerancia, setIntolerancia] = useState(false);
  const [continuar, setContinuar] = useState(false);
  const [paso10, setPaso10] = useState(localStorage.getItem('paso10'));

  useEffect(() => {
    const findCategoriasByTags = (tags) => {
      const categoriasEncontradas = [];
  
      data.categorias.forEach((categoria) => {
        categoria.subcategorias.forEach((subcategoria) => {
          if (tags.includes(subcategoria.tag)) {
            categoriasEncontradas.push(categoria.nombre);
          }
        });
      });
  
      const categoriasUnicas = Array.from(new Set(categoriasEncontradas));
  
      return {
        categorias: categoriasUnicas,
        cantidad: categoriasUnicas.length,
      };
    };
  
    const resultado = findCategoriasByTags(props);
    console.log('resultado', resultado)
    setNumeroCategoria(resultado.cantidad);
    setIntolerancia(resultado.categorias.includes("Intolerancias")?true:false);
    setContinuar(true);
    localStorage.removeItem('itemprod');
    localStorage.removeItem('itemprodCadena');

  }, []);




  const handleCheckboxChange = (value) => {
    setItemprod([...itemprod, value]);
    setHabilitarBoton(true);
  };
  const handleButtonClick = () => {
    onButtonClick(itemprod);
    localStorage.itemprod = itemprod;
    localStorage.setItem('itemprodCadena', JSON.stringify(itemprod));
  };



  if (!continuar) return null;
console.log('numero de categoria',numeroCategoria  );
console.log('intolerancia',intolerancia );
  return (
    <Container>
      <FadeIn>
        <label className="etiqueta1" htmlFor="formGroupExampleInput2">
          Selecciona los productos de tu preferencia
        </label>
        {numeroCategoria == 1 && intolerancia == true && onButtonClick()}
        {numeroCategoria == 1 && intolerancia == true && paso10 && onPreviousButtonClick()}
        {props.map(
          (prop, index) =>
            prop && (
              <>
                {data.categorias.map((categoria) => (
                  <>
                    {categoria.subcategorias.map(
                      (subcategoria) =>
                        prop.includes(subcategoria.tag) && (
                          <>
                            {subcategoria?.items ? (
                              <div className="checkboxeslinea">
                                <div
                                  key={subcategoria.nombre}
                                  className="group"
                                >
                                  {subcategoria.nombre}
                                </div>
                                <Row>
                                  {subcategoria?.items?.map((item) => (
                                    <Col xs={12} lg={4}>
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                      >
                                        <input
                                          type="checkbox"
                                          id="chekbox1"
                                          value={item.tag}
                                          className="form-check-input"
                                          // checked={categoria.includes("despensa")}
                                          onChange={() =>
                                            handleCheckboxChange(item.tag)
                                          }
                                        />

                                        {item.nombre}
                                      </label>
                                    </Col>
                                  ))}
                                </Row>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        )
                    )}
                  </>
                ))}
              </>
            )
        )}
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

export default Step9;
