import { Link } from "react-router-dom";

const Card = ({ id, name, temperaments, weight, onClose, image }) => {
  return (
    <div>
      <button onClick={() => onClose(id)}>x</button>

      <Link to={`/detalle/${id}`}>
        <h2>{name}</h2>
      </Link>

      <h2>
        temperamento:{" "}
        {temperaments.map((e) => (
          <p>{e}</p>
        ))}
      </h2>
      <h2>peso: {weight}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
