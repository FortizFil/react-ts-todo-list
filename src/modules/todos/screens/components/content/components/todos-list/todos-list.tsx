import { useTodos } from '@modules/todos/providers';
import { Empty, TodoItem } from './components';

export const TodosList = () => {
  const { todos, toggleTodo, removeTodo, openModal } = useTodos();

  if (!todos.length) return <Empty />;

  return (
    <div>
      <ul className="space-y-3">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
};
