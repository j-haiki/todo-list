import { TodoItems } from "./TodoItems";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "You haven't added any items yet!"}
      {todos.map((todo) => {
        return (
          <TodoItems
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
