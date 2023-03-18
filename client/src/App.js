import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Cards from "./components/cards/cards";
import Landing from "./components/landing/landing";
import Nav from "./components/nav/nav";
import Detail from "./components/detail/detail.jsx";
import Form from "./components/form/Form";

function App() {
  const [dogs, setDogs] = useState([]);

  const onSearch = (dog) => {
    if (!dog) {
      return "cancelo todo para que no me traiga todos los perritos ya que lo traigo por query";
    }
    fetch(`http://localhost:3001/dogs?name=${dog}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          return setDogs(() => [...dogs, ...data]);
        } else {
          window.alert("no hay peritos con ese nombre");
        }
      });
  };

  const onClose = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id));
  };

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Cards dogs={dogs} onClose={onClose} />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
