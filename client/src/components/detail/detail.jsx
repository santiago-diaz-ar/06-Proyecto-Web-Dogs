import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/dogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setDog(data);
        }
      });
  }, [id]);

  return (
    <div>
      <div>DETAIL</div>
      <Link to="/home">
        <button>X</button>
      </Link>
      <h3>{dog[0]?.id}</h3>
      <h3>{dog[0]?.name}</h3>
      <h3>{dog[0]?.height}</h3>
      <h3>{dog[0]?.weight}</h3>
      <h3>{dog[0]?.temperaments}</h3>
      <h3>{dog[0]?.life_span}</h3>
      <img src={dog[0]?.image} alt="" />
    </div>
  );
};

export default Detail;
