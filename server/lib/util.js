module.exports = {
	getConfig: (name, defaultValue) => {
		return process.env[name] || defaultValue;
	}
};