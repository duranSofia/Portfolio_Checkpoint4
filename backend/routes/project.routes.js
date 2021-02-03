const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getOneProject,
  getClient,
  createClient,
  updateClient,
  deleteClient,
  // getAllImages,
  // getOneImage,
  // addImage,
  // updateImage,
  // deleteImage,
} = require("../controller/project.controller");
const router = require("express").Router();

//routes Project
router.get("/", getAllProjects);
router.get("/:projectId", getOneProject);
router.post("/", createProject);
router.put("/:projectId", updateProject);
router.delete("/:projectId", deleteProject);

router.get("/:projectId/client", getClient);
router.post("/:projectId/client", createClient);
router.put("/:projectId/client/:clientId", updateClient);
router.delete("/:projectId/client/:clientId", deleteClient);

// router.get("/:projectId/images/", getAllImages);
// router.get("/:projectId/images/:imageId", getOneImage);
// router.post("/:projectId/images", addImage);
// router.put("/:projectId/images/:imageId", updateImage);
// router.delete("/:projectId/images/:imageId", deleteImage);

module.exports = router;
