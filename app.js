const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");

//require dotenv
require("dotenv").config();

const app = express();
const port = 5000;

//req router
const routerLinks = require("./routes/LRuta");
const routerTags = require("./routes/TRuta");

//Agregar la validacion de cors
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//Route
app.use("/api", routerLinks);
app.use("/api", routerTags);

//Iniciar coneccion
const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECT);
    app.listen(port, (req, res) => {
      console.log("Conectado en el puerto: ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
