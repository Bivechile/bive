import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import "./bandeja.css";

const Bandeja = ({ onButtonClick, props, onPreviousButtonClick }) => {
  const tag_encontrado = props;
  console.log('tag', props);

  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  const calculateTotalPrice = (id) => {
    const product = filteredProducts.find((producto) => producto.id === id);
    const quantity = quantities[id];
    return quantity * parseFloat(product.variants[0].price);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "http://localhost:4000/products";

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const calculateTagScore = (productTags, tags) => {
          let score = 0;
          tags.forEach((tag) => {
            if (productTags.includes(tag)) {
              score += 1;
            }
          });
          return score;
        };

        const productsWithScores = data.map((product) => {
          const productTags = product.tags.split(",").map((tag) => tag.trim());
          const score = calculateTagScore(productTags, tag_encontrado);
          return { ...product, score };
        });

        const filteredProducts = productsWithScores
          .filter((product) => product.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 15);

        const initialQuantities = {};
        filteredProducts.forEach((product) => {
          initialQuantities[product.id] = 1;
        });

        setQuantities(initialQuantities);
        setFilteredProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error.message);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line 
  }, []);

  const decreaseQuantity = (id) => {
    const newQuantities = { ...quantities };
    if (newQuantities[id] > 1) {
      newQuantities[id] -= 1;
      setQuantities(newQuantities);
    }
  };

  const increaseQuantity = (id) => {
    const newQuantities = { ...quantities };
    newQuantities[id] += 1;
    setQuantities(newQuantities);
  };

  const handleDelete = (id) => {
    const updatedProducts = filteredProducts.filter(
      (producto) => producto.id !== id
    );
    setFilteredProducts(updatedProducts);
  };

  const sendCart = async () => {
    const cartItems = filteredProducts.map((producto) => {
      const variantId = producto.variants[0].admin_graphql_api_id;
      const quantity = quantities[producto.id];
      return { variantId, quantity };
    });
    try {
      const response = await fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("data devuelta", data);
      const nuevaVentana = window.open();

      // Redirigir la nueva ventana a la URL deseada
      if (nuevaVentana) {
        nuevaVentana.location.href = data.redirectUrl;
      }
      // window.location.href = `https://berrots-life.myshopify.com/cart`;
    } catch (error) {
      console.error("Error al llamar a la API:", error.message);
    }
  };

  if (loading) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12" className="text-center">
            <Button
              className="spinner"
              disabled
              style={{ backgroundColor: "green" }}
            >
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                style={{ color: "white" }}
              />
              Cargando...
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col
          xs
          lg="12"
          className="d-flex justify-content-center paragraformsub-banedeja "
        >
          <div className="titlebandeja">
            Según tus preferencias, estos son tus &nbsp;{" "}
            <span style={{ color: "green" }}> PRODUCTOS</span>
          </div>
        </Col>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <React.Fragment key={producto.id}>
              <Row className="justify-content-md-center">
                <Col
                  xs
                  lg="2"
                  className="d-flex justify-content-center align-items-center"
                >
                  <img
                    src={producto.image.src}
                    alt={producto.title}
                    style={{ height: 70, width: 70 }}
                  />
                </Col>
                <Col xs lg="5" className="d-flex flex-column align-items-start">
                  <p className="titlebandeja">{producto.title}</p>
                  <div className="quantity-container">
                    <button
                      onClick={() => decreaseQuantity(producto.id)}
                      disabled={quantities[producto.id] === 1}
                    >
                      -
                    </button>
                    <span className="quantity-display">
                      {quantities[producto.id]}
                    </span>
                    <button onClick={() => increaseQuantity(producto.id)}>
                      +
                    </button>
                  </div>
                </Col>
                <Col className="text-end">
                  <p className="price-label">
                    {`$ ${calculateTotalPrice(producto.id).toLocaleString(
                      "es-CL",
                      {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      }
                    )}`}
                  </p>

                  <a
                    className="delete-button"
                    onClick={() => handleDelete(producto.id)}
                    href="/#"
                  >
                    Eliminar
                  </a>
                </Col>
              </Row>

              <hr className="hr" />
            </React.Fragment>
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            <p className="sinproduct">
              Al parecer no tenemos productos que cumplan con tus exigencias,
              por favor disculpa.
            </p>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="button_carro" onClick={() => sendCart()}>
              Vamos a llenar el carrito
            </button>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Bandeja;
