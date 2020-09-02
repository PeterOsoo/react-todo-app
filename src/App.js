import React, { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

const App = () => {
	const [inputText, setInputText] = useState("")
	const [todos, setTodos] = useState([])
	return (
		<div>
			<header>
				<h1>Rd27's Todo List </h1>
			</header>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
			/>
			<TodoList />
		</div>
	)
}

export default App
