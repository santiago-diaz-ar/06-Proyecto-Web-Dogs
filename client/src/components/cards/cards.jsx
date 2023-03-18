import Card from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDogs } from "../../reducer/actions";

const Cards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  const dogs = useSelector((state) => state.dogs);

  return (
    <div>
      {dogs?.map(({ id, image, name, temperaments, weight }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            temperaments={temperaments}
            weight={weight}
            /*  image={image} */
          />
        );
      })}
    </div>
  );
};

export default Cards;
