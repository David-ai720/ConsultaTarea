const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017//ConsultaTareas")
.then(() => console.log("Conectado Correctamente"))
.catch(err => console.log(err));

app.use("/usuarios", require("./Rutas/usuarios"));
app.use("/tareas", require("./Rutas/tareas"));
app.use("/proyectos", require("./Rutas/proyectos"));

app.listen(3000, () => {
    console.log("Servidor en funcionamiento");});
