const client = require('../config/db');

// TRACK as a user, I want to list all the songs from an album.

exports.getAllTracks = async (req, res, next) => {
	try {
		const allTracks = await client.track.findMany();
		res.status(200).json(allTracks);
	} catch (err) {
		next(err);
	}
};

exports.getOneTrack = async (req, res, next) => {
	try {
		const trackId = Number(req.params.trackId);
		const uniqueTrack = await client.track.findUnique({
			where: { id: trackId },
		});
		res.status(200).json(uniqueTrack);
	} catch (err) {
		next(err);
	}
};

// TRACK as a user, I want to create and assign a song to an album.
exports.createTrack = async (req, res, next) => {
	try {
		const albumId = Number(req.params.albumId);
		const { title, youtube_url } = req.body;
		const newTrack = await client.track.create({
			data: {
				title: title,
				youtube_url: youtube_url,
				album: { connect: { id: albumId } },
			},
		});
		res.status(200).json(newTrack);
	} catch (err) {
		next(err);
	}
};

// TRACK as a user, I want to edit a song from an album.
exports.updateTrack = async (req, res, next) => {
	try {
		const trackId = Number(req.params.trackId);
		const { title, youtube_url } = req.body;
		const updatedTrack = await client.track.update({
			where: { id: trackId },
			data: {
				title,
				youtube_url,
			},
		});
		res.status(200).json(updatedTrack);
	} catch (err) {
		next(err);
	}
};

// TRACK as a user, I want to delete a song.
exports.deleteTrack = async (req, res, next) => {
	try {
		const trackId = Number(req.params.trackId);
		const deletedTrack = await client.track.delete({
			where: { id: trackId },
		});
		res.status(200).json(deletedTrack);
	} catch (err) {
		next(err);
	}
};
