require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const axios = require("axios");
const { Temper } = require("../db");

const rootRouter = Router();

const url = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

rootRouter.get("/", async (req, res) => {
  const TemperApi = await axios.get(url);
  const Tempers = TemperApi.data.map((temper) => temper.temperament);
  const TemperArr = Tempers.toString().split(",");
  TemperArr.forEach((t) => {
    const j = t.trim();
    Temper.findOrCreate({
      where: { name: j },
    });
  });

  const Alltempers = await Temper.findAll();
  return res.status(200).send(Alltempers);
});

module.exports = rootRouter;
