import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.cajaMayor}>
      <div className={style.cajaIntermedia}>
        <div className={style.caja}>
          <div>
            <h1>Busca las razas de perros que mas te gusten</h1>
          </div>

          <div>
            <h2>
            En esta pagina web encontraras una enciclopedia de las razas de
            perros existentes tambien podras crear nuevas razas
            </h2>
          </div>

          <p></p>
          <hr />
          <div>
            <Link to="/home">
              <button className={style.button}>Ingresar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
