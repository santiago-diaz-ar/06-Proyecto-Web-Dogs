import style from "./Detail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../reducer/actions";
import { Link } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);
  const details = detail[0]?.temperaments.map((t) => t + ", ");
  return (
    <div className={style.container}>
      <button className={style.buttonVolver}>
        <Link to="/home">Volver</Link>
      </button>

      <h1 className={style.name}>{detail[0]?.name}</h1>

      <h3>
        <div className={style.peso}>Peso:</div>
        {detail[0]?.weight.map((e) => e + " kilos ")}
      </h3>

      <h3>
        <div className={style.altura}>Altura:</div>
        {detail[0]?.height.map((e) => e + " cmt ")}
      </h3>

      <h3>
        <div className={style.life}>Esperanza de vida</div>
        <div>{detail[0]?.life_span}</div>
      </h3>

      <h3>
        <div className={style.temper}>Temperamentos:</div>
        <div>{details}</div>
      </h3>

      {/* <img src={detail[0]?.image} className={style.image} alt="img no disponible"/> */}
    </div>
  );
};

export default Detail;
