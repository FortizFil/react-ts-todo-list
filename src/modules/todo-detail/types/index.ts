import type { Todo, TodoFormData } from '@common/types';

export interface TodoDetailControllerType {
  todo: Todo | null;
  showModal: boolean;
  editTodo: (data: TodoFormData) => void;
  toggleTodo: () => void;
  removeTodo: () => void;
  openModal: () => void;
  closeModal: () => void;
}
