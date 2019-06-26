import React from "react";
import MainLayout from "../components/layouts/main";
import { Segment, Image, Button, Icon } from "semantic-ui-react";
import Link from "next/link";

export default class LoginPage extends React.Component {
	render() {
		return (
			<MainLayout>
				<div style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					height: "100vh",
					backgroundImage: "url(\"https://source.unsplash.com/daily?nature\")",
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}>
					<Segment style={{
						margin: "auto",
						width: "50%",
						padding: 16,
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}>
						<Image src="/static/images/New-ODM-logo.png" size="small" />
						<Link href="/auth/google">
							<Button color="google plus">
								<Icon name="google" /> Login with Google
							</Button>
						</Link>
					</Segment>
				</div>
			</MainLayout>
		);
	}
}
