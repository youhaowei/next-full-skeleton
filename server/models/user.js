const { Schema, model } = require("../lib/mongoose");

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: Buffer,
	googleId: Number,
	picture: String
});

const User = new model("user", userSchema);

module.exports = User;