const { Router } = require("express");
const express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./dogsRouter");
const tempRouter = require("./temperamentsRouter");

const router = Router();
router.use(express.json()); //=> por si mando datos en json

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsRouter);
router.use("/temperaments", tempRouter);

module.exports = router;
