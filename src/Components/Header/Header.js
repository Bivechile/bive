import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import logo from '../../images/Bive.webp'


function Header() {
  return (

    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <img className="image mt-4 mx-auto d-block " src={logo} alt="Olympic athlete Katie Zaferes" />
          <hr />
          <div className='botonera'>
          <a href="/form">
            <button type="button" className="mybutton">Alimentación saludable Personalizada</button>
            </a>
            <a href="/form">
            <button type="button" className="mybutton">Quiero mi asesoria</button>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;