import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header";
import FirstComp from "../FirstComp/FirstComp";
import Secondcomp from "../SecondComp/SecondComp";
import ThirdComp from "../ThirdComp/ThirdComp";
import FourComp from "../Fourcomp/Fourcomp";
import FiveComp from "../FiveComp/FiveComp";
import SixComp from "../SixComp/SixComp";
import SevenComp from "../SevenComp/SevenComp";
import EightComp from "../EightComp/EightComp";
import FormIndex from "../FormIndex/FormIndex";
import Footer from "../Footer/Footer";
import  Step404  from "../FormComp/404/index";

function S404() {
  return (
<>
    <Header />
    <Step404 />
    <Footer />
</>
  );
}

export default S404;
