import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>RUTA LANDING</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default Landing;
