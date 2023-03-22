import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../reducer/actions-types";
import { Link } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.detail);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>{detail[0]?.name}</h1>
      <h1>{detail[0]?.height}</h1>
      <h1>{detail[0]?.weight}</h1>
      <h2>{detail[0]?.temperaments}</h2>
      <h2>{detail[0]?.life_span}</h2>
      {/* <img src={detail[0]?.image} alt="" /> */}
    </div>
  );
};

export default Detail;
