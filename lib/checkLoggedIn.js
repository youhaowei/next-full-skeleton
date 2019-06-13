import gql from "graphql-tag";

export default (apolloClient) =>
	apolloClient
		.query({
			query: gql`
				query {
					user {
						id
					}
				}
			`
		})
		.then(({ data }) => {
			return { loggedInUser: data };
		})
		.catch((err) => {
			// Fail gracefully
			console.error(err);
			return { loggedInUser: {} };
		});
