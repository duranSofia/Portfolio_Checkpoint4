const client = require("../config/db");

exports.getAllTechnologies = async (req, res, next) => {
  try {
    const allTechnologies = await client.technology.findMany();
    res.status(200).json(allTechnologies);
  } catch (err) {
    next(err);
  }
};

exports.getOneTechnology = async (req, res, next) => {
  try {
    const technologyId = Number(req.params.technologyId);
    const uniqueTechnology = await client.technology.findUnique({
      where: { id: technologyId },
    });
    res.status(200).json(uniqueTechnology);
  } catch (err) {
    next(err);
  }
};

exports.createTechnology = async (req, res, next) => {
  try {
    const { name, experience } = req.body;
    const newTechnology = await client.technology.create({
      data: {
        name: name,
        experience: experience,
        // project: { connect: { id: projectId } },
      },
    });
    res.status(200).json(newTechnology);
  } catch (err) {
    next(err);
  }
};

exports.updateTechnology = async (req, res, next) => {
  try {
    const technologyId = Number(req.params.technologyId);
    const { name, experience } = req.body;
    const updatedTechnology = await client.technology.update({
      where: { id: technologyId },
      data: {
        name: name,
        experience: experience,
      },
    });
    res.status(200).json(updatedTechnology);
  } catch (err) {
    next(err);
  }
};

exports.deleteTechnology = async (req, res, next) => {
  try {
    const technologyId = Number(req.params.technologyId);
    const deletedTechnology = await client.technology.delete({
      where: { id: technologyId },
    });
    res.status(200).json(deletedTechnology);
  } catch (err) {
    next(err);
  }
};
