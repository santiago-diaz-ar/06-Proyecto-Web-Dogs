import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import { getAllDogs, getTemper } from "../../reducer/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Landing = () => {
  const dispatch = useDispatch();
  //para que la pagina sea mas rapida 
  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemper());
  }, [dispatch]);

  return (
    <div className={style.cajaMayor}>
      <div className={style.cajaIntermedia}>
        <div className={style.caja}>
          <h1 className={style.titulo}>
            Busca las razas de perros que mas te gusten
          </h1>

          <div className={style.text}>
            <h2>
              En esta pagina web encontraras una enciclopedia de las razas de
              perros existentes tambien podras crear nuevas razas
            </h2>
          </div>
          <button className={style.button}>
            <Link to="/home">Ingresar Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
