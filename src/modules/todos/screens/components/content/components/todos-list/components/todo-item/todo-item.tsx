import { useNavigate } from 'react-router';

import { PATH } from '@router';
import { Checkbox, IconButton } from '@common/ui-kit';
import type { Todo } from '@common/types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  openModal: (id?: number) => void;
}

export const TodoItem = ({
  todo,
  toggleTodo,
  removeTodo,
  openModal,
}: TodoItemProps) => {
  const navigate = useNavigate();

  const handleOpenDetailPage = () => navigate(PATH.TodoDetail(todo.id));

  return (
    <li className="flex justify-between items-center p-4 bg-white shadow rounded-lg ">
      <div className="flex items-center gap-[16px]">
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <h4
          className={`line-clamp-1 font-semibold ${todo.completed ? 'line-through text-gray-400' : ''}`}
        >
          {todo.title}
        </h4>
      </div>
      <div className="flex items-center gap-[10px]">
        <IconButton icon="ri-eye-line" onClick={handleOpenDetailPage} />
        <IconButton icon="ri-pencil-line" onClick={() => openModal(todo.id)} />
        <IconButton
          icon="ri-delete-bin-6-line"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </li>
  );
};
