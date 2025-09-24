import { transformDate } from '@common/utils';
import { useTodoDetail } from '@modules/todo-detail/providers';

export const Date = () => {
  const { todo } = useTodoDetail();

  if (!todo) return null;

  return (
    <p className="text-xs text-gray-500">
      Created at: {transformDate(todo.id)}
    </p>
  );
};
