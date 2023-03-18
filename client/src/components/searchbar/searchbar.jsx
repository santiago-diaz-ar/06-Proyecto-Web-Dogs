import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [dog, setDog] = useState("");

  const handleChange = (event) => {
    setDog(event.target.value);
  };

  return (
    <div>
      <input type="search" value={dog} onChange={handleChange} />
      <Link to="searchDetail">
        <button onClick={() => onSearch(dog)}>buscar</button>
      </Link>
    </div>
  );
};

export default Search;
