var http = require("http");
var express = require("express");
var cors = require('cors');
var app = express();
const PORT = process.env.PORT || 3333;

var corsOptions = {
    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Bem Vindo a aplicação!" });
  });

  /* app.get("/turno", (req, res) => {
    res.json({
      message:"TESTE DENTRo"})
  }); */

require("./app/routes/router.js")(app)
  
  // set port, listen for requests
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });