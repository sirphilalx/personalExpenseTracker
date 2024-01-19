const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");

const app = express();

require("dotenv").config();

// middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port: ", PORT);
  });
};

server();
