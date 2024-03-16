import "bootstrap/dist/css/bootstrap.css";
import "./FormIndex.css";

function FormIndex() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12">
        <h1 className="paragraf8">
        Si tienes otras dudas, contáctanos
              </h1>
          <form className="form mx-auto">
          <div className="mb-3">
              <label htmlFor="Nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" placeholder="Ingresa tu nombre" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Ingresa tu correo" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            
            </div>
            <div className="mb-3">
              <label htmlFor="asunto" className="form-label">Asunto</label>
              <input type="text" className="form-control" placeholder="Escribe el asunto" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="asunto" className="form-label">Mensaje</label>
              <textarea className="form-control"  rows="3"  placeholder="Escribe el mensaje aqui..."  required></textarea>
            </div>
            <button type="submit" className="mybuttonFomr">Enviar</button>
          </form>




        </div>
      </div>
    </div>
    </>
  );
}

export default FormIndex;
