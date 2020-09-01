import React from "react"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

const App = () => {
	return (
		<div>
			<header>
				<h1>Rd27's Todo List</h1>
			</header>
			<Form />
			<TodoList />
		</div>
	)
}

export default App
