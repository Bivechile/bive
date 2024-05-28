import "bootstrap/dist/css/bootstrap.css";
import FadeIn from "react-fade-in";
import "../Bar/Bar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";


const Bar = ({ onButtonClick, props, onPreviousButtonClick }) => {
  return (
    <Container>
      <FadeIn>
        <Row>
          <hr className="hr" />
          <Col className="d-flex justify-content-center align-items-center">
            <div className="title_bar">
              CREACIÓN DEL PERFIL
              <ProgressBar variant="info" now={20} />
            </div>
          </Col>
          <hr className="hr" />
        </Row>
      </FadeIn>
    </Container>
  );
};
export default Bar;
