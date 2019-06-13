const { getConfig } = require("./lib/util");

const config = {
	google: {
		client: {
			id: getConfig(
				"GOOGLE_CLEINT_ID",
				"557043323324-aouvnh06b15rs6a3lkrplckt42ogh2ae.apps.googleusercontent.com"
			),
			secret: getConfig("GOOGLE_CLIENT_SECRET", "5qQYKzxf2FZ1R-9mTKOpflG0")
		}
	},
	server: {
		secret: getConfig("SECRET", "octavia-wildcat"),
		domain: getConfig("DOMAIN", "localhost"),
		port: getConfig("PORT", 3000),
		protocol: getConfig("PROTOCOL", "http"),
		urls: {}
	},
	path: {
		graph: "/graph"
	},
	mongo: {
		uri: getConfig("MONGO_URI", "mongodb://localhost:27017/test")
	}
};

function getPortDisplay(protocal, port) {
	if (protocol === "http" && port === 80) {
		return "";
	}
	return ":" + port;
}

const {
	server: { domain, port, protocol }
} = config;
const baseUrl = `${protocol}://${domain}${getPortDisplay(protocol, port)}`;
config.server.baseUrl = baseUrl;

config.server.urls = {
	base: baseUrl,
	graph: baseUrl + config.path.graph
};

module.exports = config;
