import { useNavigate } from 'react-router';

import { PATH } from '@router';
import { IconButton } from '@common/ui-kit';
import { useTodoDetail } from '@modules/todo-detail/providers';

export const DeleteTodoButton = () => {
  const navigate = useNavigate();
  const { removeTodo } = useTodoDetail();

  const handleDelete = () => {
    removeTodo();
    navigate(PATH.Root());
  };

  return <IconButton icon="ri-delete-bin-6-line" onClick={handleDelete} />;
};
