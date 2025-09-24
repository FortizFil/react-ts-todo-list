import { useTodoDetail } from '@modules/todo-detail/providers';

export const Description = () => {
  const { todo } = useTodoDetail();

  if (!todo) return null;

  return <p className="text-lg ">{todo.text}</p>;
};
