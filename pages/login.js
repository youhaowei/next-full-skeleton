import MainLayout from "../components/layouts/main";

export default class LoginPage extends React.Component {
	render() {
		return (
			<MainLayout>
				<a href="/auth/google">Login with Google</a>
				<h1>Login</h1>
			</MainLayout>
		);
	}
}
