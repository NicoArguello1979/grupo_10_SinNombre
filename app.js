const express = require("express");
const usuarioRouter = require("./routes/usuario.routes");
const app = express();

app.set("view engine", "ejs");

app.use("/", usuarioRouter);
app.use("/productos", usuarioRouter);
app.use("/listado", usuarioRouter);
app.use("/detalle", usuarioRouter);
app.use("/login", usuarioRouter);

app.listen(3030, () => {
  console.log("aplicacion corriendo en el puerto 3030");
});