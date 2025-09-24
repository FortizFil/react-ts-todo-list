import { TodoFormModal } from '@common/components';
import { useTodos } from '../providers';
import { Header, Content } from './components';

export const TodosScreen = () => {
  const { showModal, closeModal, manageTodo, initialData } = useTodos();

  return (
    <>
      <div className="p-6 max-w-3xl mx-auto h-screen flex flex-col gap-[20px]">
        <Header />
        <Content />
      </div>
      {showModal && (
        <TodoFormModal
          defaultValues={initialData ? initialData : undefined}
          onClose={closeModal}
          onSubmit={manageTodo}
        />
      )}
    </>
  );
};
