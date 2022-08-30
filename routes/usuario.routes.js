const express = require("express");
const usuarioController = require("../controllers/usuario.controller");

const router = express.Router();

router.get("/", usuarioController.index);
router.get("/productos", usuarioController.productos);
router.get("/listado", usuarioController.listado);
router.get("/detalle", usuarioController.detalle);
router.get("/login", usuarioController.login);

module.exports = router;