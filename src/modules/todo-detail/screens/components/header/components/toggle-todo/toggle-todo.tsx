import { Toggle } from '@common/ui-kit';
import { useTodoDetail } from '@modules/todo-detail/providers';

export const ToggleTodo = () => {
  const { todo, toggleTodo } = useTodoDetail();

  if (!todo) return null;

  return (
    <div className="flex items-center gap-[5px]">
      <p>Active</p>
      <Toggle enabled={todo.completed} onClick={toggleTodo} />
      <p>Completed</p>
    </div>
  );
};
