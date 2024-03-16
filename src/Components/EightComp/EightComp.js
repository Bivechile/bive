import "bootstrap/dist/css/bootstrap.css";
import "./EightComp.css";

function FourComp() {
  return (
    <div className="row">
      <div className="box8">
        <div className="col-12">
          <div className="card8 mx-auto " >
            <div className="card-body">
              <h1 className="paragraf8E">
                Responde un par de preguntas, para
                <br /> conocerte mejor y buscaremos el mejor <br />
                “Match” para ti. Somos como el “Tinder”
                <br /> de la alimentación y nutrición.
              </h1>
              <h1 className="paragraf8-s">
              ¿Qué te parece?
  
              </h1>

            </div>
            <a href="/form">
            <button type="button" className="mybutton8 mx-auto">
           Quiero probar BIve
          </button>
          </a>
          </div>


        </div>
      </div>
    </div>
  );
}

export default FourComp;
