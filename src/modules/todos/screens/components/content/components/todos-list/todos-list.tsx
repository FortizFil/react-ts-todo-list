import { useTodos } from '@modules/todos/providers';
import { Empty, TodoItem, Filters } from './components';

export const TodosList = () => {
  const { todos, toggleTodo, removeTodo, openModal } = useTodos();

  if (!todos.length) return <Empty />;

  return (
    <div className="flex flex-col gap-[15px]">
      <Filters />
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
