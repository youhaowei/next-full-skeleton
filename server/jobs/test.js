const axios = require("axios");
const slack = require("../lib/slack");

module.export = (job, done) => {
	slack.sendMessage("Hello, this is Octavia");
};