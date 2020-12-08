const express = require("express");
const app = express();

const router = require("./src/routes/routes");

app.use(express.json());
app.use(router);

const port = 8000;

app.listen(8000, () => {
  console.log(`Server is listening at ${port}`);
});

