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
    <div className={style.container}>
      <div className={style.caja}>
        <h2 className={style.titulo}>
          Busca las razas de perros que mas te gusten
        </h2>

        <h3 className={style.texto}>
          En esta pagina web encontraras una enciclopedia de las razas de perros
          existentes tambien podras crear nuevas razas.
        </h3>

        <Link to="/home">
          <button className={style.button}>Ingresar Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
