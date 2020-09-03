import React from "react"
import Todo from "./Todo"
import { Button } from "react-bootstrap"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	const clearList = () => {
		console.log("clear list ")
		setTodos([])
	}
	// console.log(todos)
	return (
		<div>
			<div className="todo-container">
				<ul className="todo-list">
					{filteredTodos.map(todo => (
						<Todo
							key={todo.id}
							text={todo.text}
							todo={todo}
							todos={todos}
							setTodos={setTodos}
						/>
					))}
				</ul>
			</div>
			<div className="d-flex justify-content-center">
				<Button variant="secondary" size="lg" active onClick={clearList}>
					Clear List
				</Button>
			</div>
		</div>
	)
}

export default TodoList
