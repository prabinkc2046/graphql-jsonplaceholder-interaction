import React from 'react';
import { gql, useQuery } from '@apollo/client';


function Todos () {
const GET_TODOS = gql`
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
`;

const {loading, error, data } = useQuery(GET_TODOS);

if (loading) return <div> page is loading.... </div>

if (error) return <div> Error: {error.message} </div>

return (
	<div className="todos">
		{data.getTodos.map((todo) => (
			<div key= {todo.id} className="todo">
				<h2>Title: {todo.title}</h2>
				<p>Status: {todo.completed ? 'Completed' : 'InCompleted'}</p>

				<br />

				<p> Assigned to: {todo.user.name} Email: {todo.user.email}</p>
			</div>
		))}
	</div>
)

};


export default Todos;
