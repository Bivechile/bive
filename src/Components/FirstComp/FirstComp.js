import 'bootstrap/dist/css/bootstrap.css';
import './FirstComp.css';
import picture_1 from "../../images/dia-mundial-de-la-alimentacion-1.webp";



function FirstComp() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mx-auto' >

          <div className='bg image-fluid' style={{backgroundImage: `url(${picture_1})` }}>

          <a href="/form">
            <button type="button" className="mybuttonFirst">Saber más</button>
       </a>


          </div>
        </div>
      </div>
    </div>


  );
}

export default FirstComp;