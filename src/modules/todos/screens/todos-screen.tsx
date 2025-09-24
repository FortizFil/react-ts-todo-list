import { TodoFormModal } from '@common/components';
import { useTodos } from '../providers';
import { Header, Content } from './components';

export const TodosScreen = () => {
  const { showModal, closeModal, saveTodo, initialData } = useTodos();

  return (
    <>
      <Header />
      <Content />
      {showModal && (
        <TodoFormModal
          defaultValues={initialData ? initialData : undefined}
          onClose={closeModal}
          onSubmit={saveTodo}
        />
      )}
    </>
  );
};
