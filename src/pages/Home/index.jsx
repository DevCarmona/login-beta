import { LayoutHomeComponents } from "../../components/layoutHomeComponents/home-index";
import { NavbarComponents } from "../../components/navbarComponents";
import { UploadComponents } from "../../components/uploadComponents";
import { UploadMultipleComponent } from "../../components/uploadMultipleComponents";

import mediScan from "../../assets/MediscanCor.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <NavbarComponents />
      <UploadMultipleComponent/>
      {/* <LayoutHomeComponents>
        <form className="home-form">
          <span className="home-form-title">Inserir imagens</span>
        <UploadComponents />
        </form>
      </LayoutHomeComponents> */}
    </>
  );
};

export default Home;
