import Card from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Cards = ({ dogs, onClose }) => {
  return (
    <div>
      {dogs.map(({ id, image, name, temperaments, weight }) => {
        return (
          <Card
            key={id}
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

export default Cards;
