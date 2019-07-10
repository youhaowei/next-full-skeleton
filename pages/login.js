import React from "react";
import MinLayout from "../components/layouts/minimal";
import { Segment, Image, Button, Icon } from "semantic-ui-react";
import Link from "next/link";

export default class LoginPage extends React.Component {
	render() {
		return (
			<MinLayout>
				<div style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					backgroundImage: "url(\"https://source.unsplash.com/daily?nature\")",
					backgroundSize: "cover",
					backgroundPosition: "center",
					filter: "blur(8px)",
					zIndex: -1
				}}>
				</div>
				<div style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					height: "100vh",
				}}>
					<Segment style={{
						margin: "auto",
						width: "50%",
						padding: 16,
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						zIndex: 1
					}}>
						<Image src="/static/images/New-ODM-logo.png" size="small" />
						<Link href="/auth/google">
							<Button color="google plus">
								<Icon name="google" /> Login with Google
							</Button>
						</Link>
					</Segment>
				</div>
			</MinLayout>
		);
	}
}
