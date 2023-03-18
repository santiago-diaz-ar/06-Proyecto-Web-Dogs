import { Link } from "react-router-dom";
import SearchCard from "./searchCard";

const Searchdetail = ({ dogs, onClose }) => {
  return (
    <div>
      {dogs?.map(({ id, image, name, temperaments, weight }) => {
        return (
          <SearchCard
            
            id={id}
            name={name}
            temperaments={temperaments}
            weight={weight}
            image={image}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
};
export default Searchdetail;
