import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import config from "../server/config";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
	global.fetch = fetch;
}

function create(initialState, { getToken, getCookies, fetchOptions }) {
	const httpLink = createHttpLink({
		uri: config.server.urls.graph,
		credentials: "same-origin",
		fetchOptions
	});

	const authLink = setContext((_, { headers }) => {
		const token = getToken();
		console.log("getToken", token);
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
				cookie: getCookies()
			}
		};
	});

	// Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
	return new ApolloClient({
		connectToDevTools: process.browser,
		ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
		link: authLink.concat(httpLink),
		credentials: "same-origin",
		cache: new InMemoryCache().restore(initialState || {}),
		onError: ({ networkError, graphQLErrors }) => {
			console.error("graphQLErrors", graphQLErrors);
			console.error("networkError", networkError.result.errors);
		}
	});
}

export default function initApollo(initialState, options) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		let fetchOptions = {};
		// If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
		// 'https-proxy-agent' is required here because it's a sever-side only module
		return create(initialState, {
			...options,
			fetchOptions
		});
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState, options);
	}

	return apolloClient;
}
