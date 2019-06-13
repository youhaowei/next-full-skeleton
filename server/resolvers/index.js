const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
	Query: {
		hello: () => "Hello World!",
		user: (parent, args, context, info) => {
			if (!context.user) {
				throw new AuthenticationError("authentication required");
			}
			return {
				id: "???"
			};
		}
	}
};

module.exports = resolvers;
