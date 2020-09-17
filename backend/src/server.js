const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://heber_lostit:heber_lostit@cluster0-s3r33.mongodb.net/lostit?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen("3333", () => {
  console.log("Servidor rodando na porta 3333");
});
