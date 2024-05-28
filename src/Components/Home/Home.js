import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header";
import Headesb from "../Headersb/Headersb";
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

function Home() {
  return (
<>
    <Header />
    <FirstComp/>
    <Secondcomp />
    <ThirdComp />
    <FourComp />
    <FiveComp />
    <SixComp/>
    <SevenComp />
    <EightComp />
    <FormIndex />
    <Footer />
</>
  );
}

export default Home;
