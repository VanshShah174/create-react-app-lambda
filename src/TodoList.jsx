import { TodoItem } from "./TodoItem";

export default function TodoList({ todos, toggleTodo , deleteTodo}){

    // const [todos, setTodos] = useState([]);

    return (
    <>
    <ul className="list">
        {todos.length === 0 && "No Todoss"}
        {todos.map((todo) => {
          return (
           <TodoItem {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
           />
          );
        })}
      </ul>
      </>
    )
}