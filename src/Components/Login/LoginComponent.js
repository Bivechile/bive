import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FadeIn from "react-fade-in";
import { useState, useEffect } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginComponent = () => {
  const usuarioCorrecto = "administrador";
  const claveCorrecta = "Bive2024";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === usuarioCorrecto && password === claveCorrecta) {
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <FadeIn>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ marginTop: "-10px", marginBottom: "90px" }}
      >
        <Card style={{ width: "450px" }}>
          <Card.Body>
            <Card.Title
              className="text-center"
              style={{ color: "rgb(144, 216, 216)", fontWeight: "bold" }}
            >
              Iniciar Sesión
            </Card.Title>
            <Form>
              <Form.Group
                controlId="formUsername"
                style={{ marginTop: "25px" }}
              >
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su usuario" />
              </Form.Group>

              <Form.Group
                controlId="formPassword"
                style={{ marginTop: "45px" }}
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>

              <Button
                type="submit"
                block
                onClick={handleLogin}
                style={{
                  marginTop: "45px",
                  background: "rgb(144, 216, 216)",
                  borderColor: "rgb(144, 216, 216)",
                  color: "rgb(41, 100, 41)",
                }}
              >
                Iniciar Sesión
              </Button>
            </Form>
            {error && (
              <div style={{ marginTop: "10px", color: "red" }}>{error}</div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </FadeIn>
  );
};

export default LoginComponent;
