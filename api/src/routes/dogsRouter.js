require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const axios = require("axios");
const { Dogs, Temperaments } = require("../db");

const rootRouter = Router();

const url = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const dogAllDB = async () => {
  return await Dogs.findAll({
    include: {
      model: Temperaments,
      attributes: ["name"],
      through: {
        attributes: [], //trae mediante los atributos del modelo
      },
    },
  });
};

const dogAllApi = async () => {
  const api = await axios.get(url);
  const apiDataInfo = api.data.map((dog) => {
    let temperArray = [];
    if (dog.temperament) {
      temperArray = dog.temperament.split(", "); //retorno el temper en un arr
    }
    let heightArr = [];
    if (dog.height.metric) {
      heightArr = dog.height.metric.split(" - ");
    }
    let weightArr = [];
    if (dog.weight.metric) {
      weightArr = dog.weight.metric.split(" - ");
    }
    return {
      id: dog.id,
      name: dog.name,
      height: heightArr,
      weight: weightArr,
      temperaments: temperArray,
      life_span: dog.life_span,
      image: dog.image.url,
    };
  });
  return apiDataInfo;
};

const dogDbApi = async () => {
  const dogsDb = await dogAllDB();
  const dogsApi = await dogAllApi();
  //tambien lo puedo hacer con un concat
  const dogsAllDbApi = [...dogsDb, ...dogsApi];
  return dogsAllDbApi;
};

rootRouter.get("/", async (req, res) => {
  //esta ruta la uso para dos rutas la de allDogs y la del name
  const { name } = req.query;
  const dogsAll = await dogDbApi();
  if (typeof name =="string") {
    /*   const dog = dogsAll.filter((dog) =>
      dog.name.toLowerCase().includes(name.toLowerCase())
    );
    if (dog.length) {
      return res.status(200).send(dog);
    }  */
    const buscadorFunct = (name, dogsAll) => {
      //me permite buscar asi no coloquen el name en minuscula o mayuscula y si la busqueda no es exacta
      const regex = new RegExp(name, "i");
      return dogsAll.filter((dog) => regex.test(dog.name));
    };
    const buscador = buscadorFunct(name, dogsAll);
    //console.log(buscador);

    if (buscador.length) res.status(200).send(buscador);
    else {
      return res.status(400).send("no existe dog con ese nombre");
    }
  } else {
    return res.status(200).send(dogsAll);
  }
});

rootRouter.get("/:idRaza", async (req, res) => {
  //trae un dog por su id
  const { idRaza } = req.params;
  const dogsAll = await dogDbApi();
  const dog = dogsAll.filter((dog) => dog.id == idRaza);
  if (dog.length) {
    return res.status(200).send(dog);
  } else {
    return res.status(400).send("no existe dog con ese id");
  }
});

rootRouter.post("/", async (req, res) => {
  const {
    name,
    max_height,
    min_height,
    max_weight,
    min_weight,
    life_span,
    temperaments,
    image,
  } = req.body;

  //total altura
  const AllHeight = [];
  AllHeight.push(max_height, min_height);
  //total peso
  const AllWeight = [];
  AllWeight.push(max_weight, min_weight);
  //creacion del dog en la db
  const dog = await Dogs.create({
    name,
    height: AllHeight,
    weight: AllWeight,
    life_span,
    image: image
      ? image
      : "https://www.lavanguardia.com/files/image_607_341/uploads/2022/01/12/61de317258e6c.jpeg",
  });

  const asociatedTemper = await Temperaments.findAll({
    where: {
      name: temperaments,
    },
  });

  console.log(dog);
  dog.addTemperaments(asociatedTemper);

  return res
    .status(201)
    .send("Raza de perro creado con exito en la base de datos");
});

module.exports = rootRouter;
