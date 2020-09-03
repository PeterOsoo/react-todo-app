import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

const App = () => {
	const [inputText, setInputText] = useState("")
	const [todos, setTodos] = useState([])
	const [status, setStatus] = useState("all")
	const [filteredTodos, setFilteredTodos] = useState([])

	//functions & events
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === true))
				break
			case "uncompleted":
				setFilteredTodos(todos.filter(todo => todo.completed === false))
				break

			default:
				setFilteredTodos(todos)
				break
		}
	}

	useEffect(() => {
		getLocalTodos()
		return () => {
			// cleanup
		}
	}, [])

	useEffect(() => {
		filterHandler()
		saveLocalTodos()
		return () => {
			// cleanup
		}
	}, [todos, status])

	//save to local

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]))
		} else {
			let todoLocal = JSON.parse(
				localStorage.getItem("todos", JSON.stringify(todos))
			)
			setTodos(todoLocal)
		}
	}

	return (
		<React.Fragment>
			<header>
				<h1> Todo List </h1>
			</header>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</React.Fragment>
	)
}

export default App
