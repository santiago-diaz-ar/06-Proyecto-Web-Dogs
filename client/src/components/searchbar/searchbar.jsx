import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../reducer/actions-types";

const Searh = () => {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  return (
    <div>
      <input type="text" />
      <button></button>
    </div>
  );
};

export default Searh;
