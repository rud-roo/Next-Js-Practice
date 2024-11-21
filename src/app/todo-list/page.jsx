"use-client"

const { useState } = require("react")

const TodoList = () => {
  console.log("I am todolist")
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <div>
      <form >
        <input type="text" value={todoTitle} />
        <button type="submit">CreateTodo</button>
      </form>
    </div>
  )
}