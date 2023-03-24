const { Router } = require("express");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./dogsRouter");
const tempRouter = require("./temperamentsRouter");

const router = Router();

router.use(express.json()); //=> por si mando datos en json
router.use(morgan("dev"));
router.use(cors());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsRouter);
router.use("/temperaments", tempRouter);

module.exports = router;
