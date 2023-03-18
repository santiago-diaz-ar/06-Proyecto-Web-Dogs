import { useState } from "react";

const Search = ({ onSearch }) => {
  const [dog, setDog] = useState("");

  const handleChange = (event) => {
    setDog(event.target.value);
  };

  return (
    <div>
      <input type="search" value={dog} onChange={handleChange} />
      <button onClick={() => onSearch(dog)}>buscar</button>
    </div>
  );
};

export default Search;
