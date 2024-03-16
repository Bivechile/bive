import "bootstrap/dist/css/bootstrap.css";


function DashGrid() {
  return (
    <>
     <Container>
     <Row className="justify-content-md-center">
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3 (wider)</Col>
      
      </Row>
    </Container>
    </>
  );
}

export default DashGrid;
