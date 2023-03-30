import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../reducer/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  const handleInput = (event) => {
    setSearchDog(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getName(searchDog));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Name Dog"
        className={style.input}
      />
      <button type="submit" onClick={handleSubmit} className={style.button}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
