import { LayoutHomeComponents } from "../../components/layoutHomeComponents/home-index";
import { NavbarComponents } from "../../components/navbarComponents";
import mediScan from "../../assets/MediscanCor.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <NavbarComponents />
      <LayoutHomeComponents>
        <form className="home-form">
          <span className="home-form-title">Upload de Imagens</span>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Small
            </span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Default
            </span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>

          <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              Large
            </span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
          </div>
        </form>
      </LayoutHomeComponents>
    </>
  );
};

export default Home;
