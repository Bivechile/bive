import 'bootstrap/dist/css/bootstrap.css';
import './Headersb.css';
import logo from '../../images/Bive.webp'


function Headersb() {
  return (

    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <img className="image mt-4 mx-auto d-block  mb-4" src={logo} alt="Berrots" />


        </div>
      </div>
    </div>

  );
}

export default Headersb;