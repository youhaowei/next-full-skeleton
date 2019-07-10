# Next.js Fullstack Skeleton Project

This project is an all-in-one skeleton and is fully configurable. If you like developing with React, semantic ui, SSR with Next.js, Apollo GraphQL, Passport.js OAuth integration,  and MongoDB, this is the place you want to start if you wish to all of them to play nice with each other, and it's highly configurable. (The only thing that is lacking now is a test framework)

Like any Node.js project, simply install all the dependencies with `npm install`, and enjoy the project by running `npm run dev`. The project is using .env so you can pass in argument by putting environment variables in front of your NPM, for example, for the server to run on alternative port, do `PORT=5000 npm run dev`. You can find more about configurations in server/config.js. By default, the server runs on port 3000, and will look for MongoDB server on localhost:27017.

Here is a full list of libraries that are used, and where you can find the related files if you wish to start implementing or customizing:

### IDE

I've included a .vscode folder, if you are using VSCode, you can take advantage of it, otherwise, it's the first thing you should remove. There is also a .eslintrc for eslint to help your editor of choice with syntax highlight and check.

### Express

The server is an express server, and the entry point is server/index.js. All the server side route, like /login, /logout are inside the /server/routes.

### React with Next.js

The framework for UI, all the pages are under /pages, all the components should go under /components, assets are in static. Use .babelrc to config babel, and next.config.js to configure next.js wrapper for webpack. Go to their website to read more about why I choose it!

### Semantic-UI

It's one of the best looking libraries out there, especially if you are developing a webapp, great for website too. React-Semantic-UI library is great. My only problem with this library is it's really hard to customize it. Sure it comes with a nice theming pipeline but it's gulp, and now a days poeple use webpacks. So, I've actually managed to configure it well, so you can customize it the way it provided with using gulp, but with the Next.js webpack. Take a look at semantic-ui folder if you are interested.

### Apollo Client

Yes, you can use apollo client in getInitialProps functions, I've tried all of the examples online and get this one to work with Passport.js sessions. You can also use JWT, by changing initApollo.js

### Mongoose

I really want to use Prisma, but I'm waiting for the 2.0, Mongoose is a really good DRM for MongoDB. You can find the setup file under server/lib along side with other server side libraries that I'm using. I've setup the server/models folder intentded for all the database models.

### Apollo Server

The express version of it, all the graphql schema goes in server/schemas, and resolvers goes in server/resolvers

Of course you don't have to follow any of this, in fact, I recommand to add/swap the libraries you need. For example, change semantic-ui to bootstrap, it should be relatively easy. I do hope you find this useful, and welcome to make PRs to make this project better!
