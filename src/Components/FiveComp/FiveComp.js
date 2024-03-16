import 'bootstrap/dist/css/bootstrap.css';
import './FiveComp.css';
import encargo from "../../images/encargo.webp";




function FiveComp() {
  return (


    <div className='col-12'>

      <div className='bg-5 ' style={{ backgroundImage: `url(${encargo})` }}>




      <a href="/form">
        <button type="button" className="mybutton5s">¿Te armo tu carrito de compras?</button>
</a>
      </div>
    </div>




  );
}

export default FiveComp;