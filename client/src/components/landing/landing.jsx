import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>RUTA LANDING</h1>
      <NavLink to="/home">
        <button>Ingresar</button>
      </NavLink>
    </div>
  );
};

export default Landing;
