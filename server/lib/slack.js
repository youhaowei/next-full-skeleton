const SLACK_WEBHOOK = "https://hooks.slack.com/services/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";

const axios = require("axios");

module.exports = {
	sendMessage: (message) => {
		axios.post(SLACK_WEBHOOK, {
			text: message
		}).catch(e => {
			console.error(e);
		});
	}
};