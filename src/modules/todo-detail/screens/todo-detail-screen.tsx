import { TodoFormModal } from '@common/components';
import { useTodoDetail } from '../providers';
import { Header, Content } from './components';

export const TodoDetailScreen = () => {
  const { showModal, closeModal, editTodo, todo } = useTodoDetail();

  return (
    <>
      <Header />
      <Content />
      {showModal && (
        <TodoFormModal
          defaultValues={
            todo
              ? { title: todo.title, text: todo.text, id: todo.id }
              : undefined
          }
          onClose={closeModal}
          onSubmit={editTodo}
        />
      )}
    </>
  );
};
