import "bootstrap/dist/css/bootstrap.css";
import "./step14.css";
import FadeIn from "react-fade-in";
import arreglo2 from "../step9/nombres.json";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Step14 =({ onButtonClick, onPreviousButtonClick }) => {
   //categoriasubcadenaintolesolo=localStorage.getItem('categoriasubcadenaintolesolo')? let categoriasubcadenaintolesolo=localStorage.getItem('categoriasubcadenaintolesolo'):''
  //const itemprodCadena=["aceite-de-coco","harinas","harinas-para-hornear","levadura-y-polvos-de-hornear","alfajores-y-bombones","chocolates-para-cocinar"];
  //const categoriasubcadenaintolesolo=["producto-chileno","sin-sellos"];
  //const contenido=["producto-chileno","sin-sellos"];
  const [filteredProducts, setFilteredProducts] = useState([]);
  const shopifyConfig = {
    shopName: 'berrots-life.myshopify.com',
    apiVersion: '2024-01',
    accessToken: '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',
    apiKey: '170745de602802ade93fac535200bf51',
    password: 'c0d2e05b05e7fbef8c064d1d7d0f80d4'
  };



  const handleButtonClick = () => {

    const storedItemprodCadena = localStorage.getItem('itemprodCadena');
    const storedCategoriasubcadenaintolesolo = localStorage.getItem('categoriasubcadenaintolesolo');
    const storedContenido = localStorage.getItem('contenido');

    
    console.log('storedItemprodCadena', storedItemprodCadena);
    console.log('storedCategoriasubcadenaintolesolo', storedCategoriasubcadenaintolesolo);
    console.log('storedContenido', storedContenido);
    
    const itemprodCadena = storedItemprodCadena ? JSON.parse(storedItemprodCadena) : [];
    const categoriasubcadenaintolesolo = storedCategoriasubcadenaintolesolo ? JSON.parse(storedCategoriasubcadenaintolesolo) : [];
    const contenido = storedContenido ? JSON.parse(storedContenido) : [];
    
    console.log('itemprodCadena', itemprodCadena);
    console.log('categoriasubcadenaintolesolo', categoriasubcadenaintolesolo);
    console.log('contenido', contenido);
  
    const ingredientes2 = [
      ...itemprodCadena.map(item => `${item.trim()}`),
      ...categoriasubcadenaintolesolo.map(item => `${item.trim()}`),
      ...contenido.map(item => `${item.trim()}`)
    ];
   // const ingredientesConCorchetes = `[${ingredientes2}]`;
    console.log('ingridiente con corchetes',ingredientes2)

    const titulosEncontrados = ingredientes2.map(ingrediente => {
      const encontrado = arreglo2.find(item => item.TAG.includes(ingrediente.toLowerCase()) && parseFloat(item.EXISTE) !== 0);
      return encontrado ? encontrado.TITULO : null;
    });

    const arregloFiltrado = titulosEncontrados.filter((item, index, array) => {
      // Elimina elementos nulos
      if (item === null) {
        return false;
      }
      // Elimina elementos duplicados
      return index === array.indexOf(item);
    });

    console.log('Títulos encontrados:', ingredientes2);


    

    onButtonClick(ingredientes2);
/*
   const fetchData = async (ingredientes, nombreReceta = "") => {
    const apiUrl = 'https://s-api.comoquiero.net/shortUrls/links';
    const domain = "beroots.qcart.app"
    const origin = 'https://www.beroots.cl/?qcart=true#'
    const requestOptions = {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
        'Accept': 'application/json',
        'Accept-Language': 'es-CL,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json',
        'Referer': 'https://clients.qcart.app/',
        'Origin': 'https://clients.qcart.app',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'Connection': 'keep-alive',
        'TE': 'trailers',
      },
      body: JSON.stringify({
        domain: domain,
        originalURL: origin + 'ingrs=' + encodeURIComponent(ingredientes.join("\n")) + '&utm_source=beroots&utm_medium=referral&utm_campaign=clients.qcart.app&utm_term=qcart&utm_content=link-beroots&recipe_name=' + nombreReceta,
      }),
    };
    try {
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const shortUrl = data.shortURL
      if (shortUrl) {
        console.log(shortUrl);
        //window.location.href = shortUrl;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const ingredientes = ["avena", "aceite de oliva", "harina de chía"];
  //console.log('tags-finales', ingredientes2);
  const nombreReceta = "mi receta";

  fetchData(arregloFiltrado, nombreReceta)

  */




  const ingredientes = ["avena", "aceite de oliva", "harina de chía"];
  //console.log('tags-finales', ingredientes2);
  const nombreReceta = "mi receta";


  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <FadeIn>
            <h1 className="paragraform mx-auto">
              ¿Gracias por tu tiempo ya tu Carrito de compras  esta listo
              <br />.
            </h1>
            <h1 className="paragraformsub mx-auto">
             Trataremos de ser lo mas preciso en tus selecciones, gracias por elegirnos.
      
              <br /> 
            </h1>

            <div className="box-f2">
              <button
                type="button"
                className="mybuttonFormstep1"
            onClick={handleButtonClick}
              >
                Aceptar
              </button>

            </div>
            <div>
              <div className="box-f3">
                
      
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Step14;
