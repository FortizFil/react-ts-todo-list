import { IconButton } from '@common/ui-kit';
import { useTodoDetail } from '@modules/todo-detail/providers';

export const EditTodoButton = () => {
  const { openModal } = useTodoDetail();

  return <IconButton icon="ri-pencil-line" onClick={openModal} />;
};
