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
        onChange={(event) => handleChange(event)}
        placeholder="nombre de perro"
        className={style.name}
      />
      {errors.name && <p>nombre es requerido</p>}

      <input
        type="text"
        name="max_height"
        value={form.max_height}
        onChange={(e) => handleChange(e)}
        placeholder="Altura max del perro(mts)"
        className={style.alturaMax}
      />
      {errors.max_height && <p>altura max es requerida</p>}

      <input
        type="text"
        name="min_height"
        onChange={handleChange}
        value={form.min_height}
        placeholder="Altura min del perro(mts)"
        className={style.alturaMin}
      />
      {errors.min_height && <p>altura min es requerida</p>}

      <input
        type="text"
        name="max_weight"
        onChange={(event) => handleChange(event)}
        value={form.max_weight}
        placeholder="Peso max de perro(kg)"
        className={style.pesoMax}
      />
      {errors.max_weight && <p>peso max es requerido</p>}

      <input
        type="text"
        name="min_weight"
        onChange={handleChange}
        value={form.min_weight}
        placeholder="Peso min del perro(kg)"
        className={style.pesoMin}
      />
      {errors.min_weight && <p>peso min es requerido</p>}

      <input
        type="text"
        name="life_span"
        onChange={handleChange}
        value={form.life_span}
        placeholder="esperanza de vida(años)"
        className={style.life_span}
      />
      {errors.life_span && <p>esperanza de vida es requerida</p>}

      <input
        type="text"
        name="image"
        value={form.image}
        onChange={(e) => handleChange(e)}
        placeholder="Url de imagen del perro"
        className={style.image}
      />

      <hr />

      <select onChange={handleSelect} className={style.prueba}>
        <option>temperamentos</option>
        {temperaments?.map((temper) => (
          <option key={temper.id} value={temper.name} >
            {temper.name}
          </option>
        ))}
      </select>

      

      <div className={style.prueba}>
      <h3 className={style.lista}>Lista de temper agregados</h3>
        {form.temperaments?.map((temper) => (
          <div key={temper} onClick={() => handleDelete(temper)}>
            <h5 className={style.addtemper}>{temper + ", "}</h5>
          </div>
        ))}
      </div>
      <button type="submit" className={style.buttonAgregar}>
        Agregar
      </button>
    </form>
  );
};

export default Form;
