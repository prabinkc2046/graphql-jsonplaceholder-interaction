const express = require("express");

const { ApolloServer } = require("@apollo/server");

const { expressMiddleware } = require("@apollo/server/express4");

const bodyParser = require("body-parser");

const cors = require("cors");

const axios = require("axios");


async function startServer () {
	const app = express();
	const server = new ApolloServer({
		typeDefs: `
			type Todo {
				id: ID!
				title: String!
				completed: Boolean!
				userId: ID!
				user: User!
			}

			type User {
				id: ID!
				name: String!
				email: String!
				phone: String!
				website: String!
				todos: [Todo]
			}

			type Query {
				getTodos: [Todo]
				getAllUsers: [User]
				getUser(id: ID!): User
				getTodo(id: ID!): Todo
			}
		`,
		resolvers: {
		Query: {
			getTodos: async () => {
				return (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
			},
			getAllUsers: async () => {
				return (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
			},
			getUser: async (_, { id }) => {
				return (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
			},
			getTodo: async (_, { id }) => {
				return (await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)).data;
			},
		},
		
		Todo: {
			user: async (todo) => {
				return (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)).data;
			},
		},

		User: {
			todos: async (user) => {
				return (await axios.get(`https://jsonplaceholder.typicode.com/todos/${user.id}`)).data;
			}, 
		},

		},
	});
	app.use(bodyParser.json());
	app.use(cors());

	await server.start();
	app.use("/graphql", expressMiddleware(server));
	app.listen(8000, () => {
		console.log(`Server is ready at 8000`)
	});
};

startServer();
