import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemper } from "../../reducer/actions";
import validate from "./validate";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemper());
  }, [dispatch]);

  let temperaments = useSelector((state) => state.temperaments);

  const [form, setForm] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    temperaments: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
    });
    setErrors(
      validate({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    setForm({
      ...form,
      temperaments: [...form.temperaments, event.target.value],
    });
  };

  const handleDelete = (event) => {
    setForm({
      ...form,
      temperaments: form.temperaments.filter((temper) => temper !== event),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*  axios.post("http://localhost:3001/dogs", form); */
    alert("Perro creado con exito en la db agrega uno nuevo");
    setForm({
      name: "",
      max_height: "",
      min_height: "",
      max_weight: "",
      min_weight: "",
      life_span: "",
      image: "",
      temperaments: [],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <hr />

        <Link to="/home">
          <button>Home</button>
        </Link>
        <hr />
        <h2>Agrega un raza de perro en nuestra base de datos</h2>
        <hr />

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(event) => handleChange(event)}
          placeholder="nombre de perro"
        />
        {errors.name && <p>Debe tener un name</p>}
        <hr />

        <input
          type="text"
          name="max_height"
          value={form.max_height}
          onChange={(e) => handleChange(e)}
          placeholder="Altura max del perro(mts)"
        />
        {errors.max_height && <p>Debe tener altura maxima el perro</p>}
        <hr />

        <input
          type="text"
          name="min_height"
          onChange={handleChange}
          value={form.min_height}
          placeholder="Altura min del perro(mts)"
        />
        <hr />

        <input
          type="text"
          name="max_weight"
          onChange={(event) => handleChange(event)}
          value={form.max_weight}
          placeholder="Peso max de perro(kg)"
        />
        <hr />

        <input
          type="text"
          name="min_weight"
          onChange={handleChange}
          value={form.min_weight}
          placeholder="Peso min del perro(kg)"
        />
        <hr />

        <input
          type="text"
          name="life_span"
          onChange={handleChange}
          value={form.life_span}
          placeholder="esperanza de vida(años)"
        />
        <hr />

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={(e) => handleChange(e)}
          placeholder="Url de imagen del perro"
        />
        <hr />

        <select onChange={handleSelect}>
          <option>temperamentos</option>
          {temperaments?.map((temper) => (
            <option key={temper.id} value={temper.name}>
              {temper.name}
            </option>
          ))}
        </select>
        <hr />
        <div>
          <button type="submit">Agregar</button>
        </div>
      </form>
      <hr />

      <h2>Lista de temper agregados</h2>

      <div>
        {form.temperaments?.map((temper) => (
          <div key={temper} onClick={() => handleDelete(temper)}>
            <p>{temper}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
