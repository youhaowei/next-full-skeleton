const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.mongo.uri, {
	useNewUrlParser: true
});

mongoose.Promise = Promise;

const db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"));

db.on("open", function() {
	console.log("MongoDB Connected!");
});

module.exports = mongoose;