import { Button } from '@common/ui-kit';
import { useTodos } from '@modules/todos/providers';

export const CreateTaskButton = () => {
  const { openModal } = useTodos();

  return <Button label="Create task" onClick={openModal} />;
};
