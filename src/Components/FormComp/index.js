import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import "./FormComp.css";
import Fondo from "../../images/Sin__título.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Step1 from "./step1/index";
import Step2 from "./step2/index";
import Step3 from "./step3/comunas";
import Step4 from "./step4/index";
import Step5 from "./step5/index";
import Step6 from "./step6/index";
import Step7 from "./step7/index";
import Step8 from "./step8/index";
import Step9 from "./step9/index";
import Step10 from "./step10/index";
import Step11 from "./step11/index";
import Step12 from "./step12/index";
import Step14 from "./step14/index";
import Step15 from "../Bandeja/Bnadeja";


function FormComp() {
  const [currentStep, setCurrentStep] = useState(1);
  const [datastep2, setdatastep2] = useState("");
  const [datastep3, setdatastep3] = useState("");
  const [datastep4, setdatastep4] = useState("");
  const [datastep5, setdatastep5] = useState("");
  const [datastep6, setdatastep6] = useState([]);
  const [datastep7, setdatastep7] = useState([]);
  const [datastep8, setdatastep8] = useState([]);
  const [datastep9, setdatastep9] = useState([]);
  const [datastep10, setdatastep10] = useState("");
  const [datastep11, setdatastep11] = useState("");
  const [datastep12, setdatastep12] = useState("");
  const [datastep14, setdatastep14] = useState("");
  const [datastep15, setdatastep15] = useState("");
  
  



  const handleButtonClick = (data, step) => {
    if (step) {
      setCurrentStep(step);
    }else{
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setdatastep2(data);
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setdatastep3(data);
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setdatastep4(data);
      setCurrentStep(5);
    }else if (currentStep === 5) {
      setdatastep5(data);
      setCurrentStep(6);
    }else if (currentStep === 6) {
      setdatastep6(data);
      setCurrentStep(7);
    }else if (currentStep === 7) {
      setdatastep7(data);
      setCurrentStep(8);
    }else if (currentStep === 8) {
      setdatastep8(data);
      setCurrentStep(9);
    }else if (currentStep === 9) {
        setdatastep9(data);
        setCurrentStep(10);
    }else if (currentStep === 10) {
      setdatastep10(data);
      setCurrentStep(11);
    }else if (currentStep === 11) {
      setdatastep11(data);
      setCurrentStep(12);
    } else if (currentStep === 12) {
      setdatastep12(data);
      setCurrentStep(14);
    }else if (currentStep === 14) {
      setdatastep14(data);
      setCurrentStep(15);
    }

  }
    
    
  };
  const handlePreviousButtonClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  useEffect(() => {
    localStorage.clear()
    localStorage.removeItem("infoadicional");
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12-lg mx-auto">
          <Header />
          <div className="bgfi" style={{ backgroundImage: `url(${Fondo})`}}>
            {currentStep === 1 && <Step1 onButtonClick={handleButtonClick} />}
            {currentStep === 2 && <Step2 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 3 && <Step3 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 4 && <Step4 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 5 && <Step5 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 6 && <Step6 onButtonClick={handleButtonClick} prop={datastep5} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 7 && <Step7 onButtonClick={handleButtonClick} prop={datastep5} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 8 && <Step8 onButtonClick={handleButtonClick} props={datastep7} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 9 && <Step9 onButtonClick={handleButtonClick} props={datastep8} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 10 && <Step10 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 11 && <Step11 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 12 && <Step12 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 14 && <Step14 onButtonClick={handleButtonClick} onPreviousButtonClick={handlePreviousButtonClick} />}
            {currentStep === 15 && <Step15 onButtonClick={handleButtonClick} props={datastep14} onPreviousButtonClick={handlePreviousButtonClick} />}
            <Footer />
         
          </div>
        </div>
      </div>
    </div>
  );
  }

export default FormComp;
