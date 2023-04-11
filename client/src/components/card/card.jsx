import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, temperaments }) => {
  const temper = temperaments.map((t) => t + ",");
  return (
    <div className={style.caja} key={id}>
      <Link to={`/detail/${id}`}>
        <h3 className={style.name}>{name}</h3>
      </Link>
      {/* <img src={image} alt={name} className={style.image} /> */}

      <div className={style.titulo}>Temperaments</div>
      <h4 className={style.temper}>{temper}</h4>
    </div>
  );
};

export default Card;
