import { Button } from '@common/ui-kit';
import { useTodos } from '@modules/todos/providers';

export const CreateTodoButton = () => {
  const { openModal } = useTodos();

  return <Button label="+ Add todo" onClick={() => openModal()} />;
};
