import { Link } from "react-router-dom";

const Card = ({ id, name, temperaments, weight, onClose, image }) => {
  return (
    <div>
     {/*  <button onClick={() => onClose(id)}>x</button> */}

      <Link to={`/detalle/${id}`}>
        <h3>{name}</h3>
      </Link>

      <h3>
        temperamento:{" "}
        {temperaments?.map((e) => (
          <p>{e}</p>
        ))}
      </h3>
      <h3>peso: {weight}</h3>
      <img src={image} alt="" />
    </div>                
  );
};

export default Card;
