const db = require("../config/db");
const createError = require("http-errors");

exports.getAllProjects = async (req, res, next) => {
  try {
    const allProjects = await db.project.findMany({});
    res.status(200).json(allProjects);
  } catch (err) {
    next(err);
  }
};

exports.getOneProject = async (req, res, next) => {
  try {
    const projectId = Number(req.params.projectId);
    const uniqueProject = await db.project.findUnique({
      where: { id: projectId },
      include: {
        client: true,
      },
    });
    res.status(200).json(uniqueProject);
  } catch (err) {
    next(err);
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const { name, description, poster, repository, link } = req.body;
    const newProject = await db.project.create({
      data: {
        name: name,
        description: description,
        poster: poster,
        repository: repository,
        link: link,
        // client: { connect: client },
      },
      // include: { client: true },
    });
    res.status(200).json(newProject);
  } catch (err) {
    next(err);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const projectId = Number(req.params.projectId);
    const { name, description, poster, repository, link } = req.body;
    const updatedProject = await db.project.update({
      where: { id: projectId },
      data: {
        name: name,
        description: description,
        poster: poster,
        repository: repository,
        link: link,
        // client?
      },
    });
    res.status(200).json(updatedProject);
  } catch (err) {
    next(err);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const projectId = Number(req.params.projectId);
    const deletedProject = await db.project.delete({
      where: { id: projectId },
    });
    res.status(200).json(deletedProject);
  } catch (err) {
    next(err);
  }
};

//CLIENT!!
const findProject = async (id) => {
  const project = await db.project.findUnique({ where: { id } });
  return project;
};

const findClient = async (id) => {
  const client = await db.client.findUnique({ where: { id } });
  return client;
};

// GET ("/:projectId/client", getClient);

exports.getClient = async (req, res, next) => {
  try {
    const projectId = Number(req.params.projectId);

    const client = await db.project
      .findUnique({
        where: { id: projectId },
      })
      .client();
    res.status(200).json(client);
  } catch (err) {
    next(err);
  }
};

//POST "/:projectId/client", createClient);
exports.createClient = async (req, res, next) => {
  try {
    const projectId = Number(req.params.projectId);
    const { name, industry } = req.body;
    const project = await findProject(projectId);
    if (!project) {
      throw createError(404, "Project does not exist");
    }
    const newClient = await db.client.create({
      data: {
        name: name,
        industry: industry,
        project: { connect: { id: projectId } },
      },
    });
    res.status(200).json(newClient);
  } catch (err) {
    next(err);
  }
};

// PUT ("/:projectId/client/:clientId", updateClient);

exports.updateClient = async (req, res, next) => {
  try {
    const projectId = Number(req.params.projectId);
    const project = await findProject(projectId);
    if (!project) {
      throw createError(404, "Project not Found");
    }
    const clientId = Number(req.params.clientId);
    const client = await findClient(clientId);
    if (!client) {
      throw createError(404, "Client not Found");
    }
    const newName = req.body.name;
    const newIndustry = req.body.industry;
    const updatedClient = await db.client.update({
      where: { id: projectId },
      data: { name: newName, industry: newIndustry },
      // include: { client: true },
    });
    res.status(200).json(updatedClient);
  } catch (err) {
    next(err);
  }
};

// DELETE ("/:projectId/client/:clientId", deleteClient);

exports.deleteClient = async (req, res, next) => {
  try {
    const projectId = Number(req.params.projectId);
    const clientId = Number(req.params.clientId);
    const project = await findProject(projectId);
    const client = await findClient(clientId);
    if (!project) {
      throw createError(404, "Project not Found");
    }
    if (!client) {
      throw createError(404, "Client not Found");
    }
    const deletedClient = await db.client.delete({
      where: { id: clientId },
    });
    res.status(200).json(deletedClient);
  } catch (err) {
    next(err);
  }
};
