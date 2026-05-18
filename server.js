const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conectado Correctamente"))
.catch(err => console.log(err));

app.use("/", (req, res) => {
    res.send("Bienvenidos");});

app.use("/usuarios", require("./Rutas/usuarios"));
app.use("/tareas", require("./Rutas/tareas"));
app.use("/proyectos", require("./Rutas/proyectos"));

app.listen(3000, () => {
    console.log("Servidor en funcionamiento");});
