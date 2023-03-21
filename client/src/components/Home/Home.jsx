import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import {
  getAllDogs,
  getTemper,
  filterByTemperament,
  OrderbyName,
  OrderByWeight,
} from "../../reducer/actions-types";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //estado global dogs
  const allTempers = useSelector((state) => state.temperaments); // estado global temperaments

  //paginado
  const [paginaActual, setPaginaActual] = useState(1);
  const perrosPorPagina = 8;
  const ultimoIndice = paginaActual * perrosPorPagina;
  const primerIndice = ultimoIndice - perrosPorPagina;
  const perrosActual = allDogs.slice(primerIndice, ultimoIndice); //elementos a mostrar en la tarjeta segun el indice del paginado

  //console.log(perrosActual); //debe mostrar 8 dogs en arr de obj

  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemper());
  }, [dispatch]);

  const handlerFilterByTemper = (event) => {
    event.preventDefault();
    dispatch(filterByTemperament(event.target.value));
  };

  const handlerOrderByName = (event) => {
    event.preventDefault();
    dispatch(OrderbyName(event.target.value));
    setOrder(`Ordenado ${event.target.value}`);
  };

  const handlerOrderByWeight = (event) => {
    event.preventDefault();
    dispatch(OrderByWeight(event.target.value));
    setOrder(`Ordenado ${event.target.value}`);
  };

  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <div>Logo</div>
          </Link>

          <SearchBar />

          <div>
            <select onChange={handlerOrderByName}>
              <option disabled selected defaultValue>
                orden Alfabetico
              </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>

            <select onChange={handlerOrderByWeight}>
              <option disabled selected defaultValue>
                Filtrar por peso
              </option>
              <option value="max_weight">Max</option>
              <option value="min_weight">Min</option>
            </select>

            <select onChange={handlerFilterByTemper}>
              <option disabled selected defaultValue>
                Temperaments
              </option>
              <option value="Todos">Todos</option>
              {allTempers?.map((temp) => (
                <option value={temp.name} key={temp.id}>
                  {temp.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Link to="/dog">
            <button>CREAR PERRO EN BASE DE DATOS</button>
          </Link>
        </div>
      </header>

      <hr />

      <div>
        <div>
          {perrosActual?.map((dog) => {
            return (
              <div>
                <Link to={`/detail/${dog.id}`}>
                  {
                    <Card
                      key={dog.id}
                      image={dog.image}
                      name={dog.name}
                      temperaments={
                        dog.temperaments[0].name
                          ? dog.temperaments.map((temper) => temper.name)
                          : dog.temperaments
                        //POR SI EL TEMPER VIENE EN FORMATO DISTINTO DE LA DB
                      }
                    />
                  }
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Paginate
            perrosPorPagina={perrosPorPagina}
            allDogs={allDogs.length}
            paginado={
              paginado
            } /* el valor del paginado aumenta segun el bucle for del compo paginate */
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
