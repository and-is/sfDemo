const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const todoRoutes = require("./routes/todoRouter");

app.use("/api/v1/todos", todoRoutes);

module.exports = app;
