
// query to get all todos
query {
	getTodos {
		id
		title
		completed
		
	}
}


// Get all users

query {
	getAllUsers {
		id
		name
		email
		phone
		website
	}
}


// get a specific user

query {
	getUser(id: "2"){
		id
		name
		email
		website
	}
}

// get a todo with its user

query {
	getTodos {
		id
		title
		completed
		user {
			name
			email
		}
	}
}

// get a list of users and along with their todos
query {
getAllUsers {
	id
	name
	email
	website
	todos {
		id
		title
		completed
	}
}
}

// get todo of specific id

query {
getTodo(id: "1") {
	id
	userId
	title
	completed
}
}
