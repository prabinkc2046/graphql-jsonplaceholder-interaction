# GraphQL API Server

This project sets up a GraphQL server using Apollo Server and Express, providing a GraphQL API interface to interact with JSONPlaceholder data.

## Features

- Query todos and users from JSONPlaceholder.
- Resolve nested data like users associated with todos.

## Technologies

- Node.js
- Express
- Apollo Server
- Axios

### Retrieve all todos:

{
  getTodos {
    id
    title
    completed
  }
}

### Retrieve all users:

{
  getAllUsers {
    id
    name
    email
    phone
    website
  }
}

### Retrieve a specific user by ID:

{
  getUser(id: "2") {
    id
    name
    email
    website
  }
}

### Retrieve todos with their associated user information:

{
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

### Retrieve all users and their todos:

```{
  getAllUsers {
    id
    name
    email
    website
    todos {
      id
   }
}


