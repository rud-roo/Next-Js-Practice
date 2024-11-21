"use client";

import { useState } from "react";

const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState("")

  return (
    <div>
      <form>
        <input type="text" value={todoTitle}/>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  )
}

export default TodoList;