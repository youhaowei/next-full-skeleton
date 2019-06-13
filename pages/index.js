import React from "react";
import Router from "next/router";

import MainLayout from "../components/layouts/main";
import Head from "../components/head";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";

class HomePage extends React.Component {
	static async getInitialProps(context, apolloCient) {
		const { loggedInUser } = await checkLoggedIn(context.apolloClient);

		if (!loggedInUser.user) {
			// If not signed in, send them somewhere more useful
			redirect(context, "/login");
		}

		return { loggedInUser };
	}

	render() {
		return (
			<>
				<Head />
				<h1>Welcome to Next.js!</h1>
			</>
		);
	}
}

export default HomePage;
