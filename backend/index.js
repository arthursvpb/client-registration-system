const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./src/routes/routes");

app.use(express.json());
app.use(cors());
app.use(router);

const port = 8000;

app.listen(8000, () => {
  console.log(`Server is listening at ${port}`);
});

