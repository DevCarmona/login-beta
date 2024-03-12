import { LayoutHomeComponents } from "../../components/layoutHomeComponents/home-index";

import mediScan from "../../assets/MediscanCor.png"

export const Home = () => { 

  return (
    <LayoutHomeComponents>
      <form className="home-form">
        <span className="home-form-title">Upload de Imagens</span>
        <span className="home-form-title">
          <img src={mediScan} alt=""/>
        </span>
      </form>
    </LayoutHomeComponents>
  );
};

export default Home;