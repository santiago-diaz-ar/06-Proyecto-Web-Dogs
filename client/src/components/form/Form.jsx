import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemper, postDog } from "../../reducer/actions";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemper());
  }, [dispatch]);

  let temperaments = useSelector((state) => state.temperaments);

  const [button, setButton] = useState(true);

  const [form, setForm] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    temperaments: [],
  });

  useEffect(() => {
    if (
      form.name.length > 0 &&
      form.max_height > 0 &&
      form.min_height > 0 &&
      form.max_weight > 0 &&
      form.min_weight > 0 &&
      form.life_span > 0 &&
      form.image > 0
    ) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [form, setButton]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(form));
    alert("Perro creado con exito en la db");
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

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value, // se busca en que input esta escribiendo con la prop name del input, y se modifica el estado
    });
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
          value={form?.name}
          onChange={(event) => handleChange(event)}
          placeholder="Nombre de raza de perro"
        />
        <hr />

        <input
          type="text"
          name="max_height"
          value={form?.max_height}
          onChange={(e) => handleChange(e)}
          placeholder="Altura maxima del perro"
        />
        <hr />

        <input
          type="text"
          name="min_height"
          onChange={handleChange}
          value={form?.min_height}
          placeholder="Altura minima del perro"
        />
        <hr />

        <input
          type="text"
          name="max_weight"
          onChange={(event) => handleChange(event)}
          value={form?.max_weight}
          placeholder="Peso maximo de perro"
        />
        <hr />

        <input
          type="text"
          name="min_weight"
          onChange={handleChange}
          value={form?.min_weight}
          placeholder="Peso minimo del perro"
        />
        <hr />

        <input
          type="text"
          name="life_span"
          onChange={handleChange}
          value={form?.life_span}
          placeholder="Esperanza de vida del perro"
        />
        <hr />

        <input
          type="text"
          name="image"
          value={form?.image}
          onChange={(e) => handleChange(e)}
          placeholder="Url de imagen del perro"
        />
        <hr />

        <select onChange={handleSelect}>
          <option defaultValue="">temperamentos</option>
          {temperaments?.map((temper) => (
            <option key={temper.id} value={temper.name}>
              {temper.name}
            </option>
          ))}
        </select>
        <hr />
        <button type="submit" disabled={button} form="form">
          Agregar
        </button>
      </form>
      <hr />

      <div>Temperamentos agregados al nuevo perro</div>

      <div>
        {form?.temperaments.map((temper) => (
          <div key={temper} onClick={() => handleDelete(temper)}>
            <p>{temper}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
