import style from "./Form.module.css";
import axios from "axios";
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
    axios.post("http://localhost:3001/dogs", form);
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

  const [button, setButton] = useState(true);

  useEffect(() => {
    if (
      form.name.length > 0 &&
      form.max_height.length > 0 &&
      form.min_height.length > 0 &&
      form.max_weight.length > 0 &&
      form.min_weight.length > 0 &&
      form.life_span.length > 0 
    )
      setButton(false);
    else {
      setButton(true);
    }
  }, [form, setButton]);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Link to="/home">
        <button className={style.buttonVolver}>Volver</button>
      </Link>

      <h3 className={style.agregarRaza}>
        Agrega un raza de perro en nuestra base de datos
      </h3>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="nombre de perro"
        className={style.name}
      />
      {errors.name && <div>{errors.name}</div>}

      <input
        type="text"
        name="max_height"
        value={form.max_height}
        onChange={handleChange}
        placeholder="Altura max del perro(mts)"
        className={style.alturaMax}
      />
      {errors.max_height && <div>altura max es requerida</div>}

      <input
        type="text"
        name="min_height"
        onChange={handleChange}
        value={form.min_height}
        placeholder="Altura min del perro(mts)"
        className={style.alturaMin}
      />
      {errors.min_height && <div>altura min es requerida</div>}

      <input
        type="text"
        name="max_weight"
        onChange={handleChange}
        value={form.max_weight}
        placeholder="Peso max de perro(kg)"
        className={style.pesoMax}
      />
      {errors.max_weight && <div>peso max es requerido</div>}

      <input
        type="text"
        name="min_weight"
        onChange={handleChange}
        value={form.min_weight}
        placeholder="Peso min del perro(kg)"
        className={style.pesoMin}
      />
      {errors.min_weight && <div>peso min es requerido</div>}

      <input
        type="text"
        name="life_span"
        onChange={handleChange}
        value={form.life_span}
        placeholder="esperanza de vida(años)"
        className={style.life_span}
      />
      {errors.life_span && <div>esperanza de vida es requerida</div>}

      <input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Url de imagen del perro"
        className={style.image}
      />

      <hr />

      <select onChange={handleSelect} className={style.prueba}>
        <option disabled selected>temperamentos</option>
        {temperaments.map((temper) => (
          <option key={temper.id} value={temper.name}>
            {temper.name}
          </option>
        ))}
      </select>

      <div className={style.prueba}>
        <h3 className={style.lista}>Lista de temper agregados</h3>
        {form.temperaments.map((temper) => (
          <div key={temper} onClick={() => handleDelete(temper)}>
            <h5 className={style.addtemper}>{temper + ", "}</h5>
          </div>
        ))}
      </div>
      <button type="submit" className={style.buttonAgregar} disabled={button}>
        Agregar
      </button>
    </form>
  );
};

export default Form;
