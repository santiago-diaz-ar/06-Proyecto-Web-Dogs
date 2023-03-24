import { Link } from "react-router-dom";

const Card = ({ id, image, name, temperaments }) => {
  return (
    <div>
      {/* <img src={image} alt={name} /> */}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div>
        {temperaments?.map((t) => (
          <h3 key={t + Math.random}>{t}</h3>
        ))}
      </div>
    </div>
  );
};

export default Card;
