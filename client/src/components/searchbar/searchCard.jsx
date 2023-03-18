import { Link } from "react-router-dom";

const SearchCard = ({ id, name, temperaments, weight, onClose, image }) => {
  return (
    <div>
      <Link to="/home">
        <button onClick={() => onClose(id)}>x</button>
      </Link>
      <Link to={`/detalle/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h3>temperamento: {temperaments?.map((e) => e)}</h3>
      <h3>peso: {weight}</h3>
      <img src={image} alt="" />
    </div>
  );
};

export default SearchCard;
