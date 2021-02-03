const {
  getAllTechnologies,
  getOneTechnology,
  createTechnology,
  updateTechnology,
  deleteTechnology,
} = require("../controller/technology.controller");
const router = require("express").Router();

//routes Technologies
router.get("/", getAllTechnologies);
router.get("/:technologyId", getOneTechnology);
router.post("/", createTechnology);
router.put("/:technologyId", updateTechnology);
router.delete("/:technologyId", deleteTechnology);

module.exports = router;
