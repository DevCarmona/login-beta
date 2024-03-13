import { LayoutHomeComponents } from "../../components/layoutHomeComponents/home-index";
import { NavbarComponents } from "../../components/navbarComponents";
import { UploadMultipleImgComponents } from "../../components/uploadMultipleimgComponents";

import mediScan from "../../assets/MediscanCor.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <NavbarComponents />
      <LayoutHomeComponents>
        <form className="home-form">
          <span className="home-form-title">Upload de Imagens</span>
        <UploadMultipleImgComponents />
        </form>
      </LayoutHomeComponents>
    </>
  );
};

export default Home;
