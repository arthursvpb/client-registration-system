const express = require("express");
const router = express.Router();
const PersonController = require("../controllers/PersonController");

router.get("/", (req, res) => {
  res.send("Landing Page");
});
router.post("/person", PersonController.create);
router.get("/person", PersonController.index);
router.get("/person/:id", PersonController.show);
router.put("/person/:id", PersonController.update);
router.delete("/person/:id", PersonController.destroy);

module.exports = router;
