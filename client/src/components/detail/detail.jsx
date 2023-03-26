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
    <div className={style.caja}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>{detail[0]?.name}</h1>
      <img src={detail[0]?.image} className={style.image} />
      <h3>Altura:</h3>
      <div>{detail[0]?.height}</div>
      <h3>Peso:</h3>
      <div>{detail[0]?.weight}</div>
      <h3>Temperamentos:</h3>
      <div>{details}</div>
      <h3>Esperanza de vida</h3>
      <div>{detail[0]?.life_span}</div>
     
    </div>
  );
};

export default Detail;
