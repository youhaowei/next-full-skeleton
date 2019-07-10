import React from "react";

import MinLayout from "../components/layouts/minimal";
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
			<MinLayout>
				<h1>Welcome to Next.js!</h1>
			</MinLayout>
		);
	}
}

export default HomePage;
