const client = require("../config/db");

exports.getAllAlbums = async (req, res, next) => {
  try {
    const allAlbums = await client.album.findMany({
      include: { tracks: true },
    });
    res.status(200).json(allAlbums);
  } catch (err) {
    next(err);
  }
};

//as a user, I want to be able to see an album by entering its id in the url.
exports.getOneAlbum = async (req, res, next) => {
  try {
    const albumId = Number(req.params.albumId);
    const uniqueAlbum = await client.album.findUnique({
      where: { id: albumId },
      include: {
        tracks: true,
      },
    });
    res.status(200).json(uniqueAlbum);
  } catch (err) {
    next(err);
  }
};

//as a user, I want to be able to create a new album.
exports.createAlbum = async (req, res, next) => {
  try {
    const { title, genre, picture, artist, tracks } = req.body;
    const newAlbum = await client.album.create({
      data: {
        title: title,
        genre: genre,
        picture: picture,
        artist: artist,
        tracks: { connect: tracks },
      },
      include: { tracks: true },
    });
    res.status(200).json(newAlbum);
  } catch (err) {
    next(err);
  }
};

// as a user, I want to be able to modify an album.
exports.updateAlbum = async (req, res, next) => {
  try {
    const albumId = Number(req.params.albumId);
    const { title, genre, picture, artist, tracks } = req.body;
    const updatedAlbum = await client.album.update({
      where: { id: albumId },
      data: {
        title,
        genre,
        picture,
        artist,
        tracks,
      },
    });
    res.status(200).json(updatedAlbum);
  } catch (err) {
    next(err);
  }
};

// as a user, I want to be able to delete an album.
exports.deleteAlbum = async (req, res, next) => {
  try {
    const albumId = Number(req.params.albumId);
    const deletedAlbum = await client.album.delete({
      where: { id: albumId },
    });
    res.status(200).json(deletedAlbum);
  } catch (err) {
    next(err);
  }
};
