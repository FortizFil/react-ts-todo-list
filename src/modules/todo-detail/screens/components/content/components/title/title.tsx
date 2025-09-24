import { useTodoDetail } from '@modules/todo-detail/providers';

export const Title = () => {
  const { todo } = useTodoDetail();

  if (!todo) return null;

  return (
    <h1
      className={`text-4xl font-bold ${todo.completed ? 'line-through text-gray-400' : ''}`}
    >
      {todo.title}
    </h1>
  );
};
