require("dotenv").config();

const express = require("express");
const { errors } = require("celebrate");
const cors = require("cors");
const routes = require("./routes");
const app = express();

const corsOptions = {
    exposedHeaders: "X-Total-Count",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => {
    console.log("Backend working properly");
})