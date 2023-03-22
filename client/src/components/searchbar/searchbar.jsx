import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../reducer/actions-types";

const Searh = () => {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setSearchDog(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getName(searchDog));
  };

  return (
    <div>
      <input type="text" onChange={handleInput} placeholder="Name Dog" />
      <button onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

export default Searh;
