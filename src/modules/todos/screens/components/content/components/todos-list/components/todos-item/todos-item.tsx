import { Checkbox, IconButton } from '@common/ui-kit';
import type { Todo } from '@modules/todos/types/types';
import { PATH } from '@router';
import { Link } from 'react-router';

interface TodosItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  openModal: (id?: number) => void;
}

export const TodosItem = ({
  todo,
  toggleTodo,
  removeTodo,
  openModal,
}: TodosItemProps) => {
  return (
    <li className="flex justify-between items-center bg-white shadow rounded-lg p-4">
      <Link to={PATH.TodoDetail(todo.id)}>
        <div className="flex items-center gap-[16px]">
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <div>
            <h4 className="font-semibold">{todo.title}</h4>
            <p className="text-sm text-gray-500">{todo.text}</p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <IconButton
            icon="ri-pencil-line"
            onClick={() => openModal(todo.id)}
          />
          <IconButton
            icon="ri-delete-bin-6-line"
            onClick={() => removeTodo(todo.id)}
          />
        </div>
      </Link>
    </li>
  );
};
