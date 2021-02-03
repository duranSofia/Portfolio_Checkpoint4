const router = require("express").Router();
const projectRoutes = require("./project.routes");
const technologyRoutes = require("./technology.routes");

router.use("/project", projectRoutes);
router.use("/technology", technologyRoutes);

module.exports = router;
