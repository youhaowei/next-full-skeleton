const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const logger = require("morgan");
// const later = require("later");
// const slack = require("./server/slack");
const next = require("next");
const { ApolloServer } = require("apollo-server-express");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const authRouter = require("./routes/auth");
const config = require("./config");
const resolvers = require("./resolvers");

const passport = require("./lib/passport");
const query = require("qs-middleware");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("./lib/mongoose");
const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		user(id: ID): User
		hello: String
	}

	type User {
		id: ID!
		email: String!
		firstName: String
		lastName: String
	}
`;

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		settings: {
			"request.credentials": "include"
		}
	},
	context: ({ req }) => {
		// get the user token from the headers
		const token = req.headers.authorization || "";

		// try to retrieve a user with the token
		console.log(req.user);
		return {
			user: req.user,
			token
		};
	}
});

nextApp.prepare().then(() => {
	var app = express();

	app.use(logger("dev"));
	app.use(express.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser()); //read cookies (needed for auth)
	app.use(express.urlencoded({ extended: false }));
	app.use(
		session({
			store: new MongoStore({ mongooseConnection: mongoose.connection }),
			secret: config.server.secret,
			resave: true,
			saveUninitialized: true,
			maxAge: 300000
		})
	);
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(path.join(__dirname, "public")));
	app.use("/auth", authRouter);
	app.use(query());
	apolloServer.applyMiddleware({
		app,
		path: config.path.graph,
		cors: { credentials: true, origin: config.server.baseUrl }
	});
	app.get("*", handle);

	const port = config.server.port;

	app.listen(port, (err) => {
		if (err) throw err;
		console.log("server is listening on port " + port);
	});

	// var textSched = later.parse.text('every 15 second');
	// later.setInterval(() => {
	// 	console.log("Time is up!");
	// 	slack.sendMessage("hello!");
	// }, textSched)
});
