import React, { useState, useEffect } from "react";
import data from "./comunas.json";
import FadeIn from "react-fade-in";
import "./step3.css";
import { ArrowLeft } from "react-bootstrap-icons";

const RegionComunaSelector = ({onButtonClick, onPreviousButtonClick}) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedComuna, setSelectedComuna] = useState(null);
  const [habilitarBoton, setHabilitarBoton] = useState(false);

  useEffect(() => {
    localStorage.removeItem('regionycomuna');
  

  }, [])
  

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);

  };
  const handleComunaChange = (event) => {
    const comuna = event.target.value;
    setSelectedComuna(comuna);
    setHabilitarBoton(true);
  };
  const handleSubmit = () => {
    const data= selectedRegion+'-'+selectedComuna
    onButtonClick(data);
    localStorage.regionycomuna = data
    
  };

  return (
    <FadeIn>
      <>
      <div className="row">
      <h1 className="etiqueta3">¿En que comuna vivies?</h1>
      <div className="col-lg-6">
        <label className="etiqueta3sub">
          Selecciona una región: &nbsp; &nbsp;
        </label>
        <select className="etiqueta3sub" onChange={handleRegionChange}>
          <option value="">Seleccione una región</option>
          {data.regiones.map((region) => (
            <option key={region.nombre} value={region.nombre}>
              {region.nombre}
            </option>
          ))}
        </select>
      </div>


      {selectedRegion && (
        <div className="col-lg-6">
          <label className="etiqueta3sub">
            Comunas de {selectedRegion}:&nbsp; &nbsp;
          </label>
          <select className="etiqueta3sub" onChange={handleComunaChange}>
            <option value="">Seleccione una comuna</option>
            {data.regiones
              .find((region) => region.nombre === selectedRegion)
              .comunas.map((comuna) => (
                <option key={comuna} value={comuna}>
                  {comuna}
                </option>
              ))}
          </select>
        </div>
      )}
      
      <div className="botones">
                <div  className="col-lg-6 col-sm-12">
                <button
          type="button"
          className="mybuttonFormstep1"
          onClick={handleSubmit}
          disabled={!habilitarBoton}
        >
          Aceptar
        </button>
                </div>
                <div  className="col-lg-6 col-sm-12">
                <button
                    type="button"
                    className="mybuttonFormstep2 "
                    onClick={onPreviousButtonClick}
                  >
                    <ArrowLeft />
                  </button>

                </div>
              </div>

      
      </div>
      </>
    </FadeIn>
  );
};

export default RegionComunaSelector;
