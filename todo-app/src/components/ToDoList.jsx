import ToDoItem from "./ToDoItem";

function ToDoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
